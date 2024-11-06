import React, { useState } from "react";
import img1 from "../../assets/burger.jpg";
import img2 from "../../assets/pizza.png";
import img4 from "../../assets/french-fry.jpg";
import img3 from "../../assets/chicken.jpg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const items = [
  {
    id: 1,
    name: "vegetables burger",
    text: "Barbecue Italian cuisine pizza",
    image: img1,
  },
  {
    id: 2,
    name: "Spacial Pizza",
    text: "Barbecue Italian cuisine pizza",
    image: img2,
  },
  {
    id: 3,
    name: "Spacial French fries",
    text: "Barbecue Italian cuisine",
    image: img3,
  },
  {
    id: 4,
    name: "Cuisine Chicken",
    text: "Japanese Cuisine Chicken",
    image: img4,
  },
];
const Food = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const { name, text, image } = items[currentIndex];

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
          <h2 className="md:text-4xl text-3xl font-bold font-bebas">POPULAR FOOD ITEMS</h2>
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

      {/* For Large Screen Device  */}
      <div className="md:grid py-8 grid-cols-4 gap-4 hidden">
        {items.map((item) => (
          <div key={item.id} className="card bg-base-100 rounded-none">
            <figure className="">
              <img
                src={item.image}
                alt="Food"
                className="h-[150px] w-[150px]"
              />
            </figure>
            <div className="card-body items-center px-3 pt-0 text-center">
              <p className="mt-2">
                <p
                  className="w-[60px]"
                  style={{ border: "2px solid #BD1F17" }}
                ></p>
              </p>
              <h2 className="card-title  uppercase font-bebas">{item.name}</h2>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* For Small Device  */}
      <div className="md:hidden">
        <div className="max-w-xs mx-auto p-4">
          <div className="carousel carousel-center bg-white mt-4">
            <div className="carousel-item flex flex-col items-center justify-center text-center space-y-4">
              <figure className="">
                <img
                  src={image}
                  alt="Food"
                  className="h-[150px] w-[150px]"
                />
              </figure>
              <div className="card-body items-center pt-0 text-center">
                <p className="mt-2">
                  <p
                    className="w-[60px]"
                    style={{ border: "2px solid #BD1F17" }}
                  ></p>
                </p>
                <h2 className="card-title  uppercase font-bebas">
                  {name}
                </h2>
                <p>{text}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-3 mt-4">
            <button className="btn btn-circle" onClick={prevProduct}>
              <FaAngleLeft></FaAngleLeft>
            </button>
            <button className="btn btn-circle text-red-700" onClick={nextProduct}>
              <FaAngleRight></FaAngleRight>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
