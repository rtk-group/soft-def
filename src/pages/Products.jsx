import React from "react";
import { images } from "../assets/images";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

const Products = () => {
    return (
        <div className="h-screen border border-red-500 border-4 bg-stone-800 flex items-center justify-center overflow-hidden">
            {/* Main Card Wrapper */}
            {/* <div className="relative w-[512px] h-[644px] flex items-center justify-center border border-blue-500">
        
        SVG Background
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 512 644"
        >
          <path
            d="M 40 80 Q 40 20 100 20 Q 256 80 412 20 Q 472 20 472 80 L 472 564 Q 472 624 412 624 L 100 624 Q 40 624 40 564 Z"
            fill="rgba(102, 102, 102, 0.1)"
            stroke="rgba(95, 140, 221, 0.25)"
            strokeWidth="2"
            style={{
              backdropFilter: "blur(10px)",
              filter: "drop-shadow(0 10px 40px rgba(1, 8, 24, 0.38))",
            }}
          />
        </svg>

        Content
        <div className="relative w-full h-full flex flex-col items-center justify-end">
          
          Product Image
          <img
            src={images.card1_img}
            alt="Sansevieria plant"
            className="w-[460px] h-[460px] object-cover absolute -top-15 left-1/2 -translate-x-1/2 -translate-y-12"
          />

          Text Section
          <div className="px-10 pb-10 text-white/75 z-10 mx-10 mb-10">
            <p className="text-[38px] leading-none">Plantain Lilies</p>

            <p className="text-[22px] leading-7 mt-3 pr-5">
              Hostas are primarily grown for their lush, decorative leaves,
              which come in a wide variety of shapes, sizes,
            </p>

            <div className="flex justify-between items-center mt-5 ">
              <p className="text-[38px] font-semibold text-white">
                Rs. 380/-
              </p>

              <span className="border border-2 border-white/30 rounded-[12px] w-[60px] h-[60px] flex items-center justify-center">
                <img
                  src={images.bag}
                  alt="shopping bag"
                  className="w-8"
                />
              </span>
            </div>
          </div>
        </div>
      </div> */}


            <div className="border-3 border-green-600 w-[512px] h-[480px] flex flex-col items-center justify-around p-15 relative">

                {/* SVG Background */}
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
                        style={{
                            backdropFilter: "blur(10px)",
                            filter: "drop-shadow(0 10px 40px rgba(1, 8, 24, 0.38))",
                        }}
                    />
                </svg>

                {/* constent */}
                <div className="flex gap-10 border">
                    <img src={images.customer} alt="customer image" className="w-[88px] h-[88px] object-cover rounded-full " />
                    <div className="text-[38px] font-semibold text-white">
                        Ronnie Hamill
                        <span className="flex text-[16px] text-[#FFF84E] gap-2">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalf />
                        </span>
                    </div>
                </div>
                <p className="text-[24px] text-white/75 leading-7">Just got my hands on some absolutely awesome plants, and I couldn’t be happier!</p>
            </div>




        </div>
    );
};

export default Products;
