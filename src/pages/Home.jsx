import React from "react";
import { images } from "../assets/images";
import { FaPlay } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";





const Home = () => {
    return (
        <>
            <div className="w-full h-[2592px] border border-4 border-red-500 relative">
                <img src={images.home_bg} alt="background image" className="w-full h-full object-cover absolute -z-1" />

                <div className="border border-green-500 px-5 flex w-full mt-[360px]">
                    {/* left side section */}
                    <div className="border border-red-500 w-[50%] flex flex-col gap-45 text-[#FFFFFF] ">
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


                        <div className=" w-[409px] h-[237px] p-10 glass-effect rounded-[45px] border border-[#666666]" >
                            <div className="flex flex-col gap-5 ">
                                <div className="flex gap-7">
                                    <img src={images.customer} alt="customer image" className="w-[64px] h-[64px] object-cover rounded-full " />
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
                    <div className="w-[50%] flex justify-end relative">

                        <div className="w-[512px] h-[719px] border border-blue-500 absolute -top-40 pt-30 flex justify-center">

                            <div className="absolute top-5 z-5">
                                <img src={images.card_img} alt="card image" className="w-[459px] h-[459px] object-cover " />
                                <div className=" text-[#FFFFFF] mx-15">
                                    <p className=" font-regular text-[23px] ">Indoor Plant</p>
                                    <p className=" font-regular text-[38px] ">Aglaonema plant</p>
                                    <button className="cursor-pointer hover:bg-white hover:text-black duration-300 w-[217px] h-[64px] text-[28px] border rounded-[12px] mt-3"> Buy Now </button>
                                </div>
                            </div>

                            <div className="border rounded-[50px] border-t-0 border-green-500 w-full mt- [110px] relative flex justify-center h-full overflow-hidden">
                                <div className="border-t border-t-green-500  w-[96px] h-[110px] rounded-tl-[50px] absolute left-0 top-0 "> </div>
                                <div className="border-t border-t-green-500  w-[95px] h-[110px] rounded-tr-[50px] absolute right-0 top-0 "> </div>
                                <div className="w-[900px] h-[900px] border border-green-500 rounded-full absolute -top-[870px] "></div>

                                <div className=" text-[#FFFFFF] text-[20px] absolute left-0 ml-8 bottom-38">
                                    <FaChevronLeft />
                                </div>
                                <div className="text-[#FFFFFF] text-[20px] absolute mr-8 right-0 bottom-38">
                                    <FaChevronRight />
                                </div>

                                <div className=" absolute bottom-10 w-15 flex items-center justify-around">
                                    <span className="border border-3 w-[20px] h-[5px]  border-white rounded-full"></span>
                                    <span className="border border-3 w-[5px] border-white rounded-full"></span>
                                    <span className="border border-3 w-[5px] border-white rounded-full"></span>
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
                        <div className="w-[50%] text-[#FFFFFF] flex flex-col justify-center pl-15">
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


            {/* secont section */}
            <div className="w-full border border-red-500 border-5 bg-stone-800 ">
                {/*top selling plants */}
                <div className="w-full flex items-center justify-center my-15">
                    <div className=" flex relative text-[55px] font-semibold text-[#FFFFFF] ">
                        <span className="absolute -left-3 top-4 w-[61.5px] h-[63px] border-l-5 border-b-5 border-b-[#FBD300]/50 border-l-[#FBD300]/50 rounded-bl-2xl"></span>
                        <p className="">Our Top Selling Plants</p>
                        <span className="absolute -right-3 top-4 rounded-tr-2xl w-[61.5px] h-[63px]  border-r-5 border-t-5 border-t-[#FBD300]/50 border-r-[#FBD300]/50 "></span>
                    </div>
                </div>

                <div className="border border-green-500 w-full flex flex-col lg:flex-row gap-10 ">
                    {/* card-1 */}
                    <div className="w-[512px] h-[719px] border border-blue-500 pt-30 flex justify-center relative">
                        <div className="absolute top-0 z-5">
                            <img src={images.card_img} alt="card image" className="w-[459px] h-[459px] object-cover " />
                            <div className=" text-white/75 mx-15 border">
                                <p className=" text-[38px] ">Aglaonema plant</p>
                                <p className="  text-[22px] leading-7 ">The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care</p>
                                <div className="border flex justify-between">
                                    <p className="text-[38px] font-semibold ">Rs. 300/-</p>
                                    <span className="border rounded-[12px] w-[60px] h-[60px] flex items-center justify-center">
                                        <img src={images.bag} alt="shoping bag" className="w-8" />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="border rounded-[50px] border-t-0 border-green-500 w-full mt- [110px] relative flex justify-center h-full overflow-hidden">
                            <div className="border-t border-t-green-500  w-[96px] h-[110px] rounded-tl-[50px] absolute left-0 top-0 "> </div>
                            <div className="border-t border-t-green-500  w-[95px] h-[110px] rounded-tr-[50px] absolute right-0 top-0 "> </div>
                            <div className="w-[900px] h-[900px] border border-green-500 rounded-full absolute -top-[870px] "></div>
                        </div>
                    </div>

                    {/* card-2 */}
                    <div className="w-[512px] h-[719px] border border-blue-500 pt-30 flex justify-center relative">
                        <div className="absolute top-0 z-5">
                            <img src={images.card1_img} alt="card image" className="w-[459px] h-[459px] object-cover " />
                            <div className=" text-white/75 mx-15 border">
                                <p className=" text-[38px] ">Plantain Lilies</p>
                                <p className="  text-[22px] leading-7 ">Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,</p>
                                <div className="border flex justify-between">
                                    <p className="text-[38px] font-semibold ">Rs. 380/-</p>
                                    <span className="border rounded-[12px] w-[60px] h-[60px] flex items-center justify-center">
                                        <img src={images.bag} alt="shoping bag" className="w-8" />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="border rounded-[50px] border-t-0 border-green-500 w-full mt- [110px] relative flex justify-center h-full overflow-hidden">
                            <div className="border-t border-t-green-500  w-[96px] h-[110px] rounded-tl-[50px] absolute left-0 top-0 "> </div>
                            <div className="border-t border-t-green-500  w-[95px] h-[110px] rounded-tr-[50px] absolute right-0 top-0 "> </div>
                            <div className="w-[900px] h-[900px] border border-green-500 rounded-full absolute -top-[870px] "></div>
                        </div>
                    </div>

                    {/* card-3 */}
                    <div className="w-[512px] h-[719px] border border-blue-500 pt-30 flex justify-center relative">
                        <div className="absolute top-0 z-5">
                            <img src={images.p1_img} alt="card image" className="w-[459px] h-[459px] object-cover " />
                            <div className=" text-white/75 mx-15 border">
                                <p className=" text-[38px] ">Cactus</p>
                                <p className="  text-[22px] leading-7 ">It is known for their ability to thrive in arid environments</p>
                                <div className="border flex justify-between">
                                    <p className="text-[38px] font-semibold ">Rs. 259/-</p>
                                    <span className="border rounded-[12px] w-[60px] h-[60px] flex items-center justify-center">
                                        <img src={images.bag} alt="shoping bag" className="w-8" />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="border rounded-[50px] border-t-0 border-green-500 w-full mt- [110px] relative flex justify-center h-full overflow-hidden">
                            <div className="border-t border-t-green-500  w-[96px] h-[110px] rounded-tl-[50px] absolute left-0 top-0 "> </div>
                            <div className="border-t border-t-green-500  w-[95px] h-[110px] rounded-tr-[50px] absolute right-0 top-0 "> </div>
                            <div className="w-[900px] h-[900px] border border-green-500 rounded-full absolute -top-[870px] "></div>
                        </div>
                    </div>

                </div>


                <div className="border border-green-500 w-full flex flex-col lg:flex-row my-20 gap-10">
                    {/* card-4 */}
                    <div className="w-[512px] h-[719px] border border-blue-500 pt-30 flex justify-center relative">
                        <div className="absolute top-0 z-5">
                            <img src={images.p3_img} alt="card image" className="w-[459px] h-[459px] object-cover " />
                            <div className=" text-white/75 mx-15 border">
                                <p className=" text-[38px] ">Swiss cheese Plant</p>
                                <p className="  text-[22px] leading-7 ">It is a popular tropical houseplant known for its distinctive, perforated leaves</p>
                                <div className="border flex justify-between">
                                    <p className="text-[38px] font-semibold ">Rs. 400/-</p>
                                    <span className="border rounded-[12px] w-[60px] h-[60px] flex items-center justify-center">
                                        <img src={images.bag} alt="shoping bag" className="w-8" />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="border rounded-[50px] border-t-0 border-green-500 w-full mt- [110px] relative flex justify-center h-full overflow-hidden">
                            <div className="border-t border-t-green-500  w-[96px] h-[110px] rounded-tl-[50px] absolute left-0 top-0 "> </div>
                            <div className="border-t border-t-green-500  w-[95px] h-[110px] rounded-tr-[50px] absolute right-0 top-0 "> </div>
                            <div className="w-[900px] h-[900px] border border-green-500 rounded-full absolute -top-[870px] "></div>
                        </div>
                    </div>

                    {/* card-5 */}
                    <div className="w-[512px] h-[719px] border border-blue-500 pt-30 flex justify-center relative">
                        <div className="absolute top-0 z-5">
                            <img src={images.p4_img} alt="card image" className="w-[459px] h-[459px] object-cover " />
                            <div className=" text-white/75 mx-15 border">
                                <p className=" text-[38px] ">Sansevieria plant</p>
                                <p className="  text-[22px] leading-7 ">It is a popular indoor plant admired for its striking appearance and low-maintenance nature.</p>
                                <div className="border flex justify-between">
                                    <p className="text-[38px] font-semibold ">Rs. 450/-</p>
                                    <span className="border rounded-[12px] w-[60px] h-[60px] flex items-center justify-center">
                                        <img src={images.bag} alt="shoping bag" className="w-8" />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="border rounded-[50px] border-t-0 border-green-500 w-full mt- [110px] relative flex justify-center h-full overflow-hidden">
                            <div className="border-t border-t-green-500  w-[96px] h-[110px] rounded-tl-[50px] absolute left-0 top-0 "> </div>
                            <div className="border-t border-t-green-500  w-[95px] h-[110px] rounded-tr-[50px] absolute right-0 top-0 "> </div>
                            <div className="w-[900px] h-[900px] border border-green-500 rounded-full absolute -top-[870px] "></div>
                        </div>
                    </div>

                    {/* card-6 */}
                    <div className="w-[512px] h-[719px] border border-blue-500 pt-30 flex justify-center relative">
                        <div className="absolute top-0 z-5">
                            <img src={images.p2_img} alt="card image" className="w-[459px] h-[459px] object-cover " />
                            <div className=" text-white/75 mx-15 border">
                                <p className=" text-[38px] ">Agave plant</p>
                                <p className="  text-[22px] leading-7 ">The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.</p>
                                <div className="border flex justify-between">
                                    <p className="text-[38px] font-semibold ">Rs. 359/-</p>
                                    <span className="border rounded-[12px] w-[60px] h-[60px] flex items-center justify-center">
                                        <img src={images.bag} alt="shoping bag" className="w-8" />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="border rounded-[50px] border-t-0 border-green-500 w-full mt- [110px] relative flex justify-center h-full overflow-hidden">
                            <div className="border-t border-t-green-500  w-[96px] h-[110px] rounded-tl-[50px] absolute left-0 top-0 "> </div>
                            <div className="border-t border-t-green-500  w-[95px] h-[110px] rounded-tr-[50px] absolute right-0 top-0 "> </div>
                            <div className="w-[900px] h-[900px] border border-green-500 rounded-full absolute -top-[870px] "></div>
                        </div>
                    </div>

                </div>




            </div>







        </>
    )
}

export default Home;