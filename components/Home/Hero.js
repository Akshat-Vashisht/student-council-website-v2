import Image from "next/image";
import Star from "@components/Shared/Star";
import Exclaim from "@components/Shared/Exclaim";
import Button from "@components/Shared/Button";
function Hero() {
  return (
    <section className="h-[90vh] mdM:h-fit bg-[#A7C643] flex mdM:flex-col gap-4 justify-between mdM:justify-center mdM:gap-8 items-center p-10 overflow-hidden">
      <div className="container mx-auto flex px-5 md:flex-row flex-col items-center relative">
        <div className="lg:flex-grow md:w-1/4  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="uppercase  text-7xl mdM:text-[10vw] smM:text-[2vw] w-[20rem] mdM:w-full mdM:text-center font-bold relative">
            {" "}
            <Star
              color={"#FCDE42"}
              size={180}
              position={"-top-[6rem] -right-[0rem] "}
            />
            <span className="z-10 relative">
              LET&apos;S <div>BE THE</div>
              CHANGE
            </span>
          </h1>
          <p class="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <Button />
          <div className="absolute ">
            <Exclaim size={180} position={"-bottom-[25rem] -right-[30rem] "} />
          </div>
        </div>
        {/* <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"> */}
        <div className=" flex items-center border-[6px] mdM:w-full border-white rounded-[1.1rem]">
          <Image
            alt="hero-img"
            className="rounded-xl block mdM:w-full mdM:h-auto"
            src="/assets/Team/student_council_members.jpg"
            width={600}
            height={600}
          />
        </div>
        {/* <Image
          className="rounded border-white border-3"
          height={800}
          width={800}
          alt="Council Image"

        ></Image> */}
        {/* </div> */}
        <Star
          color={"#79E0E6"}
          size={220}
          position={"-bottom-[2rem] -right-[10rem]"}
        />
      </div>
    </section>
  );
}

export default Hero;
