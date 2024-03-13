import Image from "next/image";
function Navbar() {
  return <div className="bg-[#A7C643] p-4 px-14">
    <div className="bg-[#FFEDBF] flex justify-between p-3 px-10 rounded-full text-black font-semibold uppercase">
        
        <Image src="/assets/Common/SClogo.png" className="object-contain" width={40} height={40} alt="Student Council Logo"></Image>
      <ul className="flex justify-evenly w-full items-center">
        <li>Home</li>
        <li>Clubs</li>
        <li>Our team</li>
        <li>Mental wellbegin</li>
      </ul>
        <Image src="/assets/Common/MITlogo.png" width={100} height={60} alt="Student Council Logo"></Image>
    </div>
  </div>;
}

export default Navbar;
