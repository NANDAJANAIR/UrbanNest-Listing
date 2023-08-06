import React from "react";
import Drawerr from "./drawer/Drawer";
import MyDropdown from "./MyDropdown";

const Navbar = () => {
  return (

<>
<div className=" px-[20px]  w-full  md:px-[100px] lg:px-[120px]  absolute -z-20  pt-[30px]  md:pt-[40px]  lg:pt-[50px] ">
        <span className="myfilter"></span>
        <span className="myfilter2"></span>
        <span className="myfilter3"></span> 
      </div>
    <div className=" px-[20px]  md:px-[60px] lg:px-[120px]  w-full z-10 absolute  pt-[30px]  md:pt-[40px]  lg:pt-[50px] flex justify-between ">

      <div className="flex items-center gap-3">    
        <img src="/assets/img/logo.svg" />

        <h1 className="font-[700] text-[16px]" > UrbanNest Listing </h1>
      </div>

      <div className=" hidden  lg:flex  text-white gap-[24px] items-center justify-start font-[600] text-[14px]" >

  <div className="bg-transparent border-2 border-[rgba(255, 255, 255, 0.3)]  whitespace-nowrap bg-[rgba(255, 255, 255, 0.1)] rounded-2xl py-[8px] px-[16px]" >    
<h1> About Us</h1>
</div>

<div className="bg-transparent border-2 border-[rgba(255, 255, 255, 0.3)] bg-[rgba(255, 255, 255, 0.1)] rounded-2xl py-[8px] px-[16px]" >    
<h1> Privacy Policy </h1>
</div>

<div className="" >

<MyDropdown/>

</div>

<div className="bg-transparent bg-[#D1FAE5] text-[#047857] whitespace-nowrap rounded-2xl py-[8px] px-[16px]" >    
    <button>Sign Up!</button>
</div>
      </div>
      <div
        className="block float-right lg:hidden">
                                  <Drawerr/>
                </div>
    </div>
</>
   
  );
};

export default Navbar;
