import React from 'react'

export default {
  name: 'imageBlock',
  title: 'Image Block',
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
            },
          ],
          preview: {
            select: {
              title: 'caption',
              media: 'asset',
            },
          },
        },
      ],
    },
    {
      name: 'caption',
      type: 'text',
      title: 'Caption',
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      image0: 'images.0.asset.url',
      image1: 'images.1.asset.url',
      caption: 'caption',
    },
    prepare({ image0, image1, caption = '' }) {
      return {
        title: caption ? caption : 'No caption',
        media: (
          <div>
            <img src={image0} />
            <img src={image1} />
          </div>
        ),
      }
    },
  },
}
