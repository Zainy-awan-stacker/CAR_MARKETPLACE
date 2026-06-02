import React from "react";
import { myBookings } from "../data/index";

function MyBooking() {
  return (
    <div className="booking-section p-10">
      <div className="first-part grid grid-cols-2">
        <div>
          <h2>MY BOOKINGS</h2>
        </div>
        <div>
          <p className="para-side font-bold text-gray-400 font-san-serif">
            Find reliable car with transparent pricing, verified inspections,
            flexible pickup and delivery options, and 24/7 customer support for
            a smooth rental or buying experience.
          </p>
        </div>
      </div>
      <div className="booking-part bg-white rounded-md ">
        {myBookings.map((bookings) => (
          <div key={bookings.id} className="booking border">
            <div className="inside flex  gap-5 p-3">
              <div>
                <img
                  src={bookings.car.image}
                  className="h-[130px] bg-primary rounded-md"
                />
              </div>
              <div className="detail flex-col  flex-wrap ">
                <div>
                  <h4>{bookings.car.name}</h4>
                </div>
                <div className="inside flex gap-5">
                  <h4>Seats:{bookings.car.seats}</h4>
                  <h4>Pkr:{bookings.totalPrice}</h4>
                </div>
                <div>
                  <p>{bookings.location}</p>
                </div>
              </div>
              
            </div>
            {/* under content */}
            <div className="under-part border-t p-2 mx-2  flex justify-between">
            <div className="under  flex gap-8">
            <div>
           <h4>BOOKING ID :{bookings.id}</h4>
           </div>
           <div>
           <h4>PICK UP :{bookings.pickupDate}</h4>
           </div>
           <div>
           <h4>DROP OFF :{bookings.dropoffDate}</h4>
           </div>
            </div>
            {/* right side */}
            <div className="rightAngle flex gap-3 items-center ">
            <div>Payment
            </div>
            <button className="btn bg-sky-500 text-white p-2 rounded-md">Pay Now</button>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyBooking;
