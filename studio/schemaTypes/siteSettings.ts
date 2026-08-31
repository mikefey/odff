import { defineType, defineField } from 'sanity';
import { CogIcon } from '@sanity/icons/Cog';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  options: { singleton: true },
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'object',
      fields: [
        defineField({
          name: 'buyTicketsLabel',
          title: 'Buy Tickets Label',
          type: 'string',
          initialValue: 'BUY TICKETS',
        }),
        defineField({
          name: 'buyTicketsUrl',
          title: 'Buy Tickets URL',
          type: 'url',
          validation: (rule) =>
            rule.uri({ scheme: ['http', 'https'] }).optional(),
        }),
        defineField({
          name: 'bookRoomLabel',
          title: 'Book a Room Label',
          type: 'string',
          initialValue: 'BOOK A ROOM',
        }),
        defineField({
          name: 'bookRoomUrl',
          title: 'Book a Room URL',
          type: 'url',
          validation: (rule) =>
            rule.uri({ scheme: ['http', 'https'] }).optional(),
        }),
        defineField({
          name: 'headerBadge',
          title: 'Header Badge Image',
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
              validation: (rule) =>
                rule.required().warning('Alt text is important for accessibility'),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({
          name: 'dateRange',
          title: 'Date Range',
          type: 'string',
          initialValue: 'OCTOBER 27 – 31',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'location',
          title: 'Location',
          type: 'string',
          initialValue: 'OJAI, CALIFORNIA',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'monogram',
          title: 'Monogram Emblem Image',
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
              validation: (rule) =>
                rule.required().warning('Alt text is important for accessibility'),
            }),
          ],
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'Ojai Documentary Film Festival',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'body',
          title: 'Body',
          type: 'array',
          of: [{ type: 'block' }],
        }),
        defineField({
          name: 'botanicalIllustration',
          title: 'Botanical Illustration',
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
              validation: (rule) =>
                rule.required().warning('Alt text is important for accessibility'),
            }),
          ],
        }),
        defineField({
          name: 'quote',
          title: 'Pull Quote',
          type: 'string',
          initialValue: 'Best Fest in the West',
        }),
      ],
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'object',
      fields: [
        defineField({
          name: 'contactEmail',
          title: 'Contact Email',
          type: 'string',
          initialValue: 'CONNECT@OJAIDOCUMENTARYFILMFESTIVAL.COM',
          validation: (rule) => rule.email().optional(),
        }),
      ],
    }),
  ],
  preview: {
    select: { title: 'hero.title' },
  },
});
