import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name: "filmbase-studio",
  title: "Filmbase Technology",
  projectId: "7lnfyaru",
  dataset: "production",
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Site Settings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
            S.divider(),
            S.listItem()
              .title("Gallery Items")
              .child(S.documentTypeList("galleryItem").title("Gallery Items")),
            S.listItem()
              .title("FAQ Items")
              .child(S.documentTypeList("faqItem").title("FAQ Items")),
            S.listItem()
              .title("Page Copy")
              .child(S.documentTypeList("pageCopy").title("Page Copy")),
          ]),
    }),
  ],
  schema: { types: schemaTypes },
});
