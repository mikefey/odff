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
          title: 'Header Star Icon',
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
          name: 'logo',
          title: 'Festival Logo',
          type: 'image',
          description:
            'The full lockup graphic (dates, monogram, location, title, presented-by line). Replace this image whenever the dates or presenting partners change.',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
              initialValue: 'Ojai Documentary Film Festival',
              validation: (rule) =>
                rule.required().warning('Alt text is important for accessibility'),
            }),
          ],
        }),
        defineField({
          name: 'images',
          title: 'Hero Photo Carousel',
          type: 'array',
          description: 'Photos shown in the rotating hero carousel, in display order.',
          of: [
            {
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
            },
          ],
        }),
        defineField({
          name: 'body',
          title: 'Body',
          type: 'array',
          of: [{ type: 'block' }],
        }),
      ],
    }),
    defineField({
      name: 'schedule',
      title: 'Schedule',
      type: 'array',
      of: [{ type: 'scheduleDay' }],
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'object',
      fields: [
        defineField({
          name: 'badgeLabel',
          title: 'Badge Label',
          type: 'string',
          initialValue: 'Best Fest of the West',
          description: 'Shown inside the footer emblem.',
        }),
        defineField({
          name: 'badgeIllustration',
          title: 'Badge Illustration',
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
          name: 'contactLabel',
          title: 'Contact Label',
          type: 'string',
          initialValue: 'Inquiries',
          description: 'The text shown to visitors in the footer.',
        }),
        defineField({
          name: 'contactEmail',
          title: 'Contact Email',
          type: 'string',
          initialValue: 'CONNECT@OJAIDOCUMENTARYFILMFESTIVAL.COM',
          description: 'The email address used in the mailto link.',
          validation: (rule) => rule.email().optional(),
        }),
      ],
    }),
  ],
  preview: {
    select: { media: 'hero.logo' },
    prepare({ media }) {
      return { title: 'Site Settings', media };
    },
  },
});
