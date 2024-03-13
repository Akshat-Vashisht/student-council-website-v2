// import Test from "@components/Team/Test";
// import { fetchEvents } from "@lib/actions/fetchEvents.action"

import Card from "@components/Team/Card"

const presidentData = {
  name:"Sankalp",
  role:"president"
}

const coreTeamData = Array(8).fill({
  name:"Sankalp",
  role:"member"
})
const teamData = Array(10).fill({
  name:"Sankalp",
  role:"member"
})
const page = async () => {
  // const data = await fetchEvents();
  return (
    <div className="p-14 space-y-[5rem] bg-[#FFEDBF]">
      <h1 className="text-5xl font-bold uppercase text-center text-[#083133]">Say <span className="text-[#FF61C0]"> hello </span> to <br/> council Member</h1>
    {/* <Test data={data}/> */}
    <div className="flex flex-col justify-center items-center gap-y-10">
      <h1 className="text-black text-xl font-semibold text-center">Faculty Coordinator</h1>
      <Card data={presidentData}/>
    </div>

    <div className="flex flex-col justify-center items-center gap-y-10">
      <h1 className="text-black text-xl font-semibold text-center">Core Team</h1>
      
      <div className="flex flex-wrap gap-10 justify-evenly">
        {
          coreTeamData.map((data)=>{
            return <Card data={data}/>
          })
        }
        </div>
        
    </div>

    <div className="flex flex-col justify-center items-center gap-y-10">
      <h1 className="text-black text-xl font-semibold text-center">Team</h1>
      
      <div className="flex flex-wrap gap-10 justify-evenly">
        {
          teamData.map((data)=>{
            return <Card data={data}/>
          })
        }
        </div>
        
    </div>
    </div>
  )
}

export default page