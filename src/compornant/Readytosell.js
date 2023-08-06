import React from "react";

const Readytosell = () => {
  return (
    <>
      {/* <div className=" absolute  w-[338px] h-[494px]">
          <span className="redytosellfilter1"></span>
          <span className="redytosellfilter2"></span>
          </div> */}
          
      <div className="w-full z-10   flex flex-col gap-[10px]  md:gap-[40px]  lg:gap-[70px]  xl:gap-[100px] md:flex-row justify-between pt-[50px] items-center  md:pt-[80px]  lg:pt-[120px] px-[20px] md:px-[30px] lg:px-[50px] xl:px-[80px]">
        <div className="">
          <div className="flex items-center">
            <p className="text-[#F59E0B] bg-[#F59E0B] mr-3 md:mr-4 lg:mr-5 h-[1px] w-[12px] md:w-[22px] lg:w-[32px]"></p>
            <h1 className="text-[#F59E0B] text-[10px]  md:text-[12px] lg:text-[14px] font-[400] md:font-[450] lg:font-[500] ">
              {" "}
              Ready to Sell!
            </h1>
          </div>

          <div className=" px-[25px] md:px-[40px] lg:px-[55px] mr-[6px] md:mr-[8px] lg:mr-[10px] ">
            <h1 className="text-[#1B1C57] font-[600]  md:font-[650] lg:font-[700] text-[24px]  md:text-[28px] lg:text-[32px] ">
              Let’s tour and see our house!
            </h1>

            <div className=" text-[12px] md:text-[14px]  lg:text-[16px] py-[4px]  md:py-[8px]  lg:py-[12px] text-[#626687] font-[250]  md:font-[350]  lg:font-[400] ">
              <p>
                Houses recommended by our partners that have been curated to
                become the home of your dreams!
              </p>
              {/* <p>
            </p> */}
            </div>

            <div className="">
              <p className=" font-[500]  md:font-[550] lg:font-[600] text-[12px]  md:text-[14px]  lg:text-[16px] text-[#1B1C57]">
                House Detail
              </p>

              <div className="flex mt-[16px] gap-x-4 md:gap-x-8  lg:gap-x-12">
                <div className="flex items-center gap-x-3 md:gap-x-4 lg:gap-x-5">
                  <img className=" w-[25px]  md:w-[30px]" src="/assets/img/bedroom.svg" />

                  <p className="text-[#3C4563] text-[12px] md:text-[14px]  lg:text-[16px] font-[499]  md:font-[549] lg:font-[599]  ">
                    4 Bedrooms{" "}
                  </p>
                </div>

                <div className="flex items-center gap-x-3 md:gap-x-4 lg:gap-x-5">
                  <img className="w-[25px]  md:w-[30px]" src="/assets/img/bathroom.svg" />

                  <p className="text-[#3C4563] text-[12px] md:text-[14px]  lg:text-[16px] font-[499]  md:font-[549] lg:font-[599] ">
                    2 Bathrooms{" "}
                  </p>
                </div>
              </div>

              <div className="flex mt-[16px] gap-x-[30px]  md:gap-x-[50px]  lg:gap-x-[60px] pb-[46px]">
                
                <div className="flex items-center gap-x-3 md:gap-x-4 lg:gap-x-5">
                  <img className="w-[25px]  md:w-[30px]" src="/assets/img/carport.svg" />

                  <p className="text-[#3C4563] text-[12px] md:text-[14px]  lg:text-[16px] font-[499]  md:font-[549] lg:font-[599] ">
                    1 Carport{" "}
                  </p>
                </div>

                <div className="flex items-center gap-x-3 md:gap-x-4 lg:gap-x-5">
                  <img className="w-[25px]  md:w-[30px]" src="/assets/img/floor.svg" />

                  <p className="text-[#3C4563] text-[12px] md:text-[14px]  lg:text-[16px] font-[499]  md:font-[549] lg:font-[599] ">
                    2 Floors{" "}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 py-5 md:gap-4 lg:gap-5">
                <img className=" w-[30px]  md:w-[35px]  lg:w-[40px]" src="/assets/img/dianne.svg" />

                <div className="font-[500] pr-[10px] md:pr-[40px] lg:pr-[59px]">
                  <h1 className=" text-[10px]  md:text-[14px] lg:text-[18px] ">Dianne Russell</h1>
                  <p className=" text-[8px] md:text-[10px] pg:text-[14px] text-[#888B97]">Manager Director</p>
                </div>

                <button
                  className="  py-2 md:py-2.5  lg:py-3 px-[8px] md:px-[12px] lg:px-[16px] justify-between   rounded-3xl flex items-center  gap-1  md:gap-3 lg:gap-5 text-white  text-[8px]  md:text-[12px] lg:text-[16px] font-[450]  md:font-[550]  lg:font-[600] right-[4px]  top-[4px] md:top-[5px] lg:top-[6px] bg-[#10B981]"
                  type="button"
                >
                  <img className="" src="/assets/img/contact.svg" />
                  <span>Contact Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" pb-[35px]   md:pb-[44px] lg:pb-[50px] relative">
          <img
            className="  w-[250px]   md:w-[388px] z-10   lg:w-[400px] xl:w-[488px]  "
            src="/assets/img/readytosell_1.svg"
          />
          
        <div className="absolute z-20 flex gap-1 lg:-left-10 md:-left-8 -left-5 lg:bottom-5 md:bottom-4 bottom-3">
        <img
            className="w-[140px] md:w-[200px] lg:w-[256px]  xl:w-[286px]   "
            src="/assets/img/readytosell_2.svg"
          />
        
          <div className="flex items-end gap-1">
            <img className=" w-[46px] md:w-[56px] lg:w-[66px] xl:w-[76px] " src="/assets/img/readytosell_3.svg" />
            <img className="  w-[46px] md:w-[56px] lg:w-[66px] xl:w-[76px]" src="/assets/img/readytosell_4.svg" />
          </div>
        </div>
       
      
        </div>
      </div>
    </>
  );
};

export default Readytosell;
