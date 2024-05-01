"use client";
import * as React from "react";
import { memo } from "react";
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
    {/* Event Details */}
    <div className="flex flex-col md:flex-row justify-between p-6 py-10 items-center mb-6">
      {/* Date and Month */}
      <div className="flex flex-col justify-center items-center mb-6 md:mb-0 pr-6">
        <div className="text-6xl font-extrabold text-black whitespace-nowrap max-md:text-4xl mb-1">
          {date}
        </div>
        <div className="text-xl text-black">{month}</div>
      </div>
      {/* Event Image */}
      <div className="flex justify-center items-center mb-6 bg-white w-auto h-auto smM:w-auto smM:h-auto mdM:w-auto mdM:h-auto">
        <img
          loading="lazy"
          src={imageName}
          alt={altText}
          className="w-96 h-full object-cover"
        />
      </div>
      {/* Event Title, Timing and Description */}
      <div className="flex flex-col flex-grow text-2xl text-black md:ml-6 text-left">
        <div className="text-6xl smM:text-4xl font-extrabold mb-2 max-md:text-4xl">
          {eventTitle}
        </div>
        <div className="mb-2">{timingAndVenue}</div>
        <div className="mb-2">{description}</div>
      </div>
    </div>
    {/* Button */}
    <button className="flex flex-col rounded-full bg-[#FFB4C2] p-3 ml-auto max-md:self-center max-md:mt-6">
      <GoArrowDownRight />
    </button>
  </div>
);

const PreviousEvents = () => {
  const [events, setEvents] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  console.log(process.env.DEPLOYMENT_URL)

  React.useEffect(() => {
    fetch("/api/events/status")
      .then((response) => response.json())
      .then((data) => {
        const formattedEvents = data.past.map((event) => ({
          date: new Date(event.start).getDate(),
          month: new Date(event.start).toLocaleString("default", {
            month: "short",
          }),
          imageName: event.img_url,
          eventTitle: event.name,
          timingAndVenue: `${new Date(event.start).toLocaleTimeString()} at ${
            event.venue
          }`,
          description: event.long_desc,
          altText: event.img_desc,
        }));
        setEvents(formattedEvents);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col px-10 py-20 bg-[#FFECC1] max-md:px-5">
      <div className="self-center mt-12 text-6xl smM:text-4xl font-black text-center text-black uppercase leading-[81.28px] tracking-[4.16px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Previous Events
      </div>
      {events.map((event, idx) => (
        <EventCard key={idx} {...event} />
      ))}
    </div>
  );
};

export default memo(PreviousEvents);
