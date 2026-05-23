import Awards from "@/components/HomeComponents/Awards";
import FeatureSection from "@/components/HomeComponents/FeatureSection";
import Hero from "@/components/HomeComponents/Hero";
import IdeaValidator from "@/components/HomeComponents/IdeaValidator";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Hero />
      <FeatureSection />
      <IdeaValidator />
      <Awards />
    </div>
  );
};

export default page;
