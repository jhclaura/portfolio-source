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
    {
      name: 'withDivider',
      title: 'With Divider',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      columns: 'columns',
    },
    prepare({ columns = [] }) {
      let titles = []
      columns.forEach((col) => {
        if (col.title) titles.push(col.title.map((t) => t.children))
      })
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
