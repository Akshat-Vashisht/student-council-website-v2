"use client";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight, FaChevronRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const Card = ({ data, useAs }) => {
  const [showOnHover, setShowOnHover] = useState(false);

  const router = useRouter();

  console.log(data);
  return (
    <div>
      {useAs === "team" ? (
        <div
          onMouseEnter={() => setShowOnHover(true)}
          onMouseLeave={() => setShowOnHover(false)}
          style={{
            background: `url(${data.img})no-repeat center`,
            backgroundSize: "cover",
          }}
          className="bg-green-500 w-[15rem] h-[20rem] flex flex-col items-center justify-center rounded-xl overflow-hidden relative text-sm"
        >
          {data.role === "faculty" ? (
            <div className="absolute bottom-0 w-full bg-[#79E0E6] flex items-center justify-center h-[3rem]">
              <p className="text-[#083133] font-semibold p-3 text-center">
                <span className="uppercase text-xs font-bold">
                  {" "}
                  {data.name}{" "}
                </span>{" "}
                <br /> {data.position}
              </p>
              <span
                className={`bg-[#79E0E6] absolute w-full h-full flex justify-center items-center transition-transform duration-200 ${
                  showOnHover ? "translate-y-0" : "translate-y-12"
                }`}
              >
                <button className=" border border-[#083133] text-[#083133] font-semibold p-1 px-4 rounded-md">
                  <a href={data.social} target="_blank">
                    LinkedIn
                  </a>
                </button>
              </span>
            </div>
          ) : data.role === "coreTeam" ? (
            <div className="absolute bottom-0 w-full bg-[#A7C643] flex items-center justify-center h-[3rem]">
              <p className="text-[#083133] font-semibold p-3 text-center">
                <span className="uppercase text-xs font-bold">
                  {" "}
                  {data.name}{" "}
                </span>{" "}
                <br /> {data.position}
              </p>
              <span
                className={`bg-[#A7C643] absolute w-full h-full flex justify-center items-center transition-transform duration-200 ${
                  showOnHover ? "translate-y-0" : "translate-y-12"
                }`}
              >
                <button className=" border border-[#083133] text-[#083133] font-semibold p-1 px-4 rounded-md">
                  <a href={data.social} target="_blank">
                    LinkedIn
                  </a>
                </button>
              </span>
            </div>
          ) : data.role === "team" ? (
            <div className="absolute bottom-0 w-full bg-[#F6A342]  flex items-center justify-center h-[3rem]">
              <p className="text-[#083133] font-semibold p-3 text-center whitespace-nowrap">
                <span className="uppercase"> {data.name} </span> <br />{" "}
                {data.position}
              </p>
              <span
                className={`bg-[#F6A342] absolute w-full h-full flex justify-center items-center transition-transform duration-200 ${
                  showOnHover ? "translate-y-0" : "translate-y-12"
                }`}
              >
                <button className=" border border-[#083133] text-[#083133] font-semibold p-1 px-4 rounded-md">
                  <a href={data.social} target="_blank">
                    LinkedIn
                  </a>
                </button>
              </span>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      ) : (
        <div
          style={{
            background: `url(${data.club_detail.thumbnail_photo})no-repeat center`,
            backgroundSize: "cover",
          }}
          className="bg-green-500 w-[15rem] h-[20rem] flex flex-col items-center justify-center rounded-xl overflow-hidden relative text-sm"
        >
          <div
            onClick={() => router.push(`/clubs/${data.uuid}`)}
            className="cursor-pointer absolute bottom-0 w-full bg-[#A7C643] flex items-center justify-center h-[3rem]"
          >
            <p className="text-[#083133] font-semibold p-3 text-center">
              <span className="uppercase text-sm font-bold">
                {" "}
                {data.club_name}{" "}
              </span>
            </p>
            <span className="text-[#083133]">
              <FaArrowRight />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
