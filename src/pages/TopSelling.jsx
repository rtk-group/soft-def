
import React from "react";
import { images } from "../assets/images";
import Heading from "../component/Heading";


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


const TopSelling = ()=>{
    
    return(
        <div className="w-full bg-[#1b2316] py-20">
                        {/*top selling plants */}

                        <Heading heading="Our Top Selling Plants" />
        
                        {/* top selling product section */}
                        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 pt-25">
                            {
                                cardsData.map((card, i) => (
        
                                    <div key={i} className="relative h-[400px] lg:w-[512px] lg:h-[644px] flex items-center justify-center">
        
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
                                                className=" w-[300px] h-[300] lg:w-[460px] lg:h-[460px] object-cover absolute -top-15 left-1/2 -translate-x-1/2 -translate-y-12"
                                            />
        
                                            {/* Text Section */}
                                            <div className="px-10 lg:pb-10 pb-3 text-white/75 z-10 lg:mx-10 mb-5">
                                                <p className="text-[30px] lg:text-[38px] leading-none">{card.heading}</p>
        
                                                <p className="text-[15px] lg:text-[22px] lg:leading-7 mt-3 pr-5">{card.description}</p>
        
                                                <div className="flex justify-between items-center lg:mt-3 ">
                                                    <p className="text-[28px] lg:text-[38px] font-semibold">
                                                        Rs. {card.price}/-
                                                    </p>
        
                                                    <span className="border border-2 border-white/30 rounded-[12px] w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] flex items-center justify-center">
                                                        <img
                                                            src={images.bag}
                                                            alt="shopping bag"
                                                            className=" w-5  lg:w-8"
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
    )
}

export default TopSelling;