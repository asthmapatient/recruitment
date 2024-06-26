"use client";
import { Search } from "lucide-react";
import React, { useState } from "react";
import ProductContent from "./ProductContent";

export default function page() {
  const [search, setSearch] = useState("");

  return (
    <main className="flex justify-center items-center mt-16">
      <div className="flex flex-col gap-6">
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
          <ProductContent search={search} />
        </div>
      </div>
    </main>
  );
}
