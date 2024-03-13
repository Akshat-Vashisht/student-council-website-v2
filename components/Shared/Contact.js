import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";

function Contact() {
  return (
    <div className="p-10 bg-[#FFECC1]">
      <div className="pr-20 bg-yellow-300 rounded-[30px] max-md:pr-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start px-12 py-20 w-full text-2xl font-semibold bg-sky-300 rounded-[30px] text-neutral-700 max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="self-stretch text-6xl font-black text-black uppercase leading-[81.28px] tracking-[4.16px] max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
                Contact Us
              </div>
              <div className="self-stretch mt-14 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
                eleifend metus. Cras sed purus{" "}
              </div>
              <div className="flex gap-5 justify-between mt-20 text-lg leading-5 whitespace-nowrap max-md:mt-10">
                <IoCall style={{ fontSize: "26px", height: "32px" }} />
                <div className="flex flex-col">
                  <div>9156826480</div>
                  <div className="mt-4">9156826480</div>
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-16 max-md:mt-10">
                <MdEmail style={{ fontSize: "30px", height: "32px" }} />
                <div className="flex-auto my-auto">Lorem ipsum</div>
              </div>
              <div className="flex gap-3.5 mt-16 max-md:mt-10">
                <MdLocationPin style={{ fontSize: "30px", height: "32px" }} />
                <div className="flex-auto my-auto">Lorem ipsum</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-between mt-20 text-3xl font-bold text-black max-md:mt-10 max-md:max-w-full">
              <div className="text-center max-md:max-w-full">Full Name</div>
              <div className="mt-4 text-2xl font-semibold text-neutral-700 max-md:max-w-full">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="border-b-2 border-white focus:border-black w-full py-1 text-black bg-transparent"
                />
              </div>
              <div className="mt-24 text-center max-md:mt-10 max-md:max-w-full">
                Email
              </div>
              <div className="mt-4 text-2xl font-semibold text-neutral-700 max-md:max-w-full">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border-b-2 border-white focus:border-black w-full py-1 text-black bg-transparent"
                />
              </div>
              <div className="mt-24 text-center max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                Message
              </div>
              <div className="mt-4 text-lg leading-6 text-neutral-700 max-md:mr-2.5 max-md:max-w-full">
                <textarea
                  placeholder="Your Message"
                  className="border-b-2 border-white focus:border-black w-full py-1 text-black bg-transparent"
                />
              </div>
              <button className="justify-center items-center px-16 py-4 mt-24 w-48 max-w-full text-xl font-semibold tracking-wide leading-6 text-center whitespace-nowrap bg-pink-300 rounded-3xl text-teal-950 max-md:px-5 max-md:mt-10 mb-[10px]">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
