import { memo } from "react";

const RectangleIcon = () => (
  <img
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/72e467b269ee78d4b2885ed6b7646e0cf54b101b8c374ba67238c06140a9691b?apiKey=6e0b39cac1cf445b93dc7744259e3ead&"
    className="w-full aspect-[1.03] fill-yellow-300 max-w-[186px]"
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
    },
    {
      id: 2,
      date: "15",
      month: "Mar",
      title: "Event 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac eleifend metus. Cras sed purus eu ligula tincidunt placerat. In luctus augue nec varius maximus. Pellentesque egestas augue est, eget.",
    },
    {
      id: 3,
      date: "20",
      month: "Apr",
      title: "Event 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac eleifend metus. Cras sed purus eu ligula tincidunt placerat. In luctus augue nec varius maximus. Pellentesque egestas augue est, eget.",
    },
  ];

  return (
    <div
      className={`use client bg-[#FFECC1] w-full mx-auto flex flex-col items-start relative`}
    >
      <div>Upcoming Events</div>
      {events.map((event) => (
        <div key={event.id} className="relative w-full mx-auto my-8"></div>
      ))}
    </div>
  );
}

export default memo(Upcoming);
