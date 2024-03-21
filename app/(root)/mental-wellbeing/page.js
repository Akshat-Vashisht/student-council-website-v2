import Contact from "@components/Shared/Contact";
import Star from "@components/Shared/Star";
import Image from "next/image";

export default function page(){
    return(
        <div className="overflow-hidden">
            <div className="h-[90vh] mdM:h-fit bg-[#A7C643] flex mdM:flex-col gap-4 justify-between mdM:justify-center mdM:gap-8 items-center p-14">
                <div className="space-y-4">
                <h1 className="uppercase relative text-7xl w-[20rem] mdM:w-full mdM:text-center mdM:text-[10vw] font-bold ">
                    <Star size={200} color={"#F6A342"} position={"-top-[7rem] right-10 mdM:left-0 "}/>
                  <span className="relative">  Save <span className="text-[#FF61C0]">YourSelf</span> from burnout</span>
                </h1>
                <h3 className="w-3/4 text-xl text-[#083133] font-black">Lorem ipsum dolor sit. Lorem, ipsum dolor.</h3>
                <button className="text-[#A7C643] bg-black py-1 w-[15rem] rounded-full uppercase">Book Now!</button>
                </div>
                <div className=" flex items-center border-[6px] mdM:w-full border-white rounded-[1.1rem]">
                    <Image
                    alt="hero-img"
                    className="rounded-xl block mdM:w-full mdM:h-auto"
                    src="/assets/SVS/hero-section-img.png"
                    width={700}
                    height={700}
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 relative mdM:grid-rows-2 mdM:grid-cols-1">
                <div className="bg-[#FF61C0] text-black flex flex-col gap-5 p-12 relative">
                    <Image
                    alt="flower-img"
                    className="w-[14rem] h-[14rem] absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    src="/assets/SVS/flower.png"
                    width={400}
                    height={400}
                    />

                    <p className="uppercase font-semibold">Lorem Ipsum</p>
                    <h1 className="text-4xl font-bold">What is SVS?</h1>
                    <h3 className="text-xl relative">Lorem ipsum dolor sit.</h3>
                    <p className="relative z-10">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, accusantium? Ipsam quibusdam, deserunt quis modi ex vel esse cum repellat, voluptatem nihil illum, possimus voluptates ut culpa mollitia fugiat tempore?
                        Omnis repudiandae id adipisci. Doloremque minus tenetur voluptatibus aspernatur eos molestiae odio praesentium doloribus corrupti. Perferendis, maxime. Fugiat molestiae magni in harum ipsum tempore exercitationem neque quas? In, quia eveniet?
                    </p>
                    <p className="relative">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit molestiae corporis provident quidem fuga dicta vel eligendi rerum cumque facere!</p>
                    <button className="text-white bg-black py-1 w-[15rem] rounded-full">Learn More</button>

                </div>
                <div className="bg-[#FCDE42] text-black flex flex-col gap-5 p-12 relative">
                <Image
                alt="flower-img"
                    className="w-[14rem] h-[14rem] absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    src="/assets/SVS/flower.png"
                    width={400}
                    height={400}
                    />

                    <p className="uppercase font-semibold">Lorem Ipsum</p>
                    <h1 className="text-4xl font-bold">What is SVS?</h1>
                    <h3 className="text-xl relative">Lorem ipsum dolor sit.</h3>
                    <p className="relative z-10">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, accusantium? Ipsam quibusdam, deserunt quis modi ex vel esse cum repellat, voluptatem nihil illum, possimus voluptates ut culpa mollitia fugiat tempore?
                        Omnis repudiandae id adipisci. Doloremque minus tenetur voluptatibus aspernatur eos molestiae odio praesentium doloribus corrupti. Perferendis, maxime. Fugiat molestiae magni in harum ipsum tempore exercitationem neque quas? In, quia eveniet?
                    </p>
                    <p className="relative">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit molestiae corporis provident quidem fuga dicta vel eligendi rerum cumque facere!</p>
                    <button className="text-white bg-black py-1 w-[15rem] rounded-full">Learn More</button>
                </div>
                <Star size={200} color={"#F6A342"} position={"-bottom-[7rem] -right-[6rem] z-10"}/>
            </div>

                <Contact/>
        </div>
    )
}