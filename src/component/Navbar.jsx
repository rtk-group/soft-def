import React, { useState } from "react";
import { images } from "../assets/images";
import { FaCaretRight } from "react-icons/fa";


const Navbar = () => {

    const [openDropdown, setOpenDropdown] = useState(false);

    return (
        <div className="fixed top-0 z-50 flex items-center justify-between h-[80px] sm:h-[115px] w-full px-4 lg:px-10">
            <div className="flex items-center gap-2 ">
                <img src={images.nav_logo} alt="" className="w-[35px] lg:w-[48px]" />
                <p className="text-xl lg:text-[28px] text-[#FFFFFF]">FloraVision.</p>
            </div>

            <div className="hidden md:flex">
                <ul className="w-[400px] lg:w-[521px] flex justify-between text-[#FFFFFF] font-normal font-indie-flower text-[20px] lg:text-[24px]">
                    <li className="">Home</li>
                    <li onClick={() => setOpenDropdown(!openDropdown)} className="flex gap-3 relative">
                        <li className="">Plans Type</li>
                        <span><FaCaretRight className={`${openDropdown ? 'rotate-90' : ''} duration-300`} /></span>
                        <ul className={`${openDropdown ? 'h-[132px]' : 'h-0 '} duration-300 overflow-hidden absolute left-0 top-11 text-lg flex flex-col gap-1`}>
                            <li className="border px-3 rounded-sm cursor-pointer">Product A</li>
                            <li className="border px-3 rounded-sm cursor-pointer">Product B</li>
                            <li className="border px-3 rounded-sm cursor-pointer">Product C</li>
                            <li className="border px-3 rounded-sm cursor-pointer">Product D</li>
                        </ul>
                    </li>

                    <li className="">More</li>
                    <li className="">Contact</li>
                </ul>
            </div>

            <div className="flex justify-between w-[150px] lg:w-[230px]">
                <img src={images.search_icon} alt="search_icon" className="max-w-[26px]" />
                <img src={images.bag} alt="bag" className="max-w-[26px]" />
                <div className="w-[26px] flex flex-col items-end justify-around">
                    <div className="border border-2 w-[31px] text-[#FFFFFF] rounded-full "></div>
                    <div className="border border-2 w-[23px] text-[#FFFFFF] rounded-full "></div>
                </div>
            </div>

        </div>
    )
}

export default Navbar;