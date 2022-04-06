export default {
  name: 'video',
  type: 'object',
  title: 'Video Embed',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'Video URL',
    },
    {
      name: 'caption',
      type: 'text',
      title: 'Caption',
    },
    {
      name: 'widthPercentage',
      type: 'number',
      title: 'Width Percentage',
      description:
        '100 for full width of the parent container, 50 for half width',
    },
    {
      name: 'backgroundColor',
      type: 'color',
      title: 'Background Color',
      description: 'Color to fill the background of the non 100% width video',
    },
  ],
  preview: {
    select: {
      title: 'url',
      description: 'caption',
    },
  },
}
