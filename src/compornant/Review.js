import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Review = () => {
  
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: true,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1.5,
      },
      400: {
        items: 1.5,
      },
      600: {
        items: 2.5,
      },
      700: {
        items: 2.5,
      },
      1000: {
        items: 2.5,
      },
      1880: {
        items: 2.5,
      },
    },
  };

  return (
    <div className="flex flex-col py-[40px]  md:py-[60px]  lg:py-[80px] xl:py-[100px] ">
      <div className="flex flex-col items-center text-center ">
        <p className="text-[#F59E0B]  bg-[#F59E0B] mr-3 md:mr-4 lg:mr-5 h-[1px] w-[12px] md:w-[22px] lg:w-[32px]"></p>
        <h1 className="text-[#F59E0B] text-[10px] pt-1  md:text-[12px] lg:text-[14px] font-[400] md:font-[450] lg:font-[500] ">
          {" "}
          See Our Review
        </h1>
        <h1 className="text-[#1B1C57] font-[500]  md:font-[600] lg:font-[700] text-[20px]  md:text-[25px] lg:text-[32px] ">
          What Our User Say About Us
        </h1>
      </div>

    
      <OwlCarousel className="mt-10 owl-theme" {...options} loop margin={10} nav>
      
        <div className="relative w-fit  h-[400px] md:h-[455px]  lg:h-[455px]  xl:h-[505px] ">
          <div className="w-fit">
            <img className="" src="/assets/img/review_1.svg" />
          </div>
          <div className="absolute -bottom-[15]  md:-bottom-[3] lg:-bottom-[1] xl:bottom-[0] ">
          
            <div className=" flex flex-col p-2  md:p-4 lg:p-5 xl:p-8 bg-white rounded-2xl w-[100%]  md:w-[95%] lg:w-[90%] mx-auto">
              <div className=" mb-2 md:mb-3 lg:mb-4  text-sm  md:text-base  lg:text-lg xl:text-xl font-semibold text-[#1B1C57] leading-[25px]">
                <h3>Best! I got the house I wanted through Hounter</h3>
              </div>
              <div className="mb-2 lg:mb-6 md:mb-4">
                <p className="text-xs md:text-sm text-[#626687]">
                  Through this website I can get a house with the type and
                  specifications I want very easily, without a complicated
                  process to be able to find information on the house we want.
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex">
                  <div className="mr-2 md:mr-4 lg:mr-6">
                    <img className="" src="/assets/img/dianne.svg" />
                  </div>
                  <div className="flex flex-col text-xs font-normal md:font-medium md:text-sm">
                    <p className="text-[#0E1735]">Dianne Russell</p>
                    <p className="text-[#888B97]">Manager Director</p>
                  </div>
                </div>
                <div className="flex items-end">
                  <div className="mr-2 md:mr-3 lg:mr-4">
                    <img className="" src="/assets/img/star.svg" />
                  </div>
                  <span>4.6</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-fit  h-[400px] md:h-[455px]  lg:h-[455px]  xl:h-[505px] ">
          <div className="w-fit">
            <img className="" src="/assets/img/review_2.svg" />
          </div>
          <div className="absolute -bottom-[15]  md:-bottom-[3] lg:-bottom-[1] xl:bottom-[0] ">
          
            <div className=" flex flex-col p-2  md:p-4 lg:p-5 xl:p-8 bg-white rounded-2xl w-[100%]  md:w-[95%] lg:w-[90%] mx-auto">
              <div className=" mb-2 md:mb-3 lg:mb-4  text-sm  md:text-base  lg:text-lg xl:text-xl font-semibold text-[#1B1C57] leading-[25px]">
                <h3>Best! I got the house I wanted through Hounter</h3>
              </div>
              <div className="mb-2 lg:mb-6 md:mb-4">
                <p className="text-xs md:text-sm text-[#626687]">
                  Through this website I can get a house with the type and
                  specifications I want very easily, without a complicated
                  process to be able to find information on the house we want.
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex">
                  <div className="mr-2 md:mr-4 lg:mr-6">
                    <img className="" src="/assets/img/dianne.svg" />
                  </div>
                  <div className="flex flex-col text-xs font-normal md:font-medium md:text-sm">
                    <p className="text-[#0E1735]">Dianne Russell</p>
                    <p className="text-[#888B97]">Manager Director</p>
                  </div>
                </div>
                <div className="flex items-end">
                  <div className="mr-2 md:mr-3 lg:mr-4">
                    <img className="" src="/assets/img/star.svg" />
                  </div>
                  <span>4.6</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
  <div className="relative w-fit  h-[400px] md:h-[455px]  lg:h-[455px]  xl:h-[505px] ">
          <div className="w-fit">
            <img className="" src="/assets/img/review_3.svg" />
          </div>
          <div className="absolute -bottom-[15]  md:-bottom-[3] lg:-bottom-[1] xl:bottom-[0] ">
          
            <div className=" flex flex-col p-2  md:p-4 lg:p-5 xl:p-8 bg-white rounded-2xl w-[100%]  md:w-[95%] lg:w-[90%] mx-auto">
              <div className=" mb-2 md:mb-3 lg:mb-4  text-sm  md:text-base  lg:text-lg xl:text-xl font-semibold text-[#1B1C57] leading-[25px]">
                <h3>Best! I got the house I wanted through Hounter</h3>
              </div>
              <div className="mb-2 lg:mb-6 md:mb-4">
                <p className="text-xs md:text-sm text-[#626687]">
                  Through this website I can get a house with the type and
                  specifications I want very easily, without a complicated
                  process to be able to find information on the house we want.
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex">
                  <div className="mr-2 md:mr-4 lg:mr-6">
                    <img className="" src="/assets/img/dianne.svg" />
                  </div>
                  <div className="flex flex-col text-xs font-normal md:font-medium md:text-sm">
                    <p className="text-[#0E1735]">Dianne Russell</p>
                    <p className="text-[#888B97]">Manager Director</p>
                  </div>
                </div>
                <div className="flex items-end">
                  <div className="mr-2 md:mr-3 lg:mr-4">
                    <img className="" src="/assets/img/star.svg" />
                  </div>
                  <span>4.6</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </OwlCarousel>
    </div>
  );
};

export default Review;
