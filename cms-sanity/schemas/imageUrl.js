import React from 'react'

const ImageUrlPreview = ({ value }) => {
  return (
    <>
      <img src={value.url} width="640" height="480" />
    </>
  )
}

export default {
  name: 'imageUrl',
  type: 'object',
  title: 'Image URL',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'Image URL',
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
      url: 'url',
    },
    component: ImageUrlPreview,
  },
}
