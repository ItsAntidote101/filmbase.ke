import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import OverviewClient from "@/components/OverviewClient";

export const metadata: Metadata = {
  title: "About Us | Filmbase Technology Kenya",
  description:
    "Learn about Filmbase Technology — Kenya's first dedicated specialist in transparent LED display and switchable smart glass. End-to-end supply, installation and support.",
  openGraph: {
    title: "About Filmbase Technology Kenya",
    description:
      "A specialist company with a focused mission. Kenya's first in transparent LED and smart glass.",
    url: "https://filmbasetechnology.co.ke/overview",
    siteName: "Filmbase Technology",
    type: "website",
    images: ["https://placehold.co/1200x630/054e72/ffffff?text=Filmbase+Overview"],
  },
};

export default function OverviewPage() {
  return (
    <PageTransition>
      <OverviewClient />
    </PageTransition>
  );
}
