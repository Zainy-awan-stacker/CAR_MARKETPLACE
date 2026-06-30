import React, { useEffect, useState } from "react";
import { FaCar } from "react-icons/fa";
import API from "../../api/api";

function Dashboard() {

  const [dashboard, setDashboard] = useState({
    bookings: [],
    totalBookings: 0,
    totalRevenue: 0,
  });

  useEffect(() => {

    const fetchDashboard = async () => {

      try {

        const res = await API.get("/dashboard");

        setDashboard(res.data);

      } catch (error) {

        console.log(error);

      }

    };

    fetchDashboard();

  }, []);

  return (
    <div className="main-div bg-white p-5">

      {/* TOP CARDS */}

      <div className="grid grid-cols-2 gap-4">

        <div className="bg-sky-500 text-white rounded-xl p-5">

          <div className="flex items-center gap-4">

            <FaCar size={30} />

            <div>

              <h2 className="text-3xl font-bold">
                {dashboard.totalBookings}
              </h2>

              <p>Total Sales</p>

            </div>

          </div>

        </div>

        <div className="bg-green-500 text-white rounded-xl p-5">

          <div className="flex items-center gap-4">

            <FaCar size={30} />

            <div>

              <h2 className="text-3xl font-bold">
                ${dashboard.totalRevenue}
              </h2>

              <p>Total Earnings</p>

            </div>

          </div>

        </div>

      </div>

      {/* TABLE */}

      <div className="mt-8">

        <div className="grid grid-cols-5 bg-sky-500 text-white p-3 rounded-t-xl">

          <h4>#</h4>
          <h4>Car</h4>
          <h4>Booking Dates</h4>
          <h4>Amount</h4>
          <h4>Status</h4>

        </div>

        {dashboard.bookings.map((booking, index) => (

          <div
            key={booking._id}
            className="grid grid-cols-5 p-3 border-b"
          >

            <p>{index + 1}</p>

            <p>{booking.car?.name}</p>

            <p>
              {new Date(
                booking.pickUpDate
              ).toLocaleDateString()}
            </p>

            <p>
              $
              {booking.car?.price?.rentPerDay}
            </p>

            <p
              className={
                booking.isPaid
                  ? "text-green-500 font-bold"
                  : "text-red-500 font-bold"
              }
            >
              {booking.isPaid ? "Paid" : "Unpaid"}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Dashboard;