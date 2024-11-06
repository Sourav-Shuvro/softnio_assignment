import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import icon from "../../assets/Image.png";
import image from "../../assets/review.png";

const Review = () => {
  return (
    <div className="py-8">
      <div className="space-y-3">
        <div className="flex">
          <p className="flex items-center">
            <p className="h-[10px] w-[10px] bg-[#BD1F17]"></p>
          </p>
          <p
            className="font-semibold ms-3"
            style={{ fontSize: "20px", color: "#BD1F17" }}
          >
            Crispy, Every Bite Taste
          </p>
        </div>
        <div className="flex justify-between">
          <h2 className="md:text-4xl uppercase text-3xl font-bold font-bebas">
            What Some of my Customers Say
          </h2>
          <div className="hidden md:block">
            <button className="btn btn-circle me-3">
              <FaAngleLeft></FaAngleLeft>
            </button>
            <button className="btn btn-circle me-3 text-red-600">
              <FaAngleRight></FaAngleRight>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row md:h-[350px] mt-3">
        <div className="md:w-2/5 bg-[#FEBF00]">
          <div className="p-8">
            <p className="text-3xl font-bold">“</p>
            <blockquote className="ps-3">
              You can't go wrong with Chicken Mandi, I had it twice. The chicken
              was cooked perfectly, juicy & soft (usually mandi chicken is a bit
              dry). I would defiantly recommend it.
            </blockquote>
          </div>
          <div className="flex p-8 ms-3 justify-between">
            <p>
              <p className="font-bold uppercase">Khalid Al Dawsry</p>
              <small>Jeddah, Saudi</small>
            </p>
            <img src={icon} alt="people" />
          </div>
        </div>
        <div className="md:w-3/5">
          <img className="h-[350px]" src={image} alt="Meal" />
        </div>
      </div>
      <div className="md:hidden mt-3 text-center">
        <button className="btn btn-circle me-3">
          <FaAngleLeft></FaAngleLeft>
        </button>
        <button className="btn btn-circle me-3 text-red-600">
          <FaAngleRight></FaAngleRight>
        </button>
      </div>
    </div>
  );
};

export default Review;
