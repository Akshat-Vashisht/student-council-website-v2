"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [show, setShow] = useState(false)
  return (
    <div className="bg-[#A7C643] p-4 px-14 mdM:relative">
      <RxHamburgerMenu onClick={()=>setShow(prev=>!prev)} className="text-2xl text-[#FFEDBF] cursor-pointer absolute top-10 right-5 hidden mdM:block"/>
      <div className="bg-[#FFEDBF] flex justify-between p-3 px-10 rounded-full text-black font-semibold uppercase mdM:relative">
        <Image
          src="/assets/Common/SClogo.png"
          className="object-contain"
          width={40}
          height={40}
          alt="Student Council Logo"
        ></Image>
        <ul className={`flex justify-evenly w-full items-center mdM:flex-col mdM:absolute bg-[#FFEDBF] mdM:left-0 mdM:gap-y-10 mdM:z-50 mdM:top-[5rem] mdM:rounded-xl mdM:shadow-md mdM:py-[2rem] transition-all duration-200 ease mdM:overflow-hidden ${show? "mdM:h-[20rem]": "mdM:h-0 mdM:py-0 "}`}>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/clubs">
            <li>Clubs</li>
          </Link>
          <Link href="/team">
            <li>Our team</li>
          </Link>
          <Link href="/">
            <li>Mental wellbegin</li>
          </Link>
        </ul>
        <Image
          src="/assets/Common/MITlogo.png"
          width={100}
          height={60}
          alt="Student Council Logo"
        ></Image>
      </div>
    </div>
  );
}

export default Navbar;
