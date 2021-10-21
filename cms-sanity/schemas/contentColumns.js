export default {
  name: 'contentColumns',
  title: 'Columns',
  type: 'object',
  fields: [
    {
      name: 'columns',
      title: 'Columns',
      type: 'array',
      of: [{ name: 'column', title: 'Column', type: 'column' }],
    },
  ],
  preview: {
    select: {
      columns: 'columns',
    },
    prepare({ columns = [] }) {
      let titles = []
      columns.forEach((col) => titles.push(col.title.map((t) => t.children)))
      titles = titles.flat().filter((t) => t !== undefined)
      let editTitles = []
      titles.forEach((col) => col.map((c) => editTitles.push(c)))
      editTitles = editTitles.filter((child) => child._type === 'span')
      return {
        title: editTitles.map((span) => span.text).join(', '),
        subtitle:
          columns.length === 1 ? `1 Column` : `${columns.length} Columns`,
      }
    },
  },
}
