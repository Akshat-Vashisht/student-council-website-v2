import Marquee from "react-fast-marquee";
const Scroll = () => {
  return (
    <div className="scroll bg-white flex flex-row  gap-5 justify-between items-center p-[10px] text-xl md:text-3xl sm:text-4xl overflow-hidden">
      <Marquee speed={60} pauseOnClick>
        <div className=" text-slate-900 flex gap-2 items-center mx-20 overflow-y-hidden ">
          <span>INSPIRE GROWTH |</span>
          <span>IGNITE CHANGE</span>
        </div>
        <div className=" text-slate-900 flex gap-2 items-center mx-20 overflow-y-hidden ">
          <span>INSPIRE GROWTH |</span>
          <span>IGNITE CHANGE</span>
        </div>
        <div className=" text-slate-900 flex gap-2 items-center mx-20 overflow-y-hidden ">
          <span>INSPIRE GROWTH |</span>
          <span>IGNITE CHANGE</span>
        </div>
      </Marquee>
    </div>
  );
};

export default Scroll;
