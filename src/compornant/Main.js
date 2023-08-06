import React from "react";
import { motion } from "framer-motion"
import './main.css'



const Main = () => {
  return (
    
    <div className="flex justify-between  gap-x-[14px]  md:gap-x-[84px]   lg:gap-x-[104px] px-[20px] md:px-[0px] md:pl-[60px] lg:pl-[120px]">
      <div className="  mt-[102px]   md:mt-[152px]  lg:mt-[182px] text-left  text-[#1B1C57]">
    
      

      
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      
    

        // <h1 className="  font-[500]  md:font-[600]  lg:font-[700]  text-[20px]  md:text-[30px] lg:text-[40px] ">
        //   Find The Place To
        // </h1>
        <div className="flex gap-1 md:gap-2 lg:gap-3 ">
          <h1 className=" font-[500]  md:font-[600]  lg:font-[700]  text-[20px]  md:text-[30px] lg:text-[40px] ">
            Live
          </h1>
          <h1 className="   font-[500]  md:font-[600]  lg:font-[700]  text-[20px]  md:text-[30px] lg:text-[40px]  bdr">
            Your Dreams
          </h1>
        </div>
        <h1 className=" font-[500]  md:font-[600]  lg:font-[700]  text-[20px]  md:text-[30px] lg:text-[40px]  ">
          Easily Here
        </h1>

        <p className=" text-[12px] md:text-[14px]  lg:text-[16px] py-[12px]  md:py-[22px]  lg:py-[32px] text-[#626687] font-[250]  md:font-[350]  lg:font-[400] ">
          Everything you need about finding your place to live will be here,
          where it will be easier for you
        </p>

        <div className="flex  gap-[8px] md:gap-[12px]  lg:gap-[16px] relative ">
          <img
            className="absolute left-3   md:left-4   lg:left-5    top-[8px]  md:top-[14px] lg:top-[19px] "
            src="/assets/img/location.svg"
          />

          <input
            className="  py-[6px] md:py-[11px]  lg:py-[17px] px-[35px]  md:px-[45px] lg:px-[56px] w-[100%] border rounded-3xl border-[#E0E3EB]"
            placeholder="Search the location you want!"
            type="text"
          />

          <button
            className="absolute  py-2 md:py-2.5  lg:py-3 px-[8px] md:px-[12px] lg:px-[16px] justify-between   rounded-3xl flex items-center  gap-3  md:gap-4 lg:gap-5 text-white  text-[8px]  md:text-[12px] lg:text-[16px] font-[450]  md:font-[550]  lg:font-[600] right-[4px]  top-[4px] md:top-[5px] lg:top-[6px] bg-[#10B981]"
            type="button"
          >
            <span>Search</span>
            <img className="" src="/assets/img/right-arrow.svg" />
          </button>
        </div>

        <p className=" text-[12px] md:text-[14px]  lg:text-[16px] py-[12px]  md:py-[22px] lg:py-[20px] text-[#626687]  font-[200]  md:font-[300] lg:font-[400] ">
          Our Partnership
        </p>

        <div className=" flex  flex-col  md:flex-row  gapx-x[12px]  md:gap-x-[22px]  lg:gap-x-[32px] items-center">
          <div className="flex gap-[12px]  md:gap-[15px]  lg:gap-[22px]   items-center">
            <img className="" src="/assets/img/traveloka_logo.svg" />
            <img className="" src="/assets/img/tiket.svg" />
          </div>
          <div className="flex gap-[12px]  md:gap-[15px]  lg:gap-[22px]  items-center">
            <img className="" src="/assets/img/airbnd.svg" />
            <img className="" src="/assets/img/tripadvisor.svg" />
          </div>
        </div>
      </div>

      <div className="relative hidden overflow-hidden md:block">
        <img src="/assets/img/home.png" />

      </div>
    </div>
  );
};

export default Main;
