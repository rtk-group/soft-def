import React from "react";
import { images } from "../assets/images";
import { ImFacebook } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="bg-[#1b2316] text-white p-4 lg:pl-20 pr-5 lg:pt-10">
            <div className=" grid grid-cols-1 lg:grid-cols-3">
                {/* first box */}
                <div className="">
                    <div className="flex items-center gap-2 max-sm:mb-15">
                        <img src={images.nav_logo} alt="" className="w-[50px] lg:w-[94px]" />
                        <p className=" text-[25px] lg:text-[45px] text-[#FFFFFF] font-black">FloraVision.</p>
                    </div>

                    <div className="font-medium text-sm lg:text-[25px] lg:leading-[30px] mt-5 lg:mt-10">"From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."</div>
                </div>
                {/* second */}
                <div className="flex flex-col lg:items-center gap-4 mt-6 lg:mt-0">
                    <span className="text-lg lg:text-[28px] font-extrabold">Quick Links</span>
                    <div className=" flex flex-col lg:gap-2 font-medium lg:text-[22px]">
                        <a href="#">Home</a>
                        <a href="#">Type’s Of plant’s</a>
                        <a href="#">Contact</a>
                        <a href="#">Privacy</a>
                    </div>
                </div>

                {/* third */}
                <div className="mt-6 lg:mt-0">
                    <span className="text-lg lg:text-[28px] font-extrabold ">For Every Update.</span>
                    <div className="boder border-white border-[1px] flex rounded-lg p-[1px] mt-4 lg: mt-0">
                        <input type="text" placeholder="Enter Email" className="w-full text-lg lg:text-[24px] pl-5" />
                        <button className="w-[165px] h-[45px] lg:h-[60px] bg-white text-black rounded-lg lg:text-[18px] ">SUBSCRIBE</button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row  lg:justify-between pt-10 lg:py-20">
                <div className="w-[150px] lg:w-[200px] flex text-2xl lg:text-[34px] justify-between">
                    <FaLinkedinIn />
                    <FaTwitter />
                    <ImFacebook />
                </div>
                <div className="text-sm max-lg:w-full lg:text-[22px] max-lg:text-center mt-10 lg:mt-0 lg:mr-40">FloraVision © all right reserve</div>
            </div>
        </div>
    )
}

export default Footer;