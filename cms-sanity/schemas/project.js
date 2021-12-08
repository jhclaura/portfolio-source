export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      fields: [
        {
          name: 'caption',
          type: 'text',
          title: 'Caption',
        },
      ],
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            annotations: [
              { name: 'color', title: 'Color', type: 'color' },
              {
                name: 'link',
                type: 'object',
                title: 'External link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                  {
                    title: 'Open in new tab',
                    name: 'blank',
                    type: 'boolean',
                  },
                ],
                initialValue: {
                  blank: true,
                },
              },
              {
                name: 'internalLink',
                type: 'object',
                title: 'Internal link',
                fields: [
                  {
                    name: 'reference',
                    type: 'reference',
                    title: 'Reference',
                    to: [
                      { type: 'post' },
                      // other types you may want to link to
                    ],
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'contentColumns',
        },
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
            {
              name: 'width',
              type: 'number',
              title: 'Width',
            },
            {
              name: 'height',
              type: 'number',
              title: 'Height',
            },
          ],
        },
        {
          type: 'video',
        },
        {
          type: 'imageSlide',
        },
        {
          type: 'flickr',
        },
        { type: 'imageBlock' },
      ],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
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
            {
              name: 'width',
              type: 'number',
              title: 'Width',
            },
            {
              name: 'height',
              type: 'number',
              title: 'Height',
            },
          ],
        },
        { type: 'imageBlock' },
        {
          type: 'flickr',
        },
      ],
    },
    {
      name: 'caseStudy',
      title: 'Case study',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'contentColumns',
        },
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
            {
              name: 'width',
              type: 'number',
              title: 'Width',
            },
            {
              name: 'height',
              type: 'number',
              title: 'Height',
            },
          ],
        },
        {
          type: 'video',
        },
        {
          type: 'imageSlide',
        },
        {
          type: 'flickr',
        },
      ],
    },
  ],
  initialValue: () => ({
    publishedAt: new Date().toISOString(),
  }),
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
}
