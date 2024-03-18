import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import Image from "next/image";

function Footer() {
  return (
    <div>
      <div className="flex flex-col justify-center px-8 py-8 font-bold bg-[#FFECC1] max-md:px-5">
        <div className="flex flex-col justify-center bg-[#A7C643] rounded-[59.945px] max-md:max-w-full">
          <div className="flex justify-center items-center px-16 py-20 bg-[#A7C643] rounded-[59.945px] max-md:px-5 max-md:max-w-full">
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
              <div className="flex flex-col items-center mt-12 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                <div className="text-white whitespace-nowrap">
                  <Image
                  className="mx-auto"
                  src="/assets/Common/SClogo.png"
                  width={200}
                  height={200}
                  alt="sc logo"
                  />
                  <div className="text-base">
                    MIT-ADT University, Pune, India{" "}
                  </div>
                </div>
                <div className="flex gap-3 items-center mt-4">
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
                <div className="my-4 text-center text-teal-950">
                  Designed by IDEATE | Developed by GDSC
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
