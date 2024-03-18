"use client";
import { CiSearch } from "react-icons/ci";

export default function Table() {
  let data = [
    {
      title: "Event 1",
      shortDescription: "Short description for Event 1 ",
      longDescription: "Long description for Event 1",
      image: "image1.jpg",
      venue: "Venue A",
      date: "2024-03-20",
      startTime: "10:00 AM",
      endTime: "12:00 PM",
    },
    {
      title: "Event 2",
      shortDescription: "Short description for Event 2",
      longDescription: "Long description for Event 2",
      image: "image2.jpg",
      venue: "Venue B",
      date: "2024-03-21",
      startTime: "2:00 PM",
      endTime: "4:00 PM",
    },
    {
      title: "Event 3",
      shortDescription: "Short description for Event 3",
      longDescription: "Long description for Event 3",
      image: "image3.jpg",
      venue: "Venue C",
      date: "2024-03-22",
      startTime: "6:00 PM",
      endTime: "8:00 PM",
    },
    {
      title: "Event 4",
      shortDescription: "Short description for Event 4",
      longDescription: "Long description for Event 4",
      image: "image4.jpg",
      venue: "Venue D",
      date: "2024-03-23",
      startTime: "10:00 AM",
      endTime: "12:00 PM",
    },
    {
      title: "Event 5",
      shortDescription: "Short description for Event 5",
      longDescription: "Long description for Event 5",
      image: "image5.jpg",
      venue: "Venue E",
      date: "2024-03-24",
      startTime: "2:00 PM",
      endTime: "4:00 PM",
    },
  ];

  return (
    <div>
      <div className="w-full border-b border-[#2b2821] text-[#6c6e6e] p-2">
        <CiSearch className="absolute text-xl" />
        <input
          type="text"
          name="search"
          placeholder="Search a Item"
          className="bg-[#1D1B16] pl-8 text-[#858686] focus:outline-none  placeholder:text-[#6c6e6e]"
        />
      </div>
      <table className=" w-full overflow-x-scroll">
        <thead>
          <tr className="border-b border-[#2b2821] text-[#6c6e6e]">
            <td className="p-2">Title</td>
            <td className="p-2">Short Description</td>
            <td className="p-2">Long Description</td>
            <td className="p-2">Image</td>
            <td className="p-2">Venue</td>
            <td className="p-2">Date</td>
            <td className="p-2">Start Time</td>
            <td className="p-2">End Time</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr
                key={index}
                className="border-b border-[#2b2821] text-[#818585]"
              >
                <td className="p-2">{item.title}</td>
                <td className="p-2">{item.shortDescription}</td>
                <td className="p-2">{item.longDescription}</td>
                <td className="p-2">{item.image}</td>
                <td className="p-2">{item.venue}</td>
                <td className="p-2">{item.date}</td>
                <td className="p-2">{item.startTime}</td>
                <td className="p-2">{item.endTime}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
