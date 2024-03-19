import Image from "next/image";
import Star from "@components/Shared/Star";
import Exclaim from "@components/Shared/Exclaim";
import Button from "@components/Shared/Button";
function Hero() {
  return (
 
      
      <div className="h-[90vh] mdM:h-fit relative bg-[#A7C643] flex mdM:flex-col gap-4 justify-between mdM:justify-center mdM:gap-8 items-center p-14 overflow-hidden">
        <div className="space-y-4 mdM:flex mdM:flex-col mdM:justify-center mdM:items-center">
          <h1 className="uppercase relative text-7xl w-[20rem] mdM:w-full mdM:text-center mdM:text-[10vw] font-bold ">
            <Star
              size={200}
              color={"#FCDE42"}
              position={"-top-[7rem] right-10 mdM:left-0 "}
            />
            <span className="relative">
            LET&apos;S <span className="block mdM:inline">BE THE </span>
                CHANGE
            </span>
          </h1>
          <h3 className="w-3/4 text-xl text-[#083133] font-black">
            Lorem ipsum dolor sit. Lorem, ipsum dolor.
          </h3>
          <button className="text-[#A7C643] bg-black py-1 w-[15rem] rounded-full uppercase">
            Book Now!
          </button>
        </div>
        <div className=" flex items-center border-[6px] mdM:w-full border-white rounded-[1.1rem]">
          <Image
            alt="hero-img"
            className="rounded-xl block mdM:w-full mdM:h-auto"
            src="/assets/Team/student_council_members.jpg"
            width={700}
            height={700}
          />
        </div>
        <Star
            color={"#79E0E6"}
            size={220}
            position={"-bottom-[2rem] -right-[6rem] smM:hidden"}
          />
      </div>
  );
}

export default Hero;
