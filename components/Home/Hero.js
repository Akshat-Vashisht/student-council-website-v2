import Image from "next/image";
function Hero() {
  return (
    <section class="text-gray-600 bg-[#A7C643] body-font">
      <div class="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/4 lg:pr-50 md:pr-40 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-15xl text-8xl mb-4 font-medium text-gray-900 font-sans-pro">
            {" "}
            LET'S <div>BE THE</div>
            CHANGE
          </h1>
          <p class="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        {/* <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"> */}
          {/* Replace with the path to your image */}
          <Image
            className="rounded border-white border-3"
            height={800}
            width={800}
            alt="Council Image"
            src="/assets/Home/student_council_members.jpg"
          ></Image>
        {/* </div> */}
      </div>
    </section>
  );
}

export default Hero;
