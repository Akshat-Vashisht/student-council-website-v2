"use client";
import { CiSquarePlus, CiTrash, CiEdit } from "react-icons/ci";
import { MdLogout } from "react-icons/md";
import { SignOutButton } from "@clerk/nextjs";

export default function Header() {
  const options = [
    {
      name: "New Field",
      icon: <CiSquarePlus size={19} />,
    },
    {
      name: "Delete Field",
      icon: <CiTrash size={19} />,
    },
    {
      name: "Edit Field",
      icon: <CiEdit size={19} />,
    },
  ];
  return (
    <div className="p-3 flex">
      <SignOutButton className="bg-[#25231d]  rounded-sm  px-3">
        Sign out
      </SignOutButton>
      <div className="flex gap-6 justify-end flex-grow">
        {options.map((option, index) => (
          <span
            key={index}
            className="flex items-center gap-1 text-sm hover:bg-[#25231d] p-1 px-3 rounded-md cursor-pointer"
          >
            {option.icon}
            {option.name}
          </span>
        ))}
      </div>
    </div>
  );
}
