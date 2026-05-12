import React from "react";
import Heading from "../component/Heading";
import { images } from "../assets/images";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const OurBest = ()=>{
    return(
        <div className="bg-[#1b2316] px-4 py-10 lg:px-15 lg:py-20">
                {/* our best heading */}
                <Heading heading="Our Best o2" />
                {/* our product card */}
                <div className="mt-30 flex flex-col lg:flex-row justify-end   lg:h-[755px] rounded-[92px] glass-effect  relative">
                    {/* product image */}
                    <img src={images.card_img} alt="Product image" className="w-[300px] h-[300px] lg:w-[877px] lg:h-[877px] object-cover absolute lg:-left-20 -top-30" />
                    {/* right side section */}
                    <div className=" sm:w-1/2 text-white/75 py-15 lg:py-30 px-5 mt-30 sm:mt-0 lg:px-20 boder ">
                        <p className="text-sm lg:text-[38px] font-semibold lg:leading-[40px] "> We Have Small And Best O2 Plants Collection’s</p>
                        <p className="font-semibold text-sm lg:text-[28px] lg:leading-[30px] my-5 lg:my-10">Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.</p>
                        <p className="font-semibold text-sm lg:text-[28px] lg:leading-[30px]">Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.</p>
                        <div className="flex justify-between mt-5">
                            <button className="w-[120px] h-[40px] lg:w-[217px] lg:h-[64px] text-lg lg:text-[28px] border rounded-[12px] hover:bg-white hover:text-black cursor-pointer duration-300">Explore</button>
                            <div className=" flex w-[100px] lg:w-[150px] items-center justify-between">
                                <FaChevronLeft />
                                <p className="">4/2</p>
                                <FaChevronRight />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <div className="w-15 flex items-center justify-around my-10">
                        <span className="border border-3 w-[20px] h-[5px]  border-white rounded-full"></span>
                        <span className="border border-3 w-[5px] border-white rounded-full"></span>
                        <span className="border border-3 w-[5px] border-white rounded-full"></span>
                    </div>
                </div>
            </div>
    )
}

export default OurBest;