import React from "react";
import { data } from "@/db/data";

export default function ProductContent() {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="col-span-3 grid grid-cols-1">
          <div className="flex">
            <img src={item.img} alt={item.title} className="w-40 h-40" />
            <div>
              <h1 className="text-2xl font-semibold">{item.title}</h1>
              <p className="text-textclr_green">{item.date}</p>
              <p>{item.time}</p>
              <p>{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
