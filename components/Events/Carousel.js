"use client";
import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import axios from "axios";
import Image from "next/image";

const contentStyle = {
  height: "100vh", // Make the height responsive based on the viewport height
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const textStyle = {
  position: "absolute",
  top: "50%",
  left: "5%", // Slightly increase the left margin for better visibility
  transform: "translateY(-50%)",
  color: "#fff",
  fontSize: "2rem", // Use responsive font size
  fontWeight: "bold",
  textAlign: "left",
  width: "50%",
};

const CarouselComponent = () => {
  const [events, setEvents] = useState([]);

  async function fetchAllEvents() {
    try {
      const res = await axios.get("http://localhost:3000/api/events/getall");
      setEvents(res.data.events);
    } catch (error) {
      console.error("Failed to fetch events:", error);
    }
  }

  useEffect(() => {
    fetchAllEvents();
  }, []);

  return (
    <div className="p-10 rounded bg-[#A7C643]">
      <Carousel
        className="flex justify-center place-items-center"
        effect="fade"
        autoplay
      >
        {events.map((event) => (
          <div key={event._id} style={contentStyle}>
            <Image
              src={event.img_url}
              alt={event.img_desc}
              width={10000}
              height={200}
              layout="intrinsic"
              quality={100}
              style={{ opacity: 0.5 }} // Optional: Add opacity to image for better text readability
            />
            <div style={textStyle}>{event.name}</div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
