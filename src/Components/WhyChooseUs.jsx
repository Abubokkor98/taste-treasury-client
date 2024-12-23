import React from 'react';
import { FaThumbsUp, FaClock, FaSeedling, FaHeadset } from 'react-icons/fa';

export default function WhyChooseUs() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">
          Why Choose Us
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          At Taste Treasury, we prioritize quality, trust, and convenience to ensure a delightful experience for every food lover.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Quality Ingredients */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <FaSeedling className="text-green-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Fresh Ingredients
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We ensure the freshest and finest ingredients in every dish.
            </p>
          </div>

          {/* Convenience */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <FaClock className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Fast Service
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Quick and seamless service for a hassle-free experience.
            </p>
          </div>

          {/* Customer Trust */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <FaThumbsUp className="text-yellow-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Trusted by Many
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Loved and trusted by thousands of happy customers.
            </p>
          </div>

          {/* 24/7 Support */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <FaHeadset className="text-red-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              24/7 Support
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Always here to assist you with our dedicated support team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
