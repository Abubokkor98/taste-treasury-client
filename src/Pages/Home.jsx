import React from "react";
import Slider from "../Components/Slider";
import CustomerReview from "../Components/CustomerReview";
import WhyChooseUs from "../Components/WhyChooseUs";
import TopFoods from "../Components/TopFoods";

export default function Home() {
  return (
    <div>
      <Slider></Slider>
      <TopFoods></TopFoods>

      <CustomerReview></CustomerReview>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
}
