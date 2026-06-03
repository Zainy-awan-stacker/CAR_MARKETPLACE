import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { Details } from "../data/index";
import { IoIosStar } from "react-icons/io";
import { GiGearStickPattern } from "react-icons/gi";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { BsFuelPumpFill } from "react-icons/bs";
import { BsSpeedometer2 } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";

function CarDetails() {
  const { id } = useParams();

  // jis car par click hua usko find karo
  const car = Details.find((item) => item.id === Number(id));

  // agar car na mile
  if (!car) {
    return <h2 className="text-center text-2xl">Car not found</h2>;
  }

  return (
    <section className="bg-primary p-5">
      <div className="main-div grid lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 p-5 gap-5">
        {/* LEFT SIDE */}
        <div className="left-side flex flex-col gap-5 border bg-white p-5 rounded-lg">
          <div className="flex items-center gap-2 text-gray-500">
            <CiLocationOn />
            <p>{car.location}</p>
          </div>
          <div className="first-part flex justify-between items-center">
            <h1 className="text-3xl font-bold">{car.name}</h1>
            <h4>
              Pkr {car.price.rentPerDay}|{car.price.purchasePrice}
            </h4>
          </div>
          <div className="scnd-part flex justify-between items-center ">
            <h4 className="text-sky-500">{car.specs.type}</h4>
            <h4 className="flexy flex items-center gap-1">
              {car.rating}
              <IoIosStar className="texty text-amber-300" />
              <IoIosStar className="texty text-amber-300" />
              <IoIosStar className="texty text-amber-300" />
              <IoIosStar className="texty text-amber-300" />
              <IoIosStar className="texty text-amber-300" />
            </h4>
          </div>

          <div className="car-feature flex gap-5">
            <div className="flex  gap-1 items-center">
              <GiGearStickPattern />
              {car.specs.transmission}
            </div>
            |
            <div className="flex  gap-1 items-center">
              <MdAirlineSeatReclineExtra />
              {car.specs.seats}
            </div>
            |
            <div className="flex  gap-1 items-center">
              <BsFuelPumpFill />
              {car.specs.fuel}
            </div>
            |
            <div className="flex  gap-1 items-center">
              <BsSpeedometer2 />
              {car.specs.mileage}
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-bold text-lg">Car Details</h3>
            <p className="text-gray-600">{car.description}</p>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-bold text-lg mb-2">Features</h3>

            <div className="flex flex-wrap gap-2">
              {car.features.map((feature, index) => (
                <p
                  key={index}
                  className="bg-gray-200 text-black px-3 py-1 rounded hover:bg-sky-500 text-amber-50 cursor-pointer"
                >
                  {feature}
                </p>
              ))}
            </div>
          </div>
          {/* chekout forms */}
          <div className="chekout flex justify-between py-5 px-4 bg-primary rounded-md">
            <div className="flex flex-col ">
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
            <div className="">
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
            <button className="btn bg-sky-500 p-5 text-white capitalize font-bold flex items-center rounded-md">
              Check Dates
            </button>
          </div>
          {/* buying contact form */}
          <div className="bg-white shadow-md rounded-2xl p-5 w-[320px]">
            <h2 className="text-lg font-extrabold mb-4">For Buying Contact</h2>

            {/* Top Section */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold">Rentify </h3>
                <p className="text-sm text-gray-500">Agency Office</p>
              </div>

              <div className="flex items-center gap-2">
                <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                  Agency
                </span>
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="profile"
                  className="w-8 h-8 rounded-full"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 border rounded-lg p-2 mb-2">
              <span className="text-sm">0123456789</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 border rounded-lg p-2 mb-4">
              <span className="text-sm">contact@auroramotors.com</span>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <button className="border rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-100">
                Send Email
              </button>

              <button className="border rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-100">
                Call Now
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="right-side border bg-white p-5 rounded-lg">
          {/* Main Image */}
          <img
            src={car.images.main}
            alt={car.name}
            className=" bg-primary p-3 rounded-md object-contain"
          />

          {/* Gallery */}
          <div className="grid grid-cols-2 gap-3 mt-4 ">
            {car.images.gallery.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="gallery"
                className="border rounded p-2 w-full bg-primary object-contain h-[130px]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarDetails;
