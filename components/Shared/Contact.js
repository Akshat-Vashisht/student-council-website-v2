import { MdMail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";

function Contact() {
  return (
    <div className="p-10 bg-[#FFECC1]">
      <div className="bg-[#FCDE42] flex smM:flex-col h-fit overflow-hidden rounded-xl">
        <div className="bg-[#79E0E6] flex-grow w-full p-10 rounded-xl flex flex-col justify-between smM:gap-y-10">
          <h1 className="uppercase text-5xl font-bold text-black">Contact Us</h1>
          <p className="text-[#393939] text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, laudantium.</p>
          <ul className="space-y-4 text-lg text-[#393939]">
            <li className="flex gap-2 items-center"><IoCall/> <span>9156826480</span></li>
            <li className="flex gap-2 items-center"><MdMail/> <span>example@xyz.com</span></li>
            <li className="flex gap-2 items-center"><MdLocationPin/>Lorem, ipsum.</li>
          </ul>
        </div>
        <div className="w-full flex flex-col gap-6 p-10 ">
            <div className="flex flex-col text-black">
              <label className="text-lg">Name</label>
              <input placeholder="Enter your name" className="bg-transparent p-2 placeholder:text-[#393939] focus:outline-none border-b border-[#393939]" type="text" name="name" />
            </div>
            <div className="flex flex-col text-black">
              <label className="text-lg">Email</label>
              <input placeholder="Enter your email" className="bg-transparent p-2 placeholder:text-[#393939] focus:outline-none border-b border-[#393939]" type="text" name="name" />
            </div>
            <div className="flex flex-col text-black">
              <label className="text-lg">Message</label>
              <textarea rows={4} placeholder="Enter a message" className="bg-transparent p-2 placeholder:text-[#393939] focus:outline-none border rounded-md border-[#393939]" type="text" name="name" />
            </div>
            <button className="rounded-full p-1 px-5 bg-[#FFB4C2] text-[#393939] w-fit">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
