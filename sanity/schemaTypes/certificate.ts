import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'certificate',
  title: 'Certificate',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of certification",
      type: 'string',
    },  
    {
      name: 'earned',
      title: 'Earned',
      description: 'time when certificate was earned',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'score',
      title: 'Score',
      type: 'string',
    },
  ],
})
