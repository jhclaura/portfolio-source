export default {
  name: 'imageSlide',
  title: 'Image Slide',
  type: 'document',
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'caption',
              type: 'text',
              title: 'Caption',
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
  ],
}
