import React from "react";
import Slider from "../Components/Slider";
import CustomerReview from "../Components/CustomerReview";
import WhyChooseUs from "../Components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Slider></Slider>
      <CustomerReview></CustomerReview>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
}
