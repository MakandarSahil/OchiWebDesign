import React from "react";
import { MdArrowOutward } from "react-icons/md";

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="font-['textStruct']  mt-32 xl:mt-42 px-6 md:px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => (
          <div key={index} className="masker">
            <div className="w-fit flex items-baseline">
              {
                index === 1 && (
                  <div className="w-[54px] h-[38px] md:w-[90px] md:h-[60px] lg:w-[120px] lg:h-[85px] mr-2 rounded-[8px] lg:rounded-xl bg-red-500"> </div>
                )
              }
              <h1 className="font-['textStruct'] uppercase text-5xl md:text-8xl lg:text-9xl leading-[48px] md:leading-[95px] font-semibold">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-56 md:mt-30 xl:mt-38 flex flex-col xl:flex-row gap-6 xl:items-center items-start justify-between px-4 py-8 xl:px-14 xl:py-4">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-[16px] xl:text-lg font-light leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-3">
          <div className="px-10 py-1 border-[2px] border-zinc-500 uppercase rounded-full text-[12px] xl:text-[15px]">
            start the project
          </div>
          <div className="border-[2px] border-zinc-500 p-1 rounded-full">
            <MdArrowOutward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
