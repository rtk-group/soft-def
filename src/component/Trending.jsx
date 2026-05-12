import React from "react";
import { images } from "../assets/images";
import Heading from "./Heading";

const Trending = () => {
    return (
        < div className="w-full px-4 sm:px-6 lg:px-10 lg:absolute bottom-0 pb-5">

            {/* Trending Plans Heading */}
            <Heading heading="Our Trendy Plants" />
            <div className="flex flex-col lg:flex-row min-h-[526px] justify-end glass-effect rounded-[30px] md:rounded-[151px] relative my-25">
                {/* image section */}
                <img src={images.card1_img} alt="card1 image" className=" w-[300px] h-[300px] lg:w-[601px] lg:h-[732px] object-cover absolute left-0 -top-25 lg:left-15 lg:-top-50 " />
                <div className="w-full lg:w-1/2 p-5 text-[#FFFFFF] flex flex-col justify-center md:pr-10">
                    <p className="font-semibold text-[25px] lg:text-[38px] ">For Your Desks Decorations</p>
                    <p className="font-semibold text-[18px] md:text-[20px] my-2 md:my-5 ">I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!</p>
                    <p className="text-[30px] md:text-[38px] font-semibold ">Rs. 599/-</p>
                    <div className="flex gap-4 mt-3 ">
                        <button className="text-[28px] w-[217px] h-[64px] border rounded-[12px] ">Explore</button>
                        <span className="border rounded-[12px] w-[64px] h-[64px] flex items-center justify-center">
                            <img src={images.bag} alt="shoping bag" className="w-10" />
                        </span>
                    </div>
                </div>
            </div>


            <div className="flex flex-col lg:flex-row min-h-[526px] justify-end md:justify-start glass-effect rounded-[30px] md:rounded-[151px] relative mt-10 md:mt-20 lg:mt-25">
                <div className="w-full lg:w-1/2 p-5 text-[#FFFFFF] flex flex-col justify-center md:pl-15">
                    <p className="font-semibold text-[25px] lg:text-[38px] ">For Your Desks Decorations</p>
                    <p className="font-semibold text-[18px] md:text-[20px] my-2 md:my-5 ">I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!</p>
                    <p className="text-[30px] md:text-[38px] font-semibold ">Rs. 599/-</p>
                    <div className="flex gap-4 mt-3 ">
                        <button className="text-[28px] w-[217px] h-[64px] border rounded-[12px] ">Explore</button>
                        <span className="border rounded-[12px] w-[64px] h-[64px] flex items-center justify-center">
                            <img src={images.bag} alt="shoping bag" className="w-10" />
                        </span>
                    </div>
                </div>
                {/* image section */}
                <img src={images.card2_img} alt="card1 image" className=" w-[300px] h-[300px] lg:w-[601px] lg:h-[732px] object-cover absolute right-0 -top-25 lg:right-15 lg:-top-50 " />
            </div>

        </div>
    )
}

export default Trending;