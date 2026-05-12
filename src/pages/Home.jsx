import React from "react";
import { images } from "../assets/images";
import { FaPlay } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";


const cardsData = [
    {
        image: `${images.card_img}`,
        heading: "Earth’s Exhale",
        description: "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care",
        price: 300,
    },
    {
        image: `${images.card1_img}`,
        heading: "Plantain Lilies",
        description: "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,",
        price: 380,
    },
    {
        image: `${images.p1_img}`,
        heading: "Cactus",
        description: "It is known for their ability to thrive in arid environments",
        price: 259,
    },
    {
        image: `${images.p3_img}`,
        heading: "Earth’s Exhale",
        description: "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care",
        price: 300,
    },
    {
        image: `${images.p4_img}`,
        heading: "Plantain Lilies",
        description: "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,",
        price: 380,
    },
    {
        image: `${images.p2_img}`,
        heading: "Cactus",
        description: "It is known for their ability to thrive in arid environments",
        price: 259,
    }
]


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





const Home = () => {
    return (
        <>
            <div className="w-full h-[2592px] relative">
                <img src={images.home_bg} alt="background image" className="w-full h-full object-cover absolute -z-1" />

                <div className=" px-5 flex w-full pt-[360px]">
                    {/* left side section */}
                    <div className="w-[50%] flex flex-col gap-45 text-[#FFFFFF] ">
                        {/* box-1 */}
                        <div className="">
                            <p className="text-[118px] font-semibold leading-35">Earth’s Exhale</p>
                            <p className="text-[23px] font-medium ">"Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.</p>
                            <div className=" flex mt-4 gap-5 items-center">
                                <button className="border border-2 h-[64px] rounded-[12px] text-[28px] font-regular w-[217px] hover:bg-white hover:text-black duration-300 cursor-pointer">Buy Now</button>
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

                        <div className="relative w-[550px] h-[644px] flex items-center justify-center">

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

                            {/* Content */}
                            <div className="relative w-full h-full flex flex-col items-center justify-end">

                                {/* Product Image */}
                                <img
                                    src={images.card_img}
                                    alt="Sansevieria plant"
                                    className="w-[460px] h-[460px] object-cover absolute -top-10 left-1/2 -translate-x-1/2 -translate-y-12"
                                />

                                {/* Text Section */}
                                <div className=" text-white/75 z-10 mx-10 mb-20">
                                    <div className=" text-[#FFFFFF] mx-15">
                                        <p className=" font-regular text-[23px] ">Indoor Plant</p>
                                        <p className=" font-regular text-[38px] ">Aglaonema plant
                                        </p>
                                        <button className="cursor-pointer hover:bg-white hover:text-black duration-300 w-[217px] h-[64px] text-[28px] border rounded-[12px] mt-3"> Buy Now </button>
                                    </div>
                                </div>


                                {/* navigator button */}
                                <div className="text-[#FFFFFF] text-[20px] absolute mr-8 right-15 bottom-42">
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
            <div className="w-full bg-[#1b2316] py-20">
                {/*top selling plants */}
                <div className="w-full flex items-center justify-center mb-[120px]">
                    <div className=" flex relative text-[55px] font-semibold text-[#FFFFFF] ">
                        <span className="absolute -left-3 top-4 w-[61.5px] h-[63px] border-l-5 border-b-5 border-b-[#FBD300]/50 border-l-[#FBD300]/50 rounded-bl-2xl"></span>
                        <p className="">Our Top Selling Plants</p>
                        <span className="absolute -right-3 top-4 rounded-tr-2xl w-[61.5px] h-[63px]  border-r-5 border-t-5 border-t-[#FBD300]/50 border-r-[#FBD300]/50 "></span>
                    </div>
                </div>

                {/* top selling product section */}
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20">
                    {
                        cardsData.map((card, i) => (

                            <div key={i} className="relative w-[512px] h-[644px] flex items-center justify-center">

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

                                {/* Content */}
                                <div className="relative w-full h-full flex flex-col items-center justify-end">

                                    {/* Product Image */}
                                    <img
                                        src={card.image}
                                        alt="Sansevieria plant"
                                        className="w-[460px] h-[460px] object-cover absolute -top-15 left-1/2 -translate-x-1/2 -translate-y-12"
                                    />

                                    {/* Text Section */}
                                    <div className="px-10 pb-10 text-white/75 z-10 mx-10 mb-5">
                                        <p className="text-[38px] leading-none">{card.heading}</p>

                                        <p className="text-[22px] leading-7 mt-3 pr-5">{card.description}</p>

                                        <div className="flex justify-between items-center mt-3 ">
                                            <p className="text-[38px] font-semibold">
                                                Rs. {card.price}/-
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
                            </div>
                        ))
                    }
                </div>
            </div>





            {/* section three */}
            <div className=" w-full bg-[#1b2316] py-20">
                {/*Customer Review heacing */}
                <div className="w-full flex items-center justify-center mb-[120px]">
                    <div className=" flex relative text-[55px] font-semibold text-[#FFFFFF] ">
                        <span className="absolute -left-3 top-4 w-[61.5px] h-[63px] border-l-5 border-b-5 border-b-[#FBD300]/50 border-l-[#FBD300]/50 rounded-bl-2xl"></span>
                        <p className="">Customer Review</p>
                        <span className="absolute -right-3 top-4 rounded-tr-2xl w-[61.5px] h-[63px]  border-r-5 border-t-5 border-t-[#FBD300]/50 border-r-[#FBD300]/50 "></span>
                    </div>
                </div>
                {/* customer cards */}
                <div className=" grid grid-cols-1 lg:grid-cols-3">
                    {
                        customerData.map((cus, i) => (
                            <div className="b w-[512px] h-[480px] flex flex-col items-center p-15 relative">
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
                                <div className="flex gap-6 my-10">
                                    <img src={cus.image} alt="customer image" className="w-[88px] h-[88px] object-cover rounded-full " />
                                    <div className="text-[38px] font-semibold text-white">
                                        <p className=" "> {cus.name} </p>
                                        <span className="flex text-[16px] text-[#FFF84E] gap-2">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStarHalf />
                                        </span>
                                    </div>
                                </div>
                                <p className="text-[24px] text-white/75 leading-[30px] mt-5 px-4"> {cus.description} </p>
                            </div>
                        ))
                    }
                </div>
            </div>


            {/* fourth section */}
            <div className="bg-[#1b2316] px-15 py-20">
                {/* our best heading */}
                <div className="w-full flex items-center justify-center mb-[120px]">
                    <div className=" flex relative text-[55px] font-semibold text-[#FFFFFF] ">
                        <span className="absolute -left-3 top-4 w-[61.5px] h-[63px] border-l-5 border-b-5 border-b-[#FBD300]/50 border-l-[#FBD300]/50 rounded-bl-2xl"></span>
                        <p className="">Our Best o2</p>
                        <span className="absolute -right-3 top-3 rounded-tr-2xl w-[61.5px] h-[63px]  border-r-5 border-t-5 border-t-[#FBD300]/50 border-r-[#FBD300]/50 "></span>
                    </div>
                </div>
                {/* our product card */}
                <div className=" flex justify-end  h-[755px] rounded-[92px] glass-effect  relative">
                    {/* product image */}
                    <img src={images.card_img} alt="Product image" className="w-[877px] h-[877px] object-cover absolute -left-20 -top-30" />
                    {/* right side section */}
                    <div className=" w-1/2 text-white/75 py-30 px-20">
                        <p className="text-[38px] font-semibold leading-[40px] "> We Have Small And Best O2 Plants Collection’s</p>
                        <p className="font-semibold text-[28px] leading-[30px] my-10">Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.</p>
                        <p className="font-semibold text-[28px] leading-[30px]">Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.</p>
                        <div className="flex justify-between mt-5">
                            <button className="w-[217px] h-[64px] text-[28px] border rounded-[12px] hover:bg-white hover:text-black cursor-pointer duration-300">Explore</button>
                            <div className=" flex w-[150px] items-center justify-between">
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
        </>
    )
}

export default Home;
