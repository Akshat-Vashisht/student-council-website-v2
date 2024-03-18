import ClubsSection from "@components/Clubs/ClubsSection"
import Star from "@components/Shared/Star"

const page = () => {
    const tags = ["All","Techincal", "Non-Technical", "Sports", "Cultural", "Health", "Enviroment"]
  return (
    <div className="bg-[#fef3c7] overflow-x-hidden">
        <div className="bg-[#A7C643] h-[50vh] flex flex-col items-center justify-center gap-y-7">
                <h1 className="uppercase text-7xl font-black text-black relative">
                   <span className="relative z-10"> Clubs</span>
                <Star color={"#FCDE42"} size={120} position={"-top-7 -right-10"}/>
                </h1>
                <p className="text-[#083133] font-bold text-xl">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="relative">
        <Star color={"#79E0E6"} size={180} position={"-top-[9rem] -left-[5rem] z-20"}/>
        <Star color={"#FF61C0"} size={100} position={"-top-[3rem] left-[1.5rem] z-10"}/>
        <Star color={"#F6A342"} size={180} position={"-top-[5rem] -right-[5rem] z-20"}/>
        
        <ClubsSection tags={tags}/>

        </div>

    </div>
  )
}

export default page