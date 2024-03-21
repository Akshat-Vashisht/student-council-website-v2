import { memo } from "react";

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
  // Mock events data
  const events = [
    {
      id: 1,
      date: "29",
      month: "Feb",
      title: "Event 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac eleifend metus. Cras sed purus eu ligula tincidunt placerat. In luctus augue nec varius maximus. Pellentesque egestas augue est, eget.",
      color: "bg-sky-300",
    },
    {
      id: 2,
      date: "29",
      month: "Nov",
      title: "Event 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac eleifend metus. Cras sed purus eu ligula tincidunt placerat. In luctus augue nec varius maximus. Pellentesque egestas augue est, eget.",
      color: "bg-lime-400",
    },
    {
      id: 3,
      date: "7",
      month: "Dec",
      title: "Event 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac eleifend metus. Cras sed purus eu ligula tincidunt placerat. In luctus augue nec varius maximus. Pellentesque egestas augue est, eget.",
      color: "bg-pink-400",
    },
  ];

  return (
    <div className="bg-[#FFECC1] min-h-screen flex flex-col justify-center items-center py-10  relative px-20">
      <h1 className="text-4xl smM:text-2xl smM:font-bold font-bold uppercase text-[#083133] mb-8">
        Upcoming Events
      </h1>

      {events.map((event, index) => (
        <div
          key={event.id}
          className={`flex smM:flex-col smM:w-80 gap-5 items-end pb-16 mt-24 text-black ${event.color} rounded-[36px] max-md:flex-wrap md:pr-5 max-md:mt-10`}
        >
          <div className="flex  overflow-hidden relative flex-col px-12 pt-4 pb-20 mb-auto text-5xl font-extrabold text-center whitespace-nowrap aspect-[1.03] fill-yellow-300  max-md:text-4xl">
            <RectangleIcon />
            <div className="relative self-center md:text-4xl">{event.date}</div>
            <div className="relative mt-4 md:text-4xl">{event.month}</div>
          </div>

          <div className="flex flex-col grow p-2 shrink-0 mt-7 basis-0 w-fit max-md:max-w-full">
            <div className="text-5xl font-bold leading-[62.23px] max-md:max-w-full max-md:text-4xl">
              {event.title}
            </div>
            <div className="mt-5 text-xl font-semibold max-md:max-w-full">
              {event.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default memo(Upcoming);
