import { defineType, defineField } from 'sanity';

export const mastheadSection = defineType({
  name: 'mastheadSection',
  title: 'Masthead Section',
  type: 'object',
  fields: [
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'e.g. "Founders"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'names',
      title: 'Names',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    select: { title: 'role', names: 'names' },
    prepare({ title, names }) {
      const count = Array.isArray(names) ? names.length : 0;
      return { title, subtitle: `${count} name${count === 1 ? '' : 's'}` };
    },
  },
});
