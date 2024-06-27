"use client";
import { Search } from "lucide-react";
import React, { use, useEffect, useState } from "react";
import ProductContent from "./ProductContent";
import { data } from "@/db/data";

export default function page() {
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState([""]);
  const [filteredData, setFilteredData] = useState(data);
  console.log("selectedFilter", selectedFilter);
  const filteredItems = data.filter(
    (item) =>
      (search === "" ||
        item.title.toLowerCase().includes(search.toLowerCase())) &&
      (selectedFilter[0] === "" || selectedFilter.includes(item.category))
  );
  console.log("filteredItems", filteredItems);
  useEffect(() => {
    setFilteredData(filteredItems);
  }, [search, selectedFilter]);

  return (
    <main className="mt-16">
      <div className="flex justify-center items-center flex-col gap-6">
        <h1 className="text-4xl font-semibold ">
          <span className="text-textclr_green">Herald</span> is Recruiting!
        </h1>
        <div className="flex gap-2 border p-2">
          <Search className="w-5 h-5" />
          <input
            type="text"
            placeholder="Search job"
            className="outline-none w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <select
            name=""
            id=""
            onChange={(e) => setSelectedFilter((prev) => [e.target.value])}
          >
            <option value="">All</option>
            <option value="Health">Health</option>
            <option value="Wealth">Wealth</option>
          </select>
        </div>
        <div>
          <ProductContent filteredData={filteredData} />
        </div>
      </div>
    </main>
  );
}
