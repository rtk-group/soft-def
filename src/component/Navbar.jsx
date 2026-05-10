import React from "react";
import { images } from "../assets/images";

const Navbar = () =>{
    return(
        <div className="border border-black fixed top-0 flex items-center justify-between h-[115px] w-full px-10">
            <div className="border border-green-600 flex items-center gap-2">
                <img src={images.nav_logo} alt="" className="w-[48px]" />
                <p className="text-[28px] font-black text-[#FFFFFF]">FloraVision.</p>
            </div>

            <div className="border border-green-600">
                <ul className="border w-[531px] flex justify-between text-[#FFFFFF] text-[24px]">
                    <li className="">Home</li>
                    <div className="flex gap-5">
                    <li className="">Plans Type</li>
                    <p>{">"}</p>
                    </div>
                    <li className="">More</li>
                    <li className="">Contact</li>
                </ul>
            </div>

            <div className="border border-green-600 flex justify-between w-[250px]">
                <img src={images.search_icon} alt="search_icon" className="w-[26px]" />
                <img src={images.bag} alt="bag" className="w-[26px]" />
                <div className="w-[26px] flex flex-col items-end justify-around">
                    <div className="border border-2 w-[31px] text-[#FFFFFF] rounded-full "></div>
                    <div className="border border-2 w-[23px] text-[#FFFFFF] rounded-full "></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;