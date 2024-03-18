"use client";
import React, { useState } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      header: "Vision",
      content: `To create a vibrant and cohesive student community at MIT-ADT University, where every individual is empowered to excel academically, professionally, and personally`,
    },
    {
      header: "Mission",
      content: `The MIT-IMPACT Student Council is committed to fostering an environment of inspiration, achievement, and togetherness by:
      1.⁠ ⁠Providing opportunities for intellectual growth and creative exploration.
      2.⁠ ⁠Supporting student endeavors to achieve academic excellence and personal development.
      3.⁠ ⁠Cultivating a sense of belonging and inclusivity through diverse and engaging initiatives.
      4.⁠ ⁠Facilitating collaboration and synergy among students, faculty, and staff to enhance the overall university experience.
      5.⁠ ⁠To create a supportive environment that empowers students to excel academically, socially and personally.`,
    },
    {
      header: "Objective",
      content:
        "The MIT-IMPACT Student council aims to represent and unite the MIT-ADT University community by advocating for student needs, fostering inclusivity, and organizing events for personal and leadership development. We facilitate dialogue between students, faculty, and administration to address concerns and enact positive change. Empowering individuals to engage in decision-making, we strive to enhance the university experience for all.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full p-10 bg-[#FFECC1]">
      <div className="bg-[#79E0E6] sm:h-[550px] md:h-[550px] lg:h-[550px]  mx-auto p-6 rounded shadow-md text-black overflow-auto">
        <div className="flex relative lg:flex-row flex-col justify-center">
          {" "}
          {/* Change flex direction on large screens */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`w-full ${
                index === currentSlide ? "block" : "hidden"
              } transition-opacity duration-500`}
            >
              <div
                className={`relative h-[350px] mb-20 md:h-[160px] py-4 lg:h-120`}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black w-full md:max-w-2xl mx-auto">
                  {" "}
                  {/* Ensures content stays within container */}
                  <div className="text-center mt-48 py-4">
                    <h2 className="text-4xl sm:text-l md:text-3xl lg:text-6xl font-bold mb-4">
                      {slide.header}
                    </h2>
                    <div className="message text-base sm:text-l md:text-xl p-[-100px]">
                      {" "}
                      {/* Adjust padding for larger screens if needed */}
                      {slide.content.split("\n").map((line, index) => (
                        <p key={index}>{line.trim()}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button
            className="absolute top-[80%] sm:top-1/2 md:top-1/2 left-0  transform -translate-y-1/2  py-2 rounded-[50px] bg-transparent text-gray-800 border border-gray-800"
            onClick={prevSlide}
          >
            &larr;
          </button>
          <button
            className="absolute top-[80%] sm:top-1/2 md:top-1/2 right-0  transform -translate-y-1/2  py-2 rounded-[50px] bg-transparent text-gray-800 border border-gray-800"
            onClick={nextSlide}
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
