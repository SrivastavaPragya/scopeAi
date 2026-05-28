import ContactForm from "@/components/ContactComponent/ContactForm";
import GetInTouch from "@/components/ContactComponent/GetInTouch";
import Support from "@/components/ContactComponent/Support";
import React from "react";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Contact ScopeAI",
  description:
    "Contact the ScopeAI team for support, questions, partnerships, or help using the AI-powered startup analysis platform.",
  path: "/contact",
  keywords: ["contact ScopeAI", "startup analyzer support", "AI platform support"],
});

const page = () => {
  return (
    <div>
      <GetInTouch />
      <ContactForm />
      <Support />
    </div>
  );
};

export default page;
