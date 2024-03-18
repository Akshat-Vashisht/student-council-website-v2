"use client";
import React, { useState } from "react";
import "../../app/globals.css";

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
1. Providing opportunities for intellectual growth and creative exploration.
2. Supporting student endeavors to achieve academic excellence and personal development.
3. Cultivating a sense of belonging and inclusivity through diverse and engaging initiatives.
4. Facilitating collaboration and synergy among students, faculty, and staff to enhance the overall university experience.
5. To create a supportive environment that empowers students to excel academically, socially and personally.`,
    },
    {
      header: "Objective",
      content: `The MIT-IMPACT Student council aims to represent and unite the MIT-ADT University community by advocating for student needs, fostering inclusivity, and organizing events for personal and leadership development. 
        We facilitate dialogue between students, faculty, and administration to address concerns and enact positive change. Empowering individuals to engage in decision-making, we strive to enhance the university experience for all.`,
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
      <div
        className={`bg-[#79E0E6] sm:h-[800px] md:h-[450px] lg:h-[550px] mx-auto rounded shadow-md text-black`}
        style={{ overflow: "hidden" }}
      >
        <div
          className="flex"
          style={{
            width: `${slides.length * 100}%`,
            transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full h-full"
            >
              <div className={`relative h-64 mt-2 md:h-96 py-4 lg:h-120`}>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black w-full md:max-w-2xl mx-auto">
                  <div className="text-center mt-2 py-4">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                      {slide.header}
                    </h2>
                    <div className="message">
                      {slide.content.split("\n").map((line, index) => (
                        <p key={index}>{line.trim()}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 rounded-[50px] bg-transparent text-gray-800 border border-gray-800"
        onClick={prevSlide}
      >
        &larr;
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 rounded-[50px] bg-transparent text-gray-800 border border-gray-800"
        onClick={nextSlide}
      >
        &rarr;
      </button>
    </div>
  );
};

export default Carousel;
