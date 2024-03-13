import React from "react";

function Impact() {
  return (
    <div>
      {" "}
      <div className="px-12 py-14 bg-amber-100 max-md:px-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-20 py-16 w-full font-bold text-justify whitespace-nowrap bg-sky-300 rounded-xl text-teal-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-9xl max-md:text-4xl">IM</div>
              <div className="text-2xl">Innovative Minds</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-20 py-16 w-full font-bold text-justify whitespace-nowrap bg-lime-400 rounded-xl text-teal-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-9xl max-md:text-4xl">PA</div>
              <div className="text-2xl">Promoting Achievement</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-20 py-16 w-full font-bold text-justify whitespace-nowrap bg-orange-400 rounded-xl text-teal-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-9xl max-md:text-4xl">IM</div>
              <div className="text-2xl">Cultivating Togetherness</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Impact;
