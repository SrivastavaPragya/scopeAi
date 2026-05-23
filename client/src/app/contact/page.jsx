import ContactForm from "@/components/ContactComponent/ContactForm";
import GetInTouch from "@/components/ContactComponent/GetInTouch";
import Support from "@/components/ContactComponent/Support";
import React from "react";

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
