import Button from "@components/Shared/Button";
import React from "react";

function What() {
  return (
    <div className="bg-white">
      <div className="flex flex-col md:flex-row ">
        <div className="flex flex-col w-full md:w-1/2">
          <div className="flex flex-col justify-center px-6 py-8 md:px-11 md:py-16 text-lg text-black bg-pink-400">
            <div className="font-semibold">LOREM IPSUM</div>
            <div className="mt-8 text-4xl md:text-5xl font-semibold">
              What is IMPACT?
            </div>
            <div className="mt-8 text-3xl whitespace-nowrap">Lorem Ipsum</div>
            <div className="text-3xl whitespace-nowrap">Is a cute line</div>
            <div className="mt-8">
              <p className="max-w-full">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <Button />
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/2  md:mt-0">
          <div className="flex flex-col justify-center px-6 py-8 md:px-11 md:py-16 text-lg text-black bg-yellow-300">
            <div className="font-semibold">LOREM IPSUM</div>
            <div className="mt-8 text-4xl md:text-5xl font-semibold">
              Lorem Ipsum
            </div>
            <div className="mt-8 text-3xl whitespace-nowrap">Lorem Ipsum</div>
            <div className="text-3xl whitespace-nowrap">Is a cute line</div>
            <div className="mt-8">
              <p className="max-w-full">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default What;
