import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GiGearStickPattern } from "react-icons/gi";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { BsFuelPumpFill } from "react-icons/bs";
import { BsSpeedometer2 } from "react-icons/bs";

function Item({car}) {
    const navigate =useNavigate()

  return (
     <div className={`rounded-xl shadow p-4 ${car.bgColor}`} onClick={() =>{navigate(`/listing/ ${car.id}`)}} >
      <h3 className="font-semibold">{car.name}</h3>
      <div className='inside-edit flex justify-between items-center py-2 gap-5'>
        <div><h5>{car.type}</h5></div>
        <div><p  className="text-sky-400 font-bold">PKR{car.purchasePrice} |{car.rentPerDay}/day</p></div>
      </div>
      <img
        src={car.image}
        alt={car.name}
        className="h-40 w-full object-contain mb-3"
      />
      <div className='car-feature flex justify-between'>
        <div className='flex flex-col gap-1 items-center'>
        <GiGearStickPattern />
        {car.transmission}
        </div>
          |
        <div className='flex flex-col gap-1 items-center'>
         <MdAirlineSeatReclineExtra />
         {car.seats}
        </div>
          |
        <div className='flex flex-col gap-1 items-center'>
         <BsFuelPumpFill />
         {car.fuel}
        </div>
          |
        <div className='flex flex-col gap-1 items-center'>
         <BsSpeedometer2 />
         {car.mileage}
        </div>
      </div>
      
  
    </div>
  )
}

export default Item