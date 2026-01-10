import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Shoes',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string', // e.g. "Burgundy Classic Heel"
    }),
    defineField({
      name: 'id',
      title: 'Product ID',
      type: 'string',
      description: 'The unique ID (e.g., ak-300-58)',
    }),
    defineField({
      name: 'price',
      title: 'Price (GHS)',
      type: 'number',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Heels', value: 'heels' },
          { title: 'Flats', value: 'flats' },
          { title: 'Sandals', value: 'sandals' },
          { title: 'Slippers', value: 'slippers' },
        ],
        layout: 'radio', // Shows as buttons
      },
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image' }],
      description: 'Add extra angles or color variations here.',
    }),
    defineField({
      name: 'isNew',
      title: 'Is New Arrival?',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})