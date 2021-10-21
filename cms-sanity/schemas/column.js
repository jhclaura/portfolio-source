export default {
  name: 'column',
  title: 'Column',
  type: 'object',
  fields: [
    { name: 'title', title: 'Title', type: 'blockContent' },
    { name: 'body', title: 'Body', type: 'blockContent' },
  ],
  preview: {
    select: {
      title: 'title',
      body: 'body',
    },
    prepare({ title = [], body = [] }) {
      const t = title.find((block) => block._type === 'block')
      const b = body.find((block) => block._type === 'block')
      return {
        title: t
          ? t.children
              .filter((child) => child._type === 'span')
              .map((span) => span.text)
              .join('')
          : 'No title',
        subtitle: b
          ? b.children
              .filter((child) => child._type === 'span')
              .map((span) => span.text)
              .join('')
          : 'No body',
      }
    },
  },
}
