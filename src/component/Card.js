import React from "react";

function Card(props) {
  let data = props.data;
  console.log("my card data is :", data);
  return (
    <div className="flex flex-col md:relative">
      <div className="absolute top-[-7rem] z-[10] mx-auto">
        <img
          className="aspect-square rounded-full w-[140px] h-[140px] z-25 "
          src={data.image}
        />
        <div
          className=" w-[140px] h-[140px] bg-violet-500 rounded-full absolute
        top-[-6px] z-[20] left-[-10px]"
        ></div>
      </div>

      <div className="text-center mt-7 ">
        <p className="font-bold text-2xl capitalize">{data.name}</p>
      </div>
      <div className="text-center mt-3">
        <p className="text-violet-300 uppercase text-sm">{data.job}</p>
      </div>
      <div className="text-violet-400 mx-auto mt-5">"</div>
      <div className="text-center text-slate-500">
        <p>{data.text}</p>
      </div>
      <div className="text-violet-400 mx-auto mt-5">"</div>
    </div>
  );
}

export default Card;
