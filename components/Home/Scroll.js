import Marquee from "react-fast-marquee";
const Scroll = () => {
  return (
    <div className="scroll bg-white flex flex-row gap-5 justify-between items-center p-[10px] text-4xl md:text-3xl sm:text-4xl overflow-hidden">
      <Marquee speed={60} pauseOnClick>
        <div className=" text-slate-900 flex items-center gap-20 mr-20">
          <span>INSPIRE GROWTH</span>
          <span>IGNITE CHANGE</span>
        </div>
        <div className=" text-slate-900 flex items-center gap-20 mr-2">
          <span>INSPIRE GROWTH</span>
          <span>IGNITE CHANGE</span>
        </div>
      </Marquee>
    </div>
  );
};

export default Scroll;
