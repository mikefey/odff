import { defineType, defineField } from 'sanity';

export const scheduleDay = defineType({
  name: 'scheduleDay',
  title: 'Schedule Day',
  type: 'object',
  fields: [
    defineField({
      name: 'dayLabel',
      title: 'Day Label',
      type: 'string',
      description: 'e.g. "Monday, October 26"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'screenings',
      title: 'Screenings',
      type: 'array',
      of: [{ type: 'screening' }],
    }),
  ],
  preview: {
    select: { title: 'dayLabel', screenings: 'screenings' },
    prepare({ title, screenings }) {
      const count = Array.isArray(screenings) ? screenings.length : 0;
      return { title, subtitle: `${count} screening${count === 1 ? '' : 's'}` };
    },
  },
});
