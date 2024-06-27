import React from "react";

export default function ProductContent({ filteredData }: { filteredData: any[] }) {
  
  return (
    <div className="grid grid-cols-4 gap-10 mt-10">
      {filteredData.map((item, index) => (
        <div key={index} className="w-[250px]">
          <img src={item.img} alt={item.title} className=" w-full aspect-square" />
          <div>
            <h1 className="text-2xl font-semibold">{item.title}</h1>
            <p className="text-textclr_green">{item.date}</p>
            <p>{item.time}</p>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
