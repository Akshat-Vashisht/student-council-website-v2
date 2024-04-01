import React from "react";

function Impact() {
  return (
    <div className="px-4 md:px-12 py-14 bg-[#FFECC1]">
      <div className="flex flex-col md:flex-row md:gap-5">
        <div className="mb-5 md:mb-0 w-full md:w-1/3">
          <div className="flex flex-col items-center px-8 md:px-20 py-8 md:py-16 w-full font-bold text-justify bg-[#79E0E6] rounded-xl text-teal-950">
            <div className="text-4xl md:text-9xl">IM</div>
            <div className="text-lg md:text-2xl">Innovative Minds</div>
          </div>
        </div>
        <div className="mb-5 md:mb-0 w-full md:w-1/3">
          <div className="flex flex-col items-center px-8 md:px-20 py-8 md:py-16 w-full font-bold text-justify bg-[#A7C643] rounded-xl text-teal-950">
            <div className="text-4xl md:text-9xl">PA</div>
            <div className="text-lg md:text-2xl">Promoting Achievement</div>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <div className="flex flex-col items-center px-8 md:px-20 py-8 md:py-16 w-full font-bold text-justify bg-[#F6A342] rounded-xl text-teal-950">
            <div className="text-4xl md:text-9xl">CT</div>
            <div className="text-lg md:text-2xl">Cultivating Togetherness</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Impact;
