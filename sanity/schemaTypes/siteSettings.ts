import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "phone",
      title: "Phone / WhatsApp",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Physical Address",
      type: "string",
    }),
    defineField({
      name: "showroomNote",
      title: "Showroom Note",
      type: "string",
      description: 'e.g. "By appointment only"',
    }),
    defineField({
      name: "whatsappNumber",
      title: "WhatsApp Number (digits only, with country code)",
      type: "string",
      description: 'e.g. "254727808264"',
    }),
  ],
  preview: {
    select: { title: "email" },
    prepare: () => ({ title: "Site Settings" }),
  },
});
