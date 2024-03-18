import Image from "next/image";
import Star from "@components/Shared/Star";
import Exclaim from "@components/Shared/Exclaim";
import Button from "@components/Shared/Button";
function Hero() {
  return (
    <section class="text-gray-600 bg-[#A7C643] body-font overflow-y-hidden">
      <div class="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/4 lg:pr-50 md:pr-40 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="absolute ">
            <Star
              color={"#FCDE42"}
              size={180}
              position={"-top-[5rem] -right-[20rem] "}
            />
          </div>
          <h1 class="title-font sm:text-15xl text-8xl mb-4 font-medium text-gray-900 font-sans-pro z-20">
            {" "}
            LET&apos;S <div>BE THE</div>
            CHANGE
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
        {/* Replace with the path to your image */}
        <Image
          className="rounded border-white border-3"
          height={800}
          width={800}
          alt="Council Image"
          src="/assets/Team/student_council_members.jpg"
        ></Image>
        {/* </div> */}
        <div className="absolute ">
          <Star
            color={"#79E0E6"}
            size={180}
            position={"-bottom-[22rem] -right-[90rem]"}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
