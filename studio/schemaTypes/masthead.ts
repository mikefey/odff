import { defineType, defineField } from 'sanity';
import { UsersIcon } from '@sanity/icons/Users';

export const masthead = defineType({
  name: 'masthead',
  title: 'Masthead',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Masthead',
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{ type: 'mastheadSection' }],
    }),
  ],
  preview: {
    select: { title: 'title' },
    prepare({ title }) {
      return { title: title || 'Masthead' };
    },
  },
});
