import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";

function Hero() {
  return (
    <section className="bg-primary">
      <div className="max-padd-container ">
        <div className=" max-padd-container relative flex  mx-auto flex-col gap-9 py-6">
          <div className="FirstPhase  flex flex-col gap-8 justify-center px-10 py-5">
            <div className="textify flex justify-center md:flex-wrap">
              <h1 className="max-w-5xl text-center capitalize">
                Explore
                <span className="bg-gradient-to-r from-sky-500 to-white pl-1 rounded-md">
                  premium vehicles
                </span>
                Available in exciting destinations.
              </h1>
            </div>
            <div className="searchify flex justify-center">
              <form className="bg-white text-gray-500 rounded-md md:rounded-full px-6 md:pl-12 py-4 py-4  flex flex-col  justify-center  md:flex-row  gap-4 lg:gap-x-8 max-w-md:max-w-4xl  ring-1 ring-slate-900/5 relative">
                <div className="flex flex-col w-full">
                  <div className="flex items-center gap-2">
                     <CiLocationOn />
                    <label htmlFor="destinationInput">Destination</label>
                  </div>
                  <input
                    list="destinations"
                    id="destinationInput"
                    type="text"
                    className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none capitalize"
                    placeholder="Type here"
                    required
                  />

                </div>

                <div className="flex flex-col w-full">
                  <div className="flex items-center gap-2">
                  <FaRegCalendarAlt />
                    <label htmlFor="pickUp">pick Up</label>
                  </div>
                  <input
                    id="pickUp"
                    type="date"
                    className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <FaRegCalendarAlt />
                    <label htmlFor="dropOff">Drop Off</label>
                  </div>
                  <input
                    id="dropOff"
                    type="date"
                    className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                  />
                </div>


                <button type="submit" className="flex items-center justify-center gap-1 rounded-full bg-sky-500 py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1">
                  <svg
                    className="w-4 h-4 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2"
                      d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span>Search</span>
                </button>
              </form>
            </div>
            <div className="imagify flex justify-center md:w-full">
              <img
                src="/images/bg.png"
                alt="bgImg"
                className="max-w-[78%]"
              />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default Hero;
