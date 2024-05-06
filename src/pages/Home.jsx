import React from "react";
import ProductsList from "../components/ProductsList";
import { useState } from "react";
import SearchMov from "../components/SearchMov";

function Home() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="max-w-7xl mx-auto pb-12 ">
      <div className="text-center mb-12">
        <h2 className="text-4xl mb-4">
          <span className="font-mono">Founder of:</span>
          <a
            href="https://t.me/fayzullokhonweb"
            className={`link text-cyan-600 ${hovered ? "hovered" : ""}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {hovered ? "About Me" : "Fayzullokhon"}
          </a>
        </h2>
        <div className="w-full h-0.5 bg-black opacity-10"></div>
      </div>
      <div className="flex gap-9">
        <div className="w-2/4">
          <ProductsList />
        </div>
        <div className="w-2/4">
          <div className="fixed">
            <SearchMov />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
