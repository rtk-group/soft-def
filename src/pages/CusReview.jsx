import React from "react";
import Heading from "../component/Heading";
import { images } from "../assets/images";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";


const customerData = [
    {
        name: "Shelly Russel",
        image: `${images.c1_img}`,
        description: "Just got my hands on some absolutely awesome plants, and I couldn’t be happier!"
    },
    {
        name: "Lula Rolfson",
        image: `${images.c2_img}`,
        description: "Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home."
    },
    {
        name: "Carol Huels",
        image: `${images.c3_img}`,
        description: "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!"
    }
]

const CusReview = () => {
    return (
        <div className=" w-full bg-[#1b2316] pb-10 sm:pb-20">
            {/*Customer Review heacing */}
            <Heading heading="Customer Review" />
            {/* customer cards */}
            <div className=" grid grid-cols-1 lg:grid-cols-3">
                {
                    customerData.map((cus, i) => (
                        <div className=" mt-10 sm:mt-0 max-w-[512px] mx-auto lg:h-[480px] flex flex-col items-center p-8 sm:p-15 relative">
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
                            <div className="flex gap-6 my-10 items-center">
                                <img src={cus.image} alt="customer image" className="w-[88px] h-[88px] object-cover rounded-full " />
                                <div className="text-[38px] font-semibold text-white">
                                    <p className="text-xl sm:text-[38px] mb-3"> {cus.name} </p>
                                    <span className="flex text-[16px] text-[#FFF84E] gap-2">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStarHalf />
                                    </span>
                                </div>
                            </div>
                            <p className="text-md sm:text-[24px] text-white/75 sm:leading-[30px] mt-5 px-4"> {cus.description} </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CusReview;