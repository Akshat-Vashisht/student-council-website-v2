"use client";
import { memo, useEffect, useState } from "react";
import axios from "axios";

// Component for the Rectangle Icon
const RectangleIcon = () => (
  <img
    loading="lazy"
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/72e467b269ee78d4b2885ed6b7646e0cf54b101b8c374ba67238c06140a9691b?apiKey=6e0b39cac1cf445b93dc7744259e3ead&"
    className="object-cover absolute inset-0 size-full"
    alt="Rectangle Icon"
  />
);

function Upcoming() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await axios.get(`${process.env.DEPLOYMENT_URL}/api/events/status`);
        setEvents(response.data.upcoming); // Assuming your endpoint directly gives an array of events
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    }

    fetchEvents();
  }, []);

  return (
    <div className="bg-[#FFECC1] min-h-screen flex flex-col justify-center items-center py-2  relative px-10">
      <h1 className="text-6xl smM:text-4xl smM:font-bold font-bold uppercase text-[#083133] mb-2">
        Upcoming Events
      </h1>

      {events.map((event) => (
        <div
          key={event._id}
          className={`flex smM:flex-col smM:w-80 w-full gap-5 items-end pb-16 mt-24 text-black bg-blue-200 rounded-[36px] max-md:flex-wrap md:pr-5 max-md:mt-10`}
        >
          <div className="flex overflow-hidden relative flex-col px-12 pt-4 pb-20 mb-auto text-5xl font-extrabold text-center whitespace-nowrap aspect-[1.03] fill-yellow-300  max-md:text-4xl">
            <RectangleIcon />
            <div className="relative self-center md:text-4xl">
              {new Date(event.start).getDate()}
            </div>
            <div className="relative mt-4 md:text-4xl">
              {new Date(event.start).toLocaleString("default", {
                month: "short",
              })}
            </div>
          </div>

          <div className="flex flex-col grow p-2 shrink-0 mt-7 basis-0 w-fit max-md:max-w-full">
            <div className="text-5xl font-bold leading-[62.23px] max-md:max-w-full max-md:text-4xl">
              {event.name}
            </div>
            <div className="mt-5 text-xl font-semibold max-md:max-w-full">
              {event.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default memo(Upcoming);
