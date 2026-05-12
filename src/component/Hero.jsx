import React from "react";
import { FaPlay } from "react-icons/fa";
import { images } from "../assets/images";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Hero = () => {
    return (
        <div className="w-full flex flex-col lg:flex-row px-4 sm:px-6 md:px-10 lg:px-16 pt-28 sm:pt-32 md:pt-40 lg:pt-85">

            {/* LEFT SIDE */}
            <div className="w-full lg:w-4xl flex flex-col gap-16 lg:gap-24 text-white">

                {/* Hero Text */}
                <div>
                    <p className=" text-4xl sm:text-6xl md:text-7xl lg:text-[118px] font-semibold leading-tight lg:leading-[140px]">
                        Earth’s Exhale
                    </p>

                    <p className="text-sm sm:text-base md:text-lg lg:text-[23px] font-medium mt-4 max-w-2xl">
                        "Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap mt-6 gap-4 items-center">
                        <button className="border-2 h-12 sm:h-14 md:h-16 rounded-xl text-lg sm:text-xl md:text-2xl px-6 sm:px-10 hover:bg-white hover:text-black duration-300">
                            Buy Now
                        </button>

                        <button className="border-2 rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-[70px] md:h-[70px] flex items-center justify-center text-lg sm:text-xl md:text-2xl">
                            <FaPlay />
                        </button>

                        <p className="text-lg sm:text-xl md:text-2xl font-indie-flower">
                            Live Demo...
                        </p>
                    </div>
                </div>

                {/* Review Card */}
                <div className="w-full max-w-md p-6 sm:p-8 glass-effect rounded-[30px] sm:rounded-[45px] border border-[#666666]">
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-4 sm:gap-6">
                            <img
                                src={images.customer}
                                alt="customer"
                                className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-full"
                            />

                            <div className="text-lg sm:text-xl">
                                Ronnie Hamill
                                <span className="flex text-sm text-[#FFF84E] gap-1 mt-1">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStarHalf />
                                </span>
                            </div>
                        </div>

                        <p className="text-sm sm:text-base">
                            I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
                        </p>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-20 lg:mt-0 relative">

                <div className="relative w-full max-w-[550px] h-[420px] sm:h-[500px] md:h-[580px] lg:h-[644px] flex items-center justify-center">

                    {/* SVG */}
                    <svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 512 644"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M 40 80 Q 40 20 100 20 Q 256 80 412 20 Q 472 20 472 80 L 472 564 Q 472 624 412 624 L 100 624 Q 40 624 40 564 Z"
                            fill="rgba(102, 102, 102, 0.1)"
                            stroke="rgba(95, 140, 221, 0.25)"
                            strokeWidth="2"
                        />
                    </svg>

                    {/* content */}
                    <div className="relative w-full h-full flex flex-col items-center justify-end">

                        {/* plant image */}
                        <img
                            src={images.card_img}
                            alt="plant"
                            className="w-[260px] sm:w-[340px] md:w-[420px] lg:w-[460px]
                     absolute top-0 sm:-top-10 left-1/2 -translate-x-1/2 -translate-y-10"
                        />
                        {/* Product detail */}
                        <div className=" text-white/75 z-10 px-6 sm:px-10 mb-10 sm:mb-16 lg:mb-30 text-center sm:text-left">
                            <p className="text-base sm:text-lg md:text-xl">Indoor Plant</p>
                            <p className="text-2xl sm:text-3xl md:text-4xl text-white">
                                Aglaonema Plant
                            </p>

                            <button className="mt-4 w-40 sm:w-48 md:w-[217px] h-12 sm:h-14 md:h-16 text-lg sm:text-xl md:text-2xl border rounded-xl hover:bg-white hover:text-black duration-300">
                                Buy Now
                            </button>
                        </div>

                        {/* Arrow */}
                        <div className="text-white text-lg sm:text-xl absolute right-6 sm:right-10 bottom-28 sm:bottom-36">
                            <FaChevronRight />
                        </div>

                        {/* Sidebar Points */}
                        <div className="absolute bottom-6 flex gap-2 sm:mb-10">
                            <span className="w-6 h-2 border-2 bg-white rounded-full border-white"></span>
                            <span className="w-2 h-2 border-2 bg-white rounded-full border-white"></span>
                            <span className="w-2 h-2 border-2 bg-white rounded-full border-white"></span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
