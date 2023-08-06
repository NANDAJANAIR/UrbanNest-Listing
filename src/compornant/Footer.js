import React from "react";

const Footer = () => {
  return (
    <div className=" flex  flex-col md:flex-row justify-between my-[120px]  mx-[20px]  md:mx-[30px]  lg:mx-[50px]  xl:mx-[80px]">
      <div className="">
        <div className="flex items-center gap-3">
          <img src="/assets/img/logo.svg" />
          <h1 className="font-[700] text-[16px]"> UrbanNest Listing </h1>
        </div>
        <p className="text-[#626687] w-[320px] py-5 text-[14px] font-[400]">
          {" "}
          We provide information about properties such as houses, villas and
          apartments to help people find their paradise for living!!!!
        </p>
        <div className="flex gap-5">
          <img src="/assets/img/fb.svg" />
          <img src="/assets/img/twt.svg" />
          <img src="/assets/img/insta.svg" />
        </div>
      </div>
      <div class=" flex  flex-col  justify-between sm:flex-row  gap-5 xl:gap-14 lg:gap-10 md:gap-8  mt-8  md:mt-0">
        <div>
          <h2 class="mb-6   font-[600]  text-[18px]	     text-[#0E1735]  uppercase ">
            Property
          </h2>
          <ul class="text-[#8E8E8E]">
            <li class="mb-4   font-[400] text-[14px] ">
             
                Duplex
              
            </li>
            <li className=" mb-6 font-[400] text-[14px] ">
              
                Apartment
              
            </li>

            <li class="mb-4  font-[400] text-[14px] ">
              
                Villa
            
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6   font-[600]  text-[18px] text-[#0E1735]">Article</h2>
          <ul class="text-[#8E8E8E]  font-[400] text-[14px]">
            <li class="mb-4">
              
                New Article
              
            </li>
            <li class="mb-4">
              
                Popular Article
              
            </li>

            <li class="mb-4">
              
                Most Read
            
            </li>
            <li>
              
                Tips & Tricks
              
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6  font-[600]  text-[18px] text-[#0E1735] uppercase ">
            Contact Us
          </h2>
          <ul class="text-[#8E8E8E]  font-[400] text-[14px] ">
            <li class="mb-4">
              <a href="#" class="hover:underline">
              7th floor,Sparkz Complex, 2nd Street, Indira Nagar, Bangalore 560038
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                8372436284
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                nandajanair21@gmail.com            </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
