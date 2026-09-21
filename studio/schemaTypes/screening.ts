import { defineType, defineField } from 'sanity';

export const screening = defineType({
  name: 'screening',
  title: 'Screening',
  type: 'object',
  fields: [
    defineField({
      name: 'time',
      title: 'Time',
      type: 'string',
      description: 'e.g. "1 – 4 PM" or "7:30 PM"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Film Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'note',
      title: 'Note',
      type: 'string',
      description: 'Optional line shown under the title, e.g. "Q&A with director Joan Churchill"',
    }),
    defineField({
      name: 'url',
      title: 'Event Page URL',
      type: 'url',
      description: 'Link to the film\'s event page on ojaiplayhouse.com. The title links here when set.',
      validation: (rule) =>
        rule.uri({ scheme: ['http', 'https'] }).optional(),
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'time' },
  },
});
