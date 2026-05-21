import { defineField, defineType } from "sanity";

export const pageCopy = defineType({
  name: "pageCopy",
  title: "Page Copy",
  type: "document",
  fields: [
    defineField({
      name: "page",
      title: "Page",
      type: "string",
      options: {
        list: [
          { title: "Homepage", value: "home" },
          { title: "LED Film Screen", value: "led-film" },
          { title: "LED Crystal Film Screen", value: "led-crystal-film" },
          { title: "Switchable Smart Glass", value: "switchable-glass" },
          { title: "Overview", value: "overview" },
        ],
        layout: "radio",
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "heroHeadline",
      title: "Hero Headline",
      type: "string",
    }),
    defineField({
      name: "heroSubheadline",
      title: "Hero Subheadline",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "sections",
      title: "Content Sections",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "heading", title: "Heading", type: "string" }),
            defineField({ name: "body", title: "Body Text", type: "text", rows: 4 }),
          ],
          preview: { select: { title: "heading" } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "page" },
    prepare: (selection: Record<string, string>) => ({ title: `Page: ${selection.title}` }),
  },
});
