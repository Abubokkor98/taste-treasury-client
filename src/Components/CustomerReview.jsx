import React from "react";
import { Fade } from "react-awesome-reveal";
import Marquee from "react-fast-marquee";

export default function CustomerReview() {
  const testimonials = [
    {
      id: 1,
      name: "Emily Watson",
      title: "Food Blogger",
      feedback:
        "Tasty Treasury has completely transformed how I discover and organize recipes. It's an absolute game-changer!",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Mark Johnson",
      title: "Chef",
      feedback:
        "The perfect tool for anyone passionate about food! The design and usability are unmatched.",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      name: "Sophia Lee",
      title: "Home Cook",
      feedback:
        "I love how easy it is to save and revisit my favorite recipes. A must-have for every kitchen enthusiast!",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 4,
      name: "Emily Watson",
      title: "Food Blogger",
      feedback:
        "Tasty Treasury has completely transformed how I discover and organize recipes. It's an absolute game-changer!",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 5,
      name: "Mark Johnson",
      title: "Chef",
      feedback:
        "The perfect tool for anyone passionate about food! The design and usability are unmatched.",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 6,
      name: "Sophia Lee",
      title: "Home Cook",
      feedback:
        "I love how easy it is to save and revisit my favorite recipes. A must-have for every kitchen enthusiast!",
      image: "https://via.placeholder.com/100",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8 bg-gradient-to-r from-teal-100 via-blue-100 to-purple-100 dark:from-gray-800 dark:via-gray-900 dark:to-black rounded-xl shadow-xl">
      <Fade cascade>
        <h2 className="text-4xl font-extrabold text-center mb-6 text-teal-600 dark:text-teal-300">
          What Our Foodies Say
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-12">
          Stories from happy cooks and culinary enthusiasts.
        </p>
      </Fade>

      <Marquee
        speed={80}
        pauseOnHover={false}
        gradient={false}
        direction="left"
      >
        <div className="flex space-x-8 overflow-hidden">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-700 rounded-2xl w-64 mx-2"
            >
              <img
                src={testimonial.image}
                alt={`${testimonial.name}`}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-teal-500 dark:border-teal-300"
              />
              <h3 className="text-xl font-semibold text-center text-teal-600 dark:text-teal-300">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                {testimonial.title}
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-center mt-4">
                {testimonial.feedback}
              </p>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
