"use client";
import Link from "next/link";
import { useState } from "react";

export default function CarFilter() {
  const [selectedBrand, setSelectedBrand] = useState("");

  const handleFilter = (brand:any) => {
    setSelectedBrand(brand); 
  };

  return (
    <div className="py-10 px-5 min-h-screen bg-gray-100 ">
      <div className="shadow-lg rounded-lg p-6 max-w-4xl mx-auto bg-white">
        <h1 className="text-3xl font-bold text-center text-sky-800 mb-8">Filter by Modle</h1>
        <div className="flex justify-center gap-4">
         

          <Link href="/DetailFour">
          <button
            onClick={() => handleFilter("Toyota Yaris")}
            className={`px-6 py-2 rounded-lg ${
              selectedBrand === "Toyota"
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-gray-600 hover:bg-blue-200"
            }`}
          >
            Toyota Yaris
          </button>
          </Link>
          <Link href="/DetailOne">
          <button
            onClick={() => handleFilter("Toyota Corolla")}
            className={`px-6 py-2 rounded-lg ${
              selectedBrand === "Honda"
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-gray-600 hover:bg-blue-200"
            }`}
          >
            Toyota Corolla
          </button>
          </Link>
<Link href="/DetailThree">
          <button
            onClick={() => handleFilter("Toyota Fortuner")}
            className={`px-6 py-2 rounded-lg ${
              selectedBrand === "BMW"
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-gray-600 hover:bg-blue-200"
            }`}
          >
            Toyota Fortuner
          </button>
          </Link>
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-2xl font-semibold text-gray-700">
            Selected Modle:
          </h2>
          <p
            className={`mt-2 text-lg ${
              selectedBrand
                ? "text-blue-700 font-bold"
                : "text-gray-600 italic"
            }`}
          >
            {selectedBrand || "No modle selected"}
          </p>
        </div>
      </div>
    </div>
  );
}