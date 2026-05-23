import Documentations from "@/components/DocsComponent/Documentations";
import Endpoints from "@/components/DocsComponent/Endpoints";
import QuickStart from "@/components/DocsComponent/QuickStart";
import React from "react";

const page = () => {
  return (
    <div>
      <Documentations />
      <QuickStart />
      <Endpoints />
    </div>
  );
};

export default page;
