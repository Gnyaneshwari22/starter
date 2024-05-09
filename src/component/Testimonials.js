import React, { useState } from "react";
import Card from "./Card.js";
import data from "../data.js";

function Testimonials(props) {
  const data = props.data;
  const [index, setIndex] = useState(0);
  console.log("name is :", data);

  const leftShiftHandler = () => {
    if (index - 1 < 0) {
      setIndex(data.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const rightShiftHandler = () => {
    if (index + 1 > data.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const SurpriseHandler = () => {
    let randomIndex = Math.floor(Math.random() * data.length);
    setIndex(randomIndex);
  };
  return (
    <div className="w-[85vw] md;w-[700px] bg-white justify-center items-center mt-10 p-10 transition duration-700 flex flex-col hover:shadow-xl">
      <Card data={data[index]} />
      <div className="text-violet-400 mx-auto mt-5 flex text-3xl gap-3 font-bold items-center flex-row">
        <button
          onClick={leftShiftHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <div>{"<"}</div>
        </button>
        <button
          onClick={rightShiftHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <div>{">"}</div>
        </button>
      </div>
      <div>
        <button
          onClick={SurpriseHandler}
          className="bg-violet-400 hover:bg-violet-600 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg mt-4 "
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
