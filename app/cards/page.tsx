import Geminid from "@/components/geminid";
import HeroSection from "@/components/hero-section";
import React from "react";
import CardsButton from "../buttons/(cards)/cards-button";
import Box from "@/components/box";
import Star from "@/components/star";

const Cards = () => {
  return (
    <>
    <Star/>
      <Geminid />
      <Box />
      <HeroSection
        title="Cards"
        description="Discover our curated card components, designed for developers who value style and functionality. Ideal for portfolios, dashboards, and more, they offer flexibility and elegance."
      />
      <CardsButton />
    </>
  );
};

export default Cards;
