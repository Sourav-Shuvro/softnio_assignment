import React from "react";
import image from "../../assets/heading-banner.jpg";

const Heading = () => {
  return (
    <div className="md:flex py-10 space-y-4">
      <div className="flex items-center md:w-1/2">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl text-white font-bebas uppercase">Taste the authentic <br /> Saudi cuisine</h1>
          <p className="text-white font-popins">
            Among the best Saudi chefs in the world, serving <br /> you something beyond flavor.
          </p>
          <button className="temp-btn">EXPLORE MENU</button>
        </div>
      </div>
      <div className="md:w-1/2">
        <img src={image} alt="Meal" className="h-[300px] w-[500px]" />
      </div>
    </div>
  );
};

export default Heading;
