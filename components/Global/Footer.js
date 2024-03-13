import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";

function Footer() {
  return (
    <div>
      <div className="flex flex-col justify-center px-8 py-8 font-bold bg-amber-100 max-md:px-5">
        <div className="flex flex-col justify-center bg-lime-400 rounded-[59.945px] max-md:max-w-full">
          <div className="flex justify-center items-center px-16 py-20 bg-lime-400 rounded-[59.945px] max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col items-center mt-5 mb-3 w-full max-w-[1161px] max-md:max-w-full">
              <div className="text-5xl text-center text-black capitalize leading-[53.34px] max-md:max-w-full">
                Inspire Growth. Ignite Change
              </div>
              <div className="mt-5 text-xl font-semibold tracking-wide leading-6 text-center text-black max-md:max-w-full">
                We’re a diverse and passionate team that takes ownership of your
                design and empower you to execute the roadmap. We stay light on
                our feet and truly enjoy delivering great work.
              </div>
              <div className="flex gap-5 justify-between mt-9 text-sm whitespace-nowrap">
                <button className="grow justify-center px-4 py-1.5 text-black rounded-2xl bg-slate-50 leading-[157%]">
                  <span className=""> 👀 </span>
                  <span className="text-black"> Insight</span>s
                </button>
                <button className="grow justify-center self-start px-5 py-1.5 leading-6 text-black rounded-2xl bg-slate-50">
                  <span className="">👋</span>{" "}
                  <span className="text-black"> Contact</span>
                </button>
              </div>
              <div className="shrink-0 mt-20 max-w-full h-px bg-white w-[1060px] max-md:mt-10" />
              <div className="flex gap-5 justify-between items-center self-stretch mt-12 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col mt-2 text-white whitespace-nowrap">
                  <div className="justify-center items-start self-end px-0.5 py-1 max-w-full text-xl ">
                    <span className="text-white bg-[#004AAD]">Office of</span>
                    <span className="bg-[#C80F17]">Students Affairs</span>
                  </div>
                  <div className="text-base">
                    MIT-ADT University, Pune, India{" "}
                  </div>
                </div>
                <div className="flex items-center self-stretch my-auto text-xl md:text-2xl sm:text-2xl  leading-3 text-center text-teal-950 flex-wrap">
                  Designed by IDEATE | Developed by GDSC
                </div>

                <div className="flex gap-3 items-center">
                  <TiSocialFacebook
                    size={30}
                    className="rounded-full border border-white p-2"
                  />
                  <FaLinkedinIn
                    size={30}
                    className="rounded-full border border-white p-2"
                  />
                  <IoLogoTwitter
                    size={30}
                    className="rounded-full border border-white p-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
