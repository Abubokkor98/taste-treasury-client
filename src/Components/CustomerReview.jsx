import React from 'react'

export default function CustomerReview() {
    const testimonials = [
        {
          name: "John Doe",
          photo: "https://via.placeholder.com/80",
          feedback: "The food here is absolutely delicious! I love the variety and quality.",
          rating: 5,
        },
        {
          name: "Jane Smith",
          photo: "https://via.placeholder.com/80",
          feedback: "Quick delivery and amazing taste. Highly recommended!",
          rating: 4.5,
        },
        {
          name: "Mike Johnson",
          photo: "https://via.placeholder.com/80",
          feedback: "Exceptional service and mouth-watering dishes. Will order again!",
          rating: 5,
        },
      ];
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-8">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-20 h-20 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {testimonial.name}
              </h3>
              <p className="text-yellow-500">
                {"★".repeat(Math.floor(testimonial.rating))}
                {"☆".repeat(5 - Math.floor(testimonial.rating))}
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                "{testimonial.feedback}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
