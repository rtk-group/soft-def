import React from "react";
import { images } from "../assets/images";
import { FaPlay } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";




const Home = () =>{
    return(
        <div className="w-full h-[2592px] border border-4 border-red-500 relative">
            <img src={images.home_bg} alt="background image" className="w-full h-full object-cover absolute -z-1" />

            <div className="border border-green-500 px-5 flex w-full mt-[350px]">
                {/* left side section */}
                <div className="border border-red-500 w-[50%] flex flex-col gap-50 text-[#FFFFFF] ">
                    {/* box-1 */}
                    <div className="border">
                        <p className="text-[118px] font-semibold leading-35">Earth’s Exhale</p>
                    <p className="text-[23px] font-medium ">"Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.</p>
                    <div className="border flex mt-4 gap-5 items-center">
                        <button className="border border-2 h-[64px] rounded-[12px] text-[28px] font-regular w-[217px]">Buy Now</button>
                        <button className="border border-2 rounded-full w-[70px] h-[70px] px-6 text-[25px] "> <FaPlay /> </button>
                        <p className="text-[26px] font-regular font-indie-flower ">Live Demo...</p>
                    </div>
                    </div>


                    <div className=" max- w-[409px] h-[237px] p-10 glass-effect rounded-[45px] border border-[#666666]" >
                        <div className="flex flex-col gap-5 ">
                        <div className="flex gap-7">
                            <img src={images.customer} alt="customer image" className="w-[64px] h-[64px] object-cover rounded-full "/>
                            <div className="text-[22px] font-regular">
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
                        <p className="text-[17px] font-regular ">I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.</p>
                        </div>
                    </div>

                </div>


                {/* right side section */}
                <div className="w-[50%] flex justify-end">

                    <div className="w-[512px] h-[719px] border border-blue-500 flex">
                        <div className="border border-red-500 border border-3 glass-effect w-full my-20 rounded-[50px] relative overflow-hidden flex justify-center"> 
                            <div className="border border-red-500">
                                <img src={""} alt="product image" />
                                <p className="border">Indoor Plant</p>
                                <p className="border">Aglaonema plant</p>
                                <button className=""> Buy Now </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            {/* trending plans section */}
            <div className="w-full flex items-center justify-center my-15">
            <div className=" flex relative text-[55px] font-semibold text-[#FFFFFF] ">
                <span className="absolute -left-3 top-4 w-[61.5px] h-[63px] border-l-5 border-b-5 border-b-[#FBD300]/50 border-l-[#FBD300]/50 rounded-bl-2xl"></span>
                <p className="">Our Trendy Plants</p>
                <span className="absolute -right-3 top-4 rounded-tr-2xl w-[61.5px] h-[63px]  border-r-5 border-t-5 border-t-[#FBD300]/50 border-r-[#FBD300]/50 "></span>
            </div>
            </div>

            {/* product card 1 */}
            <div className="w-full px-5">
                <div className="flex h-[526px] glass-effect rounded-[151px]">
                    {/* image section */}
                <div className="w-[50%] relative">
                <img src={images.card1_img} alt="card1 image" className=" w-[601px] h-[732px] object-cover absolute left-15 -top-50 " />
                </div>
                {/* content box */}
                <div className="w-[50%] text-[#FFFFFF] flex flex-col justify-center pr-10">
                    <p className="font-semibold text-[38px] ">For Your Desks Decorations</p>
                    <p className="font-semibold text-[20px] my-5 ">I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!</p>
                    <p className="text-[38px] font-semibold ">Rs. 599/-</p>
                    <div className="flex gap-4 mt-3 ">
                        <button className="text-[28px] w-[217px] h-[64px] border rounded-[12px] ">Explore</button>
                        <span className="border rounded-[12px] w-[64px] h-[64px] flex items-center justify-center">
                            <img src={images.bag} alt="shoping bag" className="w-10" />
                        </span>
                    </div>
                </div>
                </div>
            </div>


            <div className="w-full px-5 mt-32">
                <div className="flex h-[526px] glass-effect rounded-[151px]">
                {/* content box */}
                <div className="w-[50%] text-[#FFFFFF] flex flex-col justify-center pl-10">
                    <p className="font-semibold text-[38px] ">For Your Desks Decorations</p>
                    <p className="font-semibold text-[20px] my-5 ">The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming</p>
                    <p className="text-[38px] font-semibold ">Rs. 399/-</p>
                    <div className="flex gap-4 mt-3 ">
                        <button className="text-[28px] w-[217px] h-[64px] border rounded-[12px] ">Explore</button>
                        <span className="border rounded-[12px] w-[64px] h-[64px] flex items-center justify-center">
                            <img src={images.bag} alt="shoping bag" className="w-10" />
                        </span>
                    </div>
                </div>
                    {/* image section */}
                <div className="w-[50%] relative">
                <img src={images.card2_img} alt="card1 image" className=" w-[601px] h-[732px] object-cover absolute right-15 -top-45 " />
                </div>
                </div>
            </div>
            

            



        </div>
    )
}

export default Home;