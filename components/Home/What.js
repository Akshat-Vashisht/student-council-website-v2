import React from "react";

function What() {
  return (
    <div className="bg-white">
      <div className="flex flex-col md:flex-row ">
        <div className="flex flex-col w-full md:w-1/2">
          <div className="flex flex-col justify-center px-6 py-8 md:px-11 md:py-16 text-lg text-black bg-pink-400">
            <div className="mt-4 text-4xl md:text-5xl font-bold ">
              OUR MISSION
            </div>
            <div className="mt-8">
              <p className="max-w-full">
                1. Providing opportunities for intellectual growth and creative
                exploration.
              </p>
              <p className="max-w-full">
                2. Supporting student endeavors to achieve academic excellence
                and personal development.
              </p>
              <p className="max-w-full">
                3. Cultivating a sense of belonging and inclusivity through
                diverse and engaging initiatives.
              </p>
              <p className="max-w-full">
                4. Facilitating collaboration and synergy among students,
                faculty, and staff to enhance the overall university experience.
              </p>
              <p className="max-w-full">
                5. To create a supportive environment that empowers students to
                excel academically, socially and personally.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/2  md:mt-0">
          <div className="flex flex-col justify-center px-6 py-8 md:px-11 md:py-16 text-lg text-black bg-yellow-300">
            <div className="mt-4 text-4xl md:text-5xl font-bold">
              OUR OBJECTIVE
            </div>
            <div className="mt-8">
              <p className="max-w-full">
                The IMPACT Student Council aims to represent and unite the
                MIT-ADT University community by advocating for student needs,
                fostering inclusivity, and organizing events for personal and
                leadership development. We facilitate dialogue between students,
                faculty, and administration to address concerns and enact
                positive change. Empowering individuals to engage in
                decision-making, we strive to enhance the university experience
                for all.
              </p>
              <p className="max-w-full">
                We have a vision to create a vibrant and cohesive student
                community at MIT-ADT University, where every individual is
                empowered to excel academically, professionally, and personally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default What;
