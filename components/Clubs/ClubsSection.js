"use client";
import Card from "@components/Shared/Card";
import Clubs from "../../public/assets/Clubs/Clubs.json";
import { useState } from "react";


const ClubsSection = ({ tags }) => {
    const [activeTab, setActiveTab] = useState("")
  return (
    <div className="">
      <div className="flex flex-wrap gap-3 py-14 mx-[3rem]">
        {tags.map((tag) => (
          <span
            key={tag}
            onClick={()=>setActiveTab(tag)}
            className={` cursor-pointer border transition-all duration-150 ${activeTab===tag ? " text-white bg-[#FF61C0]":" text-[#FF61C0]"} border-[#FF61C0] font-medium p-1 px-2 rounded-full`}
          >
            {tag}
          </span>
        ))}
      </div>
            
      <div className="flex flex-wrap gap-10 justify-center items-center p-10">
        {Clubs.map((club)=>(
            <Card key={club.uuid} data={club} useAs="clubs"/>
        ))}
      </div>
    </div>
  );
};

export default ClubsSection;
