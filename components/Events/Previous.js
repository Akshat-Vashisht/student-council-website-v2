import * as React from "react";
import { GoArrowDownRight } from "react-icons/go";

const EventCard = ({
  date,
  month,
  imageName,
  eventTitle,
  timingAndVenue,
  description,
  altText,
}) => (
  <div className="flex flex-col px-8 py-6 mt-14 bg-orange-400 rounded-[36px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
    {/* Date, Image, and Event Details Section */}
    <div className="flex flex-col md:flex-row justify-between p-6 py-10 items-center mb-6">
      {/* Date Section */}
      <div className="flex flex-col justify-center items-center mb-6 md:mb-0">
        <div className="text-6xl font-extrabold text-black whitespace-nowrap max-md:text-4xl mb-1">
          {date}
        </div>
        <div className="text-xl text-black">{month}</div>
      </div>
      {/* Image Section */}
      <div className="flex justify-center items-center mb-6 bg-white w-[120px] h-[120px] md:w-auto md:h-auto">
        <img
          loading="lazy"
          src={imageName}
          alt={altText}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Event Details Section */}
      <div className="flex flex-col flex-grow text-2xl text-black md:ml-6 text-left">
        <div className="text-6xl font-extrabold mb-2 max-md:text-4xl">
          {eventTitle}
        </div>
        <div className="mb-2">{timingAndVenue}</div>
        <div className="mb-2">{description}</div>
      </div>
    </div>
    {/* Button Section */}
    <button className="flex flex-col rounded-full bg-[#FFB4C2] p-3 ml-auto max-md:self-center max-md:mt-6">
      <GoArrowDownRight />
    </button>
  </div>
);

const PreviousEvents = () => {
  const events = [
    {
      date: "19",
      month: "Mar",
      imageName: "img",
      eventTitle: "Event 1",
      timingAndVenue: "10 AM at The Venue",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan est vel justo molestie, at sodales metus lacinia.",
      altText: "Event 1 Image",
    },
    {
      date: "19",
      month: "July",
      imageName: "img",
      eventTitle: "Event 2",
      timingAndVenue: "8 PM at The Park",
      description:
        "Vestibulum accumsan est vel justo molestie, at sodales metus lacinia.",
      altText: "Event 2 Image",
    },
  ];

  return (
    <div className="flex flex-col px-10 py-20 bg-amber-100 max-md:px-5">
      <div className="self-center mt-24 text-6xl font-black text-center text-black uppercase leading-[81.28px] tracking-[4.16px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Previous Events
      </div>
      {events.map((event, idx) => (
        <EventCard key={idx} {...event} />
      ))}
    </div>
  );
};

export default PreviousEvents;
