import React from "react";

const BookNOw = () => {
  return (
    <div className="py-8 text-white">
      <div className="space-y-2 md:w-1/2">
        <p className="flex items-center">
          <p className="h-[10px] w-[10px] bg-[#BD1F17]"></p>
          <p
            className="font-semibold ms-3"
            style={{ fontSize: "20px", color: "#BD1F17" }}
          >
            Book Now
          </p>
        </p>
        <h2 className="md:text-4xl text-3xl font-bold font-bebas uppercase">
          Book Your Table
        </h2>
        <p>
          Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
          molestie vel, ornare non id blandit netus.
        </p>
      </div>
      <div className="md:w-1/2">
        <form className="card-body md:ps-0 space-y-2">
          <div className="md:flex md:space-y-0 space-y-2 justify-between">
            <div className="form-control md:w-1/2">
              <input
                type="text"
                placeholder="Your Name*"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/2 md:ms-3">
              <input
                type="email"
                placeholder="Your Email*"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="md:flex space-y-2 md:space-y-0 justify-between">
            <div className="form-control md:w-1/2 text-gray-400">
              <input
                type="date"
                placeholder="Reservation Date"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/2 md:ms-3">
              <input
                type="number"
                placeholder="Total People"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <textarea
              type="text"
              placeholder="Message"
              className="input input-bordered"
              required
            />
          </div>
          <div className="mt-6">
            <button className="temp-btn">BOOK NOW</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookNOw;
