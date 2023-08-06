import React from "react";
import Main from "./Main";
import Readytosell from "./Readytosell";
import Recommendation from "./Recommendation";
import Review from "./Review";
import Subscribe from "./Subscribe";
import Tiptrick from "./Tiptrick";

const Hero = () => {
  return (
    <>
      {/* <div className="overflow-hidden"> */}
      <Main />
      <Recommendation />
      <Readytosell />
      <Review />
      <Tiptrick/>
      <Subscribe/>
      {/* </div> */}
    </>
  );
};

export default Hero;
