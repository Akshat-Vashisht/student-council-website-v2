import Button from "@components/Shared/Button";
import React from "react";

function What() {
  return (
    <div className="justify-center bg-white">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center px-11 py-16 w-full text-lg text-black bg-pink-400 max-md:px-5 max-md:max-w-full">
            <div className="font-semibold max-md:max-w-full">LOREM IPSUM</div>
            <div className="mt-8 text-5xl font-semibold max-md:max-w-full max-md:text-4xl">
              What is IMPACT?
            </div>
            <div className="self-start mt-8 text-4xl whitespace-nowrap">
              Lorem Ipsum
            </div>
            <div className="self-start text-4xl whitespace-nowrap">
              Is a cute line
            </div>
            <div className="mt-8 max-md:max-w-full">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. <br />
              <br />
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{" "}
            </div>
            <Button />
          </div>
        </div>
        <div className="flex flex-col ml-[-20px] w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center px-11 py-16 w-full text-lg text-black bg-yellow-300 max-md:px-5 max-md:max-w-full">
            <div className="font-semibold max-md:max-w-full">LOREM IPSUM</div>
            <div className="mt-8 text-5xl font-semibold max-md:max-w-full max-md:text-4xl">
              Lorem Ipsum
            </div>
            <div className="self-start mt-8 text-4xl whitespace-nowrap">
              Lorem Ipsum
            </div>
            <div className="self-start text-4xl whitespace-nowrap">
              Is a cute line
            </div>
            <div className="mt-8 max-md:max-w-full">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. <br />
              <br />
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{" "}
            </div>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default What;
