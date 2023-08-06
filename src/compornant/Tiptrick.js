import React from "react";

const Tiptrick = () => {
  return (
    <div className="flex flex-col justify-between   px-[20px]   md:px-[30px]  lg:px-[50px]  xl:px-[80px]">
    
      <div className="flex flex-col  items-center text-center my-[24px]">
        <p className="text-[#F59E0B]  bg-[#F59E0B] mr-3 md:mr-4 lg:mr-5 h-[1px] w-[12px] md:w-[22px] lg:w-[32px]"></p>
        <h1 className="text-[#F59E0B] text-[10px] pt-1  md:text-[12px] lg:text-[14px] font-[400] md:font-[450] lg:font-[500] ">
          {" "}
          See tips and trick from our partnership
        </h1>
        <h1 className="text-[#1B1C57] py-[12px] font-[500]  md:font-[600] lg:font-[700] text-[20px]  md:text-[25px] lg:text-[32px] ">
          Find out more about selling and buying homes{" "}
        </h1>

        <button
          className="  py-2 md:py-2.5  lg:py-3 px-[8px] md:px-[12px] lg:px-[16px] justify-between   rounded-3xl flex items-center  gap-1  md:gap-3 lg:gap-5 text-white  text-[8px]  md:text-[12px] lg:text-[16px] font-[450]  md:font-[550]  lg:font-[600] right-[4px]  top-[4px] md:top-[5px] lg:top-[6px] bg-[#10B981]"
          type="button"
        >
          <span>More Artikel</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 h-fit   lg:flex-row  text-[#1B1C57]     ">
      
        <div className=" flex flex-col  xl:gap-y-[42px]  lg:gap-y-[35px]  md:gap-y-[25px] gap-y-[15px]">
        
          <div className="flex  flex-col gap-y-3.5 md:flex-row  gap-x-[18px]  md:gap-x-[25px] lg:gap-x-[32px] ">
            <div  className="">
            
              <img
                className="min-w-[200px] h-[144px]"
                src="/assets/img/tando_1.svg"
              />
            </div>
            <div className="flex flex-col  gap-y-[8px] md:gap-y-[10px]  lg:gap-y-[12px] ">
              <di className="flex items-center  gap-x-[10px]  md:gap-x-[13px]  lg:gap-x-[16px] justify-start">
                <img className="" src="/assets/img/dianne.svg" />
                <p className="font-[400] text-[10px]  md:text-[12px] lg:text-[14px]  ">Dianne Russell</p>
              </di>
              <h1 className="font-[500] text-[12px]  md:text-[15px] lg:text-[18px]  " >
                The things we need to check when we want to buy a house
              </h1>
              <di className="flex gap-x-[8px]  md:gap-x-[10px]  lg:gap-x-[12px] text-[#888B97] ">
                <img className="" src="/assets/img/clock.svg" />
                <p className="font-[400px] text-[10px]  md:text-[12px]  lg:text-[14px] ">
                  4 min read | 25 Apr 2021            
                </p>
              </di>
            </div>
          </div>

          <div className="flex flex-col gap-y-3.5 md:flex-row  gap-x-[18px]  md:gap-x-[25px] lg:gap-x-[32px] ">
            <div  className="">
              {" "}
              <img
                className="min-w-[200px] h-[144px]"
                src="/assets/img/tando_2.svg"
              />
            </div>   
            <div className="flex flex-col  gap-y-[8px] md:gap-y-[10px]  lg:gap-y-[12px] ">
              <di className="flex items-center  gap-x-[10px]  md:gap-x-[13px]  lg:gap-x-[16px] justify-start">
                <img className="" src="/assets/img/dianne.svg" />
                <p className="font-[400] text-[10px]  md:text-[12px] lg:text-[14px]  ">Dianne Russell</p>
              </di>
              <h1 className="font-[500] text-[12px]  md:text-[15px] lg:text-[18px]  " >
                The things we need to check when we want to buy a house
              </h1>
              <di className="flex gap-x-[8px]  md:gap-x-[10px]  lg:gap-x-[12px] text-[#888B97] ">
                <img className="" src="/assets/img/clock.svg" />
                <p className="font-[400px] text-[10px]  md:text-[12px]  lg:text-[14px] ">
                  4 min read | 25 Apr 2021            
                </p>
              </di>
            </div>
          </div>

          <div className="flex flex-col gap-y-3.5 md:flex-row  gap-x-[18px]  md:gap-x-[25px] lg:gap-x-[32px] ">
            <div  className="">
              {" "}
              <img
                className="min-w-[200px] h-[144px]"
                src="/assets/img/tando_3.svg"
              />
            </div>
            <div className="flex flex-col  gap-y-[8px] md:gap-y-[10px]  lg:gap-y-[12px] ">
              <di className="flex items-center  gap-x-[10px]  md:gap-x-[13px]  lg:gap-x-[16px] justify-start">
                <img className="" src="/assets/img/dianne.svg" />
                <p className="font-[400] text-[10px]  md:text-[12px] lg:text-[14px]  ">Dianne Russell</p>
              </di>
              <h1 className="font-[500] text-[12px]  md:text-[15px] lg:text-[18px]  " >
                The things we need to check when we want to buy a house
              </h1>
              <di className="flex gap-x-[8px]  md:gap-x-[10px]  lg:gap-x-[12px] text-[#888B97] ">
                <img className="" src="/assets/img/clock.svg" />
                <p className="font-[400px] text-[10px]  md:text-[12px]  lg:text-[14px] ">
                  4 min read | 25 Apr 2021            
                </p>
              </di>
            </div>
          </div>

        </div>

        <div className="flex flex-col items-end w-full pt-10 md:pt-0">
          
          <div className="flex w-[100%]   md:w-[30%]  lg:w-[45%]  xl:w-[65%]" >
          <img className="" src="/assets/img/tando_4.svg" />
          </div>
            
          <div className="flex flex-col gap-y-[12px] mt-6 w-[100%]   md:w-[30%]  lg:w-[45%]  xl:w-[65%]">
            <di className="flex  items-center gap-x-[16px] ">
              <img className="" src="/assets/img/dianne.svg" />
              <p className="font-[400] text-[14px]">Cameron Williamson </p>
            </di>

            <h1 className=" font-[400] py-[12px] text-[14px] text-[#626687]">
            Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house
            </h1>

            <di className="flex  gap-x-[12px] text-[#888B97] ">
              <img className="" src="/assets/img/clock.svg" />
              <p className="font-[400px] text-[14px] ">
                8 min read | 25 Apr 2021
              </p>
            </di>
          </div>
        </div>
        
      </div>
       
    </div>
  );
};

export default Tiptrick;
