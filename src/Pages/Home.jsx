import React from "react";
import Slider from "../Components/Slider";
import CustomerReview from "../Components/CustomerReview";
import WhyChooseUs from "../Components/WhyChooseUs";
import TopFoods from "../Components/TopFoods";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home | Taste Treasury</title>
      </Helmet>
      <header>
        <Slider></Slider>
        
      </header>
      <main>
        <section>
          <TopFoods></TopFoods>
        </section>
        <section>
          <CustomerReview></CustomerReview>
        </section>
      </main>
      <footer>
        <WhyChooseUs></WhyChooseUs>
      </footer>
    </div>
  );
}
