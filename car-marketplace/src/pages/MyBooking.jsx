import React, { useEffect, useState } from "react";
import API from "../api/api";

function MyBooking() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await API.get("/bookings/my-bookings");

        setBookings(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBookings();
  }, []);

  const handlePayment = async (booking) => {
  try {

    const res = await API.post(
      "/payment/create-checkout-session",
      {
        booking,
      }
    );

    window.location.href = res.data.url;

  } catch (error) {

    console.log(error);

  }
};

  return (
    <section className="bg-primary min-h-screen p-10">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-start mb-10">
        <h1 className="text-4xl font-bold text-slate-950">My Bookings</h1>

        <p className="max-w-full md:max-w-lg text-slate-700">
          Find reliable cars with transparent pricing, verified inspections,
          flexible pickup and delivery options, and 24/7 customer support for a
          smooth rental or buying experience.
        </p>
      </div>

      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        {bookings.map((booking) => (
          <div
            key={booking?._id}
            className="group relative overflow-hidden rounded-3xl bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-sky-500/35 via-sky-500/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

            {/* Top Part */}

            <div className="relative flex flex-col lg:flex-row items-center gap-4 p-4">
              {/* Image */}

              <div
                className={`w-[200px] h-[110px] rounded-2xl flex items-center justify-center ${booking?.car?.bgColor ?? "bg-slate-100"}`}
              >
                <img
                  src={booking?.car?.images?.main}
                  alt={booking?.car?.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Car Details */}

              <div className="flex-1">
                <h2 className="text-2xl font-bold">{booking?.car?.name}</h2>

                <div className="flex gap-5 mt-2 text-lg text-slate-700">
                  <p>
                    <span className="font-bold">Seats</span>{" "}
                    {booking?.car?.specs?.seats}
                  </p>

                  <p>
                    <span className="font-bold">Total:</span> $
                    {booking?.car?.price?.rentPerDay}
                  </p>
                </div>

                <p className="text-slate-600 mt-2">{booking?.car?.location}</p>
              </div>
            </div>

            {/* Bottom Part */}

            <div className="px-5 py-4 flex flex-col lg:flex-row justify-between items-center gap-4">
              <div className="flex flex-wrap gap-6 text-sm text-slate-600">
                <div>
                  <span className="font-semibold text-sky-500">ID:</span>{" "}
                  <span className="text-slate-500">
                    {booking?._id.slice(0, 8)}
                  </span>
                </div>

                <div>
                  <span className="font-bold">Pick-Up:</span>{" "}
                  {new Date(booking?.pickUpDate).toDateString()}
                </div>

                <div>
                  <span className="font-bold">Drop-Off:</span>{" "}
                  {new Date(booking?.dropOffDate).toDateString()}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div>
                  <span className="font-bold">Payment:</span>{" "}
                  <span
                    className={`font-semibold ${
                      booking?.isPaid ? "text-green-500" : "text-yellow-500"
                    }`}
                  >
                    {booking?.isPaid ? "Paid" : "UnPaid"}
                  </span>
                </div>

                {!booking?.isPaid && (
                  <button
                    onClick={() => handlePayment(booking)}
                   className="bg-sky-500 text-white px-5 py-2 rounded-md hover:bg-sky-600">
                    Pay Now
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyBooking;
