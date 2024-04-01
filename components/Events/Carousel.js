"use client";
import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import axios from "axios";

const contentStyle = {
  height: "40rem",
  color: "#fff",
  lineHeight: "30rem",
  textAlign: "center",
  background: "#364d79",
};

const CarouselComponent = () => {
  const [events, setEvents] = useState([])
  async function fetchAllEvents(){
    try {
      const res = await axios.get("http://localhost:3000/api/events/getall")
      setEvents(res.data.events)
      console.log(res);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
   fetchAllEvents()
  }, [])
  
  return (
    <div className="p-10 rounded bg-[#A7C643] ">
      <Carousel effect="easing">
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
};
export default CarouselComponent;
