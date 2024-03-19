import Image from "next/image";
import Star from "@components/Shared/Star";
import Exclaim from "@components/Shared/Exclaim";
import Button from "@components/Shared/Button";
function Hero() {
  return (
    <section class="text-gray-600 bg-[#A7C643] body-font overflow-hidden">
      <div class="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center relative">
        <div class="lg:flex-grow md:w-1/4 lg:pr-50 md:pr-40 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-15xl text-8xl mb-4 font-medium text-gray-900 font-sans-pro z-20 relative">
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

        <Image
          className="rounded border-white border-3"
          height={800}
          width={800}
          alt="Council Image"
          src="/assets/Team/student_council_members.jpg"
        ></Image>
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
