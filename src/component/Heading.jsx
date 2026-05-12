import React from "react";

const Heading = (props) => {
    return(
        <div className="w-full flex items-center justify-center px-4 py-8 sm:py-15 lg:py-25">
  <div className="relative inline-flex items-center justify-center">
    
    {/* Left Corner */}
    <span className="absolute left-[4px] top-[8px] sm:left-[10px] sm:top-3 md:left-[5px] md:top-4 
      w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14
      border-l-[4px] border-b-[4px] md:border-l-[5px] md:border-b-[5px]
      border-[#FBD300]/50 rounded-bl-2xl">
    </span>

    {/* Heading */}
    <p className="text-white font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-[55px] text-center px-6 sm:px-8">
      {props.heading}
    </p>

    {/* Right Corner */}
    <span className="absolute right-[3px] top-[-3px] sm:right-[12px] sm:top-[-2px] md:right-[5px] md:top-0
      w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14
      border-r-[4px] border-t-[4px] md:border-r-[5px] md:border-t-[5px]
      border-[#FBD300]/50 rounded-tr-2xl">
    </span>

  </div>
</div>
    )
}

export default Heading;