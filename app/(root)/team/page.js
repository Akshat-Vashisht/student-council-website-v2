// import Test from "@components/Team/Test";
// import { fetchEvents } from "@lib/actions/fetchEvents.action"

import Card from "@components/Shared/Card";
import Star from "@components/Shared/Star";
import TeamJson from "../../../public/assets/Team/Team.json";
// const presidentData = {
//   name: "Sankalp",
//   position: "president",
//   role: "president",
//   img: "/assets/person1.jpeg",
// };

// const coreTeamData = Array(4).fill({
//   name: "Sankalp",
//   position: "member",
//   role: "coreTeam",
//   img: "/assets/person1.jpeg",
// });
// const teamData = Array(10).fill({
//   name: "Sankalp",
//   position: "member",
//   role: "team",
//   img: "/assets/person1.jpeg",
// });
const page = async () => {
  // const data = await fetchEvents();
  return (
    <div className="p-14 space-y-[8rem] bg-[#FFEDBF] overflow-x-hidden">
      <div className="relative w-fit mx-auto my-4">
        <Star
          size={170}
          color={"#F6A342"}
          position={"-top-[4rem] -left-[4rem]"}
        />
        <h1 className="text-6xl font-bold uppercase text-center text-[#083133] relative">
          Say <span className="text-[#FF61C0]"> hello </span> to <br /> council
          Member
        </h1>
      </div>

      {/* <Test data={data}/> */}
      <div className="flex flex-col justify-center items-center gap-y-[5rem] relative">
        <Star
          size={240}
          color={"#79E0E6"}
          position={"-bottom-[4rem] -right-[10rem]"}
        />
        <h1 className="text-black text-4xl font-black text-center">
          FACULTY COORDINATOR
        </h1>
        <Card useAs={"team"} data={TeamJson[0]} />
      </div>

      <div className="flex flex-col justify-center items-center gap-y-[5rem] ">
        <h1 className="text-black text-4xl font-black text-center relative uppercase">
          <p className="z-10 relative"> Core Team</p>
          <Star size={70} color={"#FF61C0"} position={"-top-4 -right-3 z-0"} />
        </h1>

        <div className="flex flex-wrap gap-10 justify-evenly ">
          {TeamJson.filter((member) => member.role === "coreTeam").map(
            (data, index) => {
              return <Card key={index} useAs={"team"} data={data} />;
            }
          )}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-y-[5rem]">
        <h1 className="text-black text-4xl font-black text-center relative uppercase">
          <p className="z-10 relative"> Team</p>
          <Star size={70} color={"#79E0E6"} position={"-top-4 -left-3 z-0"} />
        </h1>

        <div className="flex flex-wrap gap-10 justify-evenly">
          {TeamJson.filter((member) => member.role === "team").map(
            (data, index) => {
              return <Card key={index} useAs={"team"} data={data} />;
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
