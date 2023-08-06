import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";

const Recommendation = () => {
  return (
    <div className=" pt-[50px]   md:pt-[80px]  lg:pt-[120px] pl-[20px] md:pl-[60px] lg:pl-[120px]">
    
      <div className="flex items-center">
        <p className="text-[#F59E0B] bg-[#F59E0B] mr-3 md:mr-4 lg:mr-5 h-[1px] w-[12px] md:w-[22px] lg:w-[32px]"></p>
        <h1 className="text-[#F59E0B] text-[10px]  md:text-[12px] lg:text-[14px] font-[400] md:font-[450] lg:font-[500] ">
          {" "}
          Our Reccommendation
        </h1>
      </div>

      <div className=" px-[25px] md:px-[40px] lg:px-[55px] mr-[6px] md:mr-[8px] lg:mr-[10px] ">
        <div className="flex flex-col md:items-center md:flex-row  gap-x-[15px]  md:gap-x-[35px]   lg:gap-x-[65px]  xl:gap-x-[120px]  2xl:gap-x-[230px]  ">
          <h1 className="text-[#1B1C57] font-[600]  md:font-[650] lg:font-[700] text-[16px]  md:text-[26px] lg:text-[32px] ">
            Featured House
          </h1>

          <div className="flex flex-col  md:flex-row gap-x-[10px]  md:gap-x-[20px]   lg:gap-x-[50px]  xl:gap-x-[100px]  2xl:gap-x-[200px]   justify-between mt-[10px] md:mt-0px">
            <div className="flex gap-x-[12px]  md:gap-x-[22px] lg:gap-x-[32px] ">
              <button
                className="  py-2 md:py-2.5  lg:py-3 px-[8px] md:px-[12px] lg:px-[16px] justify-between   rounded-3xl flex items-center  gap-1  md:gap-2 lg:gap-3 text-[#10B981]  text-[14px]  md:text-[16px] lg:text-[18px] font-[350]  md:font-[450]  lg:font-[500] bg-[#D1FAE5]"
                type="button"
              >
                <img src="/assets/img/House.svg" />
                <span>House</span>
              </button>
              <button
                className=" border border-[#E0E3EB]  py-2 md:py-2.5  lg:py-3 px-[8px] md:px-[12px] lg:px-[16px] justify-between   rounded-3xl flex items-center  gap-1  md:gap-2 lg:gap-3 text-[#888B97]  text-[14px]  md:text-[16px] lg:text-[18px] font-[350]  md:font-[450]  lg:font-[500] bg-white"
                type="button"
              >
                <img src="/assets/img/villa.svg" />
                <span>Villa</span>
              </button>

              <button
                className="  border border-[#E0E3EB]  py-2 md:py-2.5  lg:py-3 px-[8px] md:px-[12px] lg:px-[16px] justify-between   rounded-3xl flex items-center  gap-1  md:gap-2 lg:gap-3 text-[#888B97]  text-[14px]  md:text-[16px] lg:text-[18px] font-[350]  md:font-[450]  lg:font-[500] bg-white"
                type="button"
              >
                <img src="/assets/img/apartment.svg" />
                <span>Apartment</span>
              </button>
            </div>

            <div className="flex  gap-x-[8px] md:gap-x-[12px] lg:gap-x-[16px] mt-[10px] md:mt-0px">
              <button
                className="  border border-[#E0E3EB]  py-2 md:py-3.5  lg:py-3 px-[25px] md:px-[27px] lg:px-[29px]   rounded-full flex items-center      text-[14px]  font-[500] bg-[#E0E3EB]"
                type="button"
              >
                <img
                  className="min-h-[18px]  min-w-[9px]"
                  src="/assets/img/left_arrow.svg"
                />
              </button>

              <button
                className="   border border-[#E0E3EB]  py-2 md:py-3.5  lg:py-3 px-[25px] md:px-[27px] lg:px-[29px]   rounded-full flex items-center    text-[14px]   font-[500] bg-[#10B981]"
                type="button"
              >
                <img
                  className="min-h-[18px]  min-w-[9px]"
                  src="/assets/img/right-white-arrow.svg"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <ScrollContainer className="scroll-container">
      
        <div className=" flex w-full  cursor-pointer   py-[40px]  pl-[25px]  md:pl-[35px] lg:pl-[60px] mr-[5px]  md:mr-[10px] gap-x-[30px]  md:gap-x-[40px] lg:gap-x-[50px]  text-[#0E1735] ">
      
          <div className="relative min-w-[220px]  md:min-w-[260px] lg:min-w-[300px] xl:min-w-[340px]">
            <img src="/assets/img/house_1.svg" />

            <div className=" flex justify-center gap-x-1 absolute w-fit px-[16px]  py-[9px] bg-[#FEE2E2]  bottom-[46%]  md:bottom-[43%] lg:bottom-[37%] xl:bottom-[34%] left-[6%]  rounded-3xl ">
              <img className="" src="/assets/img/popular.svg" />{" "}
              <p className="text-[#EF4444] px-[5px]  font-[500] text-[14px]">
                Popular
              </p>
            </div>

            <div className="py-[24px] font-[500]">
              <h1 className=" text-[19px]  md:text-[24px] ">Roselands House</h1>
              <p className="text-[19px]  md:text-[24px]">$ 35.000.000</p>
            </div>

            <div className="flex ">
              <img className="mr-3" src="/assets/img/dianne.svg" />
              <div className="font-[500]">
                <h1 className="text-[18px] ">Dianne Russell</h1>
                <p className="text-[14px] text-[#888B97]">
                  Manchester, Kentucky
                </p>
              </div>
            </div>
          </div>

          <div className="relative min-w-[220px]  md:min-w-[260px] lg:min-w-[300px] xl:min-w-[340px]">
            <img src="/assets/img/house_2.svg" />

            <div className=" flex justify-center gap-x-1 absolute w-fit px-[16px]  py-[9px] bg-[#DBEAFE]  bottom-[46%]  md:bottom-[43%] lg:bottom-[37%] xl:bottom-[34%] left-[6%]  rounded-3xl ">
              <img className="" src="/assets/img/new_house.svg" />{" "}
              <p className="text-[#1D4ED8] px-[5px]  font-[500] text-[14px]">
                New House
              </p>
            </div>

            <div className="py-[24px] font-[500]">
              <h1 className="text-[19px]  md:text-[24px]">Woodlandside</h1>
              <p className="text-[19px]  md:text-[24px]">$ 20.000.000</p>
            </div>

            <div className="flex ">
              <img className="mr-3" src="/assets/img/robert.svg" />
              <div className="font-[500]">
                <h1 className="text-[18px] ">Rober fox</h1>
                <p className="text-[14px] text-[#888B97]">
                  Dr.San Jose,South Dakata
                </p>
              </div>
            </div>
          </div>

          <div className="relative min-w-[220px]  md:min-w-[260px] lg:min-w-[300px] xl:min-w-[340px]">
            <img src="/assets/img/house_3.svg" />

            <div className=" flex justify-center gap-x-1 absolute w-fit px-[16px]  py-[9px] bg-[#D1FAE5]  bottom-[46%]  md:bottom-[43%] lg:bottom-[37%] xl:bottom-[34%] left-[6%]  rounded-3xl ">
              <img className="" src="/assets/img/best_deal.svg" />{" "}
              <p className="text-[#047857] px-[5px]  font-[500] text-[14px]">
                Best Deals
              </p>
            </div>

            <div className="py-[24px] font-[500]">
              <h1 className="text-[19px]  md:text-[24px]">
                {" "}
                The Old Lighthouse{" "}
              </h1>
              <p className="text-[19px]  md:text-[24px]">$ 44.000.000</p>
            </div>

            <div className="flex ">
              <img className="mr-3" src="/assets/img/ronald.svg" />
              <div className="font-[500]">
                <h1 className="text-[18px] ">Ronald Richards</h1>
                <p className="text-[14px] text-[#888B97]">
                  Santa Ana,Illinois{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="relative min-w-[220px]  md:min-w-[260px] lg:min-w-[300px] xl:min-w-[340px]">
            <img src="/assets/img/house_4.svg" />

            <div className=" flex justify-center gap-x-1 absolute w-fit px-[16px]  py-[9px] bg-[#FEE2E2]  bottom-[46%]  md:bottom-[43%] lg:bottom-[37%] xl:bottom-[34%] left-[6%]  rounded-3xl ">
              <img className="" src="/assets/img/popular.svg" />{" "}
              <p className="text-[#EF4444] px-[5px]  font-[500] text-[14px]">
                Popular
              </p>
            </div>

            <div className="py-[24px] font-[500]">
              <h1 className="text-[19px]  md:text-[24px]">Cosmo's House</h1>
              <p className="text-[19px]  md:text-[24px]">$ 22.000.000 </p>
            </div>

            <div className="flex ">
              <img className="mr-3" src="/assets/img/jenny.svg" />
              <div className="font-[500]">
                <h1 className="text-[18px] "> Jenny Wilson </h1>
                <p className="text-[14px] text-[#888B97]">
                  Preston Rd, IngleWood , Maine 198380
                </p>
              </div>
            </div>
          </div>

          <div className="relative min-w-[220px]  md:min-w-[260px] lg:min-w-[300px] xl:min-w-[340px]">
            <img src="/assets/img/house_1.svg" />

            <div className=" flex justify-center gap-x-1 absolute w-fit px-[16px]  py-[9px] bg-[#FEE2E2]  bottom-[46%]  md:bottom-[43%] lg:bottom-[37%] xl:bottom-[34%] left-[6%]  rounded-3xl ">
              <img className="" src="/assets/img/popular.svg" />{" "}
              <p className="text-[#EF4444] px-[5px]  font-[500] text-[14px]">
                Popular
              </p>
            </div>

            <div className="py-[24px] font-[500]">
              <h1 className="text-[19px]  md:text-[24px]">Roselands House</h1>
              <p className="text-[19px]  md:text-[24px]">$ 35.000.000</p>
            </div>

            <div className="flex ">
              <img className="mr-3" src="/assets/img/dianne.svg" />
              <div className="font-[500]">
                <h1 className="text-[18px] ">Dianne Russell</h1>
                <p className="text-[14px] text-[#888B97]">
                  Manchester, Kentucky
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </ScrollContainer>
    </div>
  );
};

export default Recommendation;
