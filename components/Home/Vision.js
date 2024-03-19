import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: "750px",
  color: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  background: "#4299e1",
  padding: "20px",
};

const scrollableContentStyle = {
  ...contentStyle,
  maxHeight: "650px",
  overflowY: "auto",
  scrollBehavior: "smooth",
};

const App = () => (
  <div className="carousel-container overflow-y-auto max-h-96 lg:max-h-full smM:h-[550px] ">
    <Carousel autoplay className="p-20 bg-[#FFECC1]">
      <div>
        <div
          style={scrollableContentStyle}
          className="flex flex-col text-xl smM:text-sm gap-16 smM:gap-6 smM:h-max"
        >
          <div className="text-6xl mdM:text-4xl smM:text-2xl font-bold">
            <h3>VISION</h3>
          </div>
          <p>
            To create a vibrant and cohesive student community at MIT-ADT
            University, where every individual is empowered to excel
            academically, professionally, and personally
          </p>
        </div>
      </div>
      <div>
        <div
          style={scrollableContentStyle}
          className="flex flex-col text-xl smM:text-sm gap-16 smM:gap-6 smM:h-max"
        >
          <div className="text-6xl mdM:text-4xl smM:text-2xl font-bold">
            <h3>MISSION</h3>
          </div>
          <p>
            The MIT-IMPACT Student Council is committed to fostering an
            environment of inspiration, achievement, and togetherness by:
            <br /> 1. Providing opportunities for intellectual growth and
            creative exploration.
            <br /> 2. Supporting student endeavors to achieve academic
            excellence and personal development.
            <br /> 3. Cultivating a sense of belonging and inclusivity through
            diverse and engaging initiatives.
            <br /> 4. Facilitating collaboration and synergy among students,
            faculty, and staff to enhance the overall university experience.
            <br /> 5. To create a supportive environment that empowers students
            to excel academically, socially and personally.
          </p>
        </div>
      </div>
      <div>
        <div
          style={scrollableContentStyle}
          className="flex flex-col text-xl smM:text-sm gap-16 smM:gap-6 smM:h-max"
        >
          <div className="text-6xl mdM:text-4xl smM:text-2xl font-bold">
            <h3>OBJECTIVE</h3>
          </div>
          <p>
            The MIT-IMPACT Student council aims to represent and unite the
            MIT-ADT University community by advocating for student needs,
            fostering inclusivity, and organizing events for personal and
            leadership development. We facilitate dialogue between students,
            faculty, and administration to address concerns and enact positive
            change. Empowering individuals to engage in decision-making, we
            strive to enhance the university experience for all
          </p>
        </div>
      </div>
    </Carousel>
  </div>
);

export default App;
