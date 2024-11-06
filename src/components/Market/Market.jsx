import React from "react";
import "./market.css";
import image from "../../assets/market-experience.jpg";
import call_logo from "../../assets/call-alt.png";
import logo1 from "../../assets/delivery.png";
import logo2 from "../../assets/medal.png";
import logo3 from "../../assets/pickup.png";
const Market = () => {
  return (
    <div className="py-6 md:py-24">
      <div className="md:flex">
        <div className="md:w-1/2">
          <img
            src={image}
            alt="Burger & Drinks"
            className="h-[350px] w-[450px]"
          />
        </div>
        <div className="mt-4 md:mt-0 md:w-1/2 space-y-4">
          <div className="flex space-x-8 nav-section">
            <p className="active">
              <a href="/">About</a>
            </p>
            <p>
              <a href="/">Experience</a>
            </p>
            <p>
              <a href="/">Contact</a>
            </p>
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl uppercase font-bold font-bebas">
              Exceptional culinary <br /> experience and delicious food
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              non sed est cursus. Vel hac convallis ipsum, facilisi odio
              pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet
              consectetur adipiscing elit do eiusmod tempor incididunt ut labore
              et dolore magna minim veniam nostrud exercitation.
            </p>
            <div className="flex">
              <button className="temp-btn">ABOUT MORE</button>
              <p className="flex items-center ms-5">
                <span>
                  <img src={call_logo} alt="call-logo" />
                </span>
                <span className="font-bold ms-2">+88 3426 739 485</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex justify-between mt-4 md:mt-10">
        <div className="flex">
          <div className="relative rounded-full h-[90px] w-[90px] shadow-lg">
            <img
              src={logo1}
              alt="logo"
              className="h-[40px] w-[40px] absolute top-6 left-6"
            />
          </div>
          <div className="flex items-center ms-6">
            <div>
              <h3 className="text-xl uppercase font-bold font-bebas">
                fast delivery
              </h3>
              <p>Within 30 minutes</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="relative rounded-full h-[90px] w-[90px] shadow-lg">
            <img
              src={logo2}
              alt="logo"
              className="h-[40px] w-[40px] absolute top-6 left-6"
            />
          </div>
          <div className="flex items-center ms-6">
            <div>
              <h3 className="text-xl uppercase font-bold font-bebas">
              absolute dining
              </h3>
              <p>Best buffet restaurant</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="relative rounded-full h-[90px] w-[90px] shadow-lg">
            <img
              src={logo3}
              alt="logo"
              className="h-[40px] w-[40px] absolute top-6 left-6"
            />
          </div>
          <div className="flex items-center ms-6">
            <div>
              <h3 className="text-xl uppercase font-bold font-bebas">
              pickup delivery
              </h3>
              <p>Grab your food order</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
