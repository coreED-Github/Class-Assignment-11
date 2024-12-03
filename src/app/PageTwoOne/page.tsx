"use client"
import React from "react";
import Link from "next/link";
export default function PageTwoOne() {
    return (
        <div>
            <div className="bg-white">
                <h1 className="text-3xl font-bold text-blue-800 text-center  pt-4">Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs</h1>
            </div>
            <div className=" flex justify-center flex-col items-center bg-white">
                <div className="h-80">
                    <img className="cursor-pointer w-full items-center h-80" src="https://cache1.pakwheels.com/system/car_generation_pictures/5361/original/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674" />
                </div>

                {/* button */}
                <div className="bg-white px-5 py-2 w-full gap-6 flex flex-row justify-center">
                    <Link href="/PageTwoOne">
                        <button className="py-1 bg-sky-100 text-blue-900 outline-none outline-blue-300 flex justify-center text-center w-32 h-8 rounded-sm hover:bg-blue-800 hover:text-white">
                            Book a Test Drive
                        </button>
                    </Link>

                    <Link href="/PageTwoOne">
                        <button className="py-1 bg-sky-100 text-blue-900 outline-none outline-blue-300 flex justify-center text-center w-32 h-8 rounded-sm hover:bg-blue-800 hover:text-white">
                            Bank Finance
                        </button>
                    </Link>

                </div>

                <div className="bg-white">
                    <h1 className="text-blue-800 text-center text-3xl font-semibold py-4">Vehicle Description</h1>

                    <div className="bg-white px-20 py-2 w-full gap-4 flex flex-col justify-center">
                        <div className="bg-white px-20 py-1 w-full gap-10 flex flex-row justify-start">
                            <h1 className="font-semibold">Number Of Door: 4</h1>
                            <h1 className="font-semibold">Fuel Type: Hihg Octane</h1>
                            <h1 className="font-semibold">Engine: 1800 CC </h1>
                            <h1 className="font-semibold">Condition: 8.5/10</h1>
                        </div>
                        <div className="bg-white px-20 py-1 w-full gap-10 flex flex-row justify-center">
                            <h1 className="font-semibold">Driven: 95,000 KM </h1>
                            <h1 className="font-semibold">Suspension Type: Soft</h1>
                            <h1 className="font-semibold">Avg: 13 Km Per Ltr</h1>
                            <h1 className="font-semibold">Transmission: Autometic</h1>
                        </div>
                    </div>
                    <h2 className="text-green-500 py-1 text-center text-2xl font-semibold">PKR 75.5 lacs</h2>
                </div>
                <div className="py-3">
                    <Link href="./">
                        <button className="py-1 bg-blue-900 text-white outline-none outline-blue-900 flex justify-center text-center w-40 h-10 rounded-sm hover:bg-blue-500 hover:text-blue-900 text-2xl">
                         Back
                        </button>
                    </Link>

                </div>

            </div>


        </div>

    )
}