'use client'
import { IoPeopleSharp, IoTrophy } from "react-icons/io5";


export default function Sidebar(){
    return(
        <div className="bg-[#1D1B16] h-screen w-[15rem] p-4 border-r-2 border-[#2b2821]">
            <h1 className="text-lg font-medium">Collections</h1>
            <ul className="flex flex-col gap-3 mt-3">
                <li className="hover:bg-[#25231d] cursor-pointer text-gray-300 hover:text-white rounded-md p-2 flex items-center gap-2"><IoTrophy size={18}/> Events</li>
                <li className="hover:bg-[#25231d] cursor-pointer text-gray-300 hover:text-white rounded-md p-2 flex items-center gap-2"><IoPeopleSharp size={18}/> Clubs</li>
            </ul>
        </div>
    )
}