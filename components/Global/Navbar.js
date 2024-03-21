"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [show, setShow] = useState(false)
  return (
    <div className="bg-[#A7C643] p-4 px-14 mdM:relative mdM:flex mdM:items-center mdM:justify-between mdM:px-5 mdM:gap-x-2">
      <div className="bg-[#FFEDBF] flex justify-between p-3 px-10 rounded-full text-black font-semibold uppercase mdM:relative mdM:w-full">
        <Image
          src="/assets/Common/SClogo.png"
          className="object-contain"
          width={150}
          height={150}
          alt="Student Council Logo"
        ></Image>
        <ul className={`flex justify-evenly w-full items-center mdM:flex-col mdM:absolute bg-[#FFEDBF] mdM:left-0 mdM:gap-y-10 mdM:z-50 mdM:top-[5rem] mdM:rounded-xl mdM:shadow-md transition-all duration-200 ease mdM:overflow-hidden ${show? "mdM:h-[20rem] mdM:py-[2rem]": "mdM:h-[0rem] mdM:p-0 "}`}>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/events">
            <li>Events</li>
          </Link>
          <Link href="/team">
            <li>Our team</li>
          </Link>
          <Link href="/mental-wellbeing">
            <li>Mental wellbeing</li>
          </Link>
        </ul>
        <Image
        className="mdM:hidden"
          src="/assets/Common/MITlogo.png"
          width={100}
          height={60}
          alt="Student Council Logo"
        ></Image>

      </div>
      <RxHamburgerMenu onClick={()=>setShow(prev=>!prev)} className="text-2xl text-[#FFEDBF] cursor-pointer hidden mdM:block"/>
    </div>
  );
}

export default Navbar;
