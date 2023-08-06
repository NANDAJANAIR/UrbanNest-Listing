import React from "react";

const Subscribe = () => {
  return (
    <div className=" relative  my-[50px]   md:my-[80px]   lg:my-[120px]  mx-[20px]   md:mx-[30px]  lg:mx-[50px]  xl:mx-[80px]">
      <img className="w-full object-cover rounded-lg  min-h-[312px]" src="/assets/img/bg_sub.svg" />

       <img
        className=" hidden md:flex   min-w-[55px]  md:min-w-[65px]  lg:min-w-[75px] xl:min-w-[85px] absolute top-[15%] left-[5%]"
        src="/assets/img/sub_1.svg"
      />
      <img
        className=" hidden md:flex min-w-[64px] md:min-w-[74px] lg:min-w-[84px] xl:min-w-[104px] absolute top-[60%] left-[5%]"
        src="/assets/img/sub_2.svg"
      />
      <img
        className=" hidden md:flex min-w-[64px] md:min-w-[74px] lg:min-w-[84px] xl:min-w-[104px] absolute top-[15%] left-[15%]"
        src="/assets/img/sub_3.svg"
      />
      <img
        className=" hidden md:flex min-w-[32px]  md:min-w-[40px] lg:min-w-[50px]  xl:min-w-[58px] absolute top-[65%] left-[15%] "
        src="/assets/img/sub_4.svg"
      /> 

      <div className="  absolute   top-[30%] left-[15%] md:left-[35%] ">
      
      
      <div className="flex flex-col text-center " >
      
        <h1 className="text-[#1B1C57] xl:font-[700] lg:font-[600] md:font-[500] font-[400] text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] leading-[32px]  md:leading-[38px] lg:leading-[42px] xl:leading-[48px]	">
          Subscribe For More Info
        </h1>
        <h1 className="text-[#1B1C57] xl:font-[700] lg:font-[600] md:font-[500] font-[400] text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] leading-[32px]  md:leading-[38px] lg:leading-[42px] xl:leading-[48px]">
          And Update From Hounter
        </h1>
</div>

        <div className="  mt-[15px] md:mt-[20px] lg:mt-[26px] xl:mt-[31px] flex items-center justify-center   gap-[8px] md:gap-[12px]  lg:gap-[16px] relative ">
          <img
            className="absolute left-3   md:left-4   lg:left-5    top-[11px]  md:top-[16px] lg:top-[22px] "
            src="/assets/img/email.svg"
          />

          <input
            className="  py-[6px] md:py-[11px]  lg:py-[17px] px-[35px]  md:px-[45px] lg:px-[56px] w-[100%] border rounded-3xl border-[#E0E3EB]"
            placeholder="Your email here "
            type="text"
          />

          <button
            className="absolute  py-2 md:py-2.5  lg:py-3 px-[8px] md:px-[12px] lg:px-[16px] justify-between   rounded-3xl flex items-center  gap-3  md:gap-4 lg:gap-5 text-white  text-[10px]  md:text-[12px] lg:text-[14px] font-[450]  md:font-[550]  lg:font-[600] right-[4px]  top-[4px] md:top-[5px] lg:top-[7px] bg-[#10B981]"
            type="button"
          >
            <span>Subscribe Now</span>
          </button>
        </div>
        
      </div>

       <img
        className=" hidden md:flex min-w-[44px]  md:min-w-[54px]  lg:min-w-[64px] xl:min-w-[74px] absolute top-[15%] right-[15%]"
        src="/assets/img/sub_5.svg"
      />
      <img
        className="hidden md:flex min-w-[64px] md:min-w-[74px] lg:min-w-[84px] xl:min-w-[104px] absolute top-[40%] right-[13%] "
        src="/assets/img/sub_6.svg"
      />
      <img
        className="hidden md:flex  min-w-[64px] md:min-w-[74px] lg:min-w-[84px] xl:min-w-[104px] absolute top-[15%] right-[5%]"
        src="/assets/img/sub_7.svg"
      />
      <img
        className="hidden md:flex  min-w-[59px] absolute top-[65%] right-[5%] "
        src="/assets/img/sub_8.svg"
      />
    </div>

  );
};

export default Subscribe;
