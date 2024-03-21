import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import Image from "next/image";

function Footer() {
  return (
    <div>
      <div className="flex flex-col justify-center p-8 font-bold bg-[#FFECC1] mdM:p-5 ">
        <div className="flex flex-col justify-center bg-[#A7C643] rounded-2xl ">
          <div className="flex justify-center items-center px-16 py-20 mdM:p-14 mdM:py-2 bg-[#A7C643] rounded-2xl  ">
            <div className="flex flex-col items-center mt-5 mb-3 w-full max-w-[1161px] ">
              <div className="text-5xl smM:text-[8vw] text-center text-black capitalize  ">
              Seasoned. Nimble. Remote.
              </div>
              <div className="mt-5 text-xl mdM:text-base font-semibold tracking-wide leading-6 text-center text-black ">
                We’re a diverse and passionate team that takes ownership of your
                design and empower you to execute the roadmap. We stay light on
                our feet and truly enjoy delivering great work.
              </div>
      
              {/* <div className="shrink-0 mdM:mt-10 mt-20 max-w-full h-px bg-white w-[1060px]" /> */}
              <div className="flex mdM:flex-col justify-between w-full items-center mt-12 ">
                <div className="text-white whitespace-nowrap">
                  <Image
                    className="mx-auto"
                    src="/assets/Common/SClogo.png"
                    width={200}
                    height={200}
                    alt="sc logo"
                  />       
                </div>
                <div className="my-4 text-center text-teal-950">
                  Designed by IDEATE | Developed by GDSC
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
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
