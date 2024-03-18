"use client";
import React, { useState } from "react";
import { GoArrowDownRight } from "react-icons/go"; // Import the GoArrowDownRight icon

const Previous = ({
  date,
  month,
  imageName,
  eventTitle,
  timingAndVenue,
  description,
  altText,
  onEventClick,
}) => (
  <div className="px-0 py-6 mt-28 bg-orange-400 rounded-[36px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 max-w-full md:px-0 md:mt-10 lg:flex lg:justify-center">
    <div className="flex flex-col lg:flex-row lg:gap-10 lg:items-center">
      <div className="flex flex-col w-full lg:w-6/12">
        <div className="grow max-md:mt-10">
          <div className="flex flex-col lg:flex-row lg:gap-5">
            <div className="flex flex-col w-[18%] lg:w-auto lg:ml-0 lg:mt-9 text-6xl font-extrabold text-center text-black whitespace-nowrap max-md:mt-10 max-md:text-4xl">
              <div className="max-md:text-4xl">{date}</div>
              <div className="mt-7 max-md:text-4xl">{month}</div>
            </div>
            <div className="flex flex-col ml-5 w-full lg:w-auto lg:ml-0">
              <div className="flex grow justify-center items-center px-16 py-20 bg-white rounded-3xl border-0 border-gray-700 border-solid max-md:px-5 max-md:mt-10">
                <img
                  loading="lazy"
                  src={imageName}
                  alt={altText}
                  className="mt-32 w-80 h-20 aspect-square max-md:mt-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-full lg:w-6/12">
        <div className="flex flex-col mt-5 text-2xl text-black max-md:mt-10">
          <div className="text-6xl font-extrabold max-md:max-w-full max-md:text-4xl">
            {eventTitle}
          </div>
          <div className="mt-8 text-left max-md:max-w-full">
            {timingAndVenue}
          </div>
          <div className="mt-2 text-left max-md:max-w-full">
            {timingAndVenue}
          </div>
          <div className="mt-14 max-md:mt-10 max-md:max-w-full">
            {description}
            <button
              onClick={onEventClick}
              className="rounded-full mt-6 bg-[#FFB4C2] p-4 flex ml-auto"
            >
              <GoArrowDownRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const EventSection = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      date: "19",
      month: "Mar",
      imageName: "event1.jpg",
      eventTitle: "Event 1",
      timingAndVenue: "10 AM at The Venue",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      date: "19",
      month: "July",
      imageName: "event2.jpg",
      eventTitle: "Event 2",
      timingAndVenue: "8 PM at The Park",
      description: "Vestibulum accumsan est vel justo molestie.",
    },
  ];

  const handleEventClick = (index) => {
    setSelectedEvent(index);
    console.log(`Event ${index + 1} clicked`);
  };

  return (
    <main className="flex flex-col px-10 py-20 bg-amber-100 max-md:px-5">
      <header className="self-center text-6xl font-black text-center text-black uppercase leading-[81.28px] tracking-[4.16px] max-md:max-w-full max-md:text-4xl">
        Previous Events
      </header>
      {events.map((event, idx) => (
        <Previous
          key={idx}
          date={event.date}
          month={event.month}
          imageName={event.imageName}
          eventTitle={event.eventTitle}
          timingAndVenue={event.timingAndVenue}
          description={event.description}
          altText={event.altText}
          onEventClick={() => handleEventClick(idx)}
        />
      ))}
    </main>
  );
};

export default EventSection;
