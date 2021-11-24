import React from 'react'

const FlickrPreview = ({ value }) => {
  return (
    <>
      <img src={value.previewImage} width="640" height="480" />
    </>
  )
}

export default {
  name: 'flickr',
  type: 'object',
  title: 'Flickr Embed',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'Flickr album URL',
    },
    {
      name: 'previewImage',
      type: 'url',
      title: 'Previe Image URL',
    },
  ],
  preview: {
    select: {
      url: 'url',
      previewImage: 'previewImage',
    },
    component: FlickrPreview,
  },
}
