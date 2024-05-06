import React from "react";
import ProductsList from "../components/ProductsList";
import { useState } from "react";

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
          <div className="fixed w-2/4 flex flex-col items-center justify-center">
            <h2 className="-mt-3 text-2xl mb-5 ">
              The highest grossing films of all time
            </h2>
            <div className="w-3/4">
              <label className="input input-bordered flex items-center gap-2 ">
                <input type="text" className="grow" placeholder="Search Movie" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
