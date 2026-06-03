import React from 'react'
import { useState } from 'react'
import { FaCar } from "react-icons/fa";

function Dashboard() {
    const [dashboard,setDashboard] = useState({
        bookings:[],
        totalBookings:0,
        totalRevenue:0,
    })
  return (
    <div className='main-div bg-white '>
        <div className='first-part grid grid-cols-2 gap-2 border'>
         <div className='first-content flex bg-primaryOne '>
          <div className='min-cont flex gap-2 p-2'>
          <FaCar width={20} />
          <div className='mini-cont flex flex-col gap-2'>
            <div>00</div>
            <div>Total Sales</div>

          </div>
          </div>
         </div>
         {/* second-box */}
         <div className='first-content flex bg-primaryTwo '>
          <div className=''>
          <FaCar />
          <div className='mini-cont flex flex-col gap-2'>
            <div>00</div>
            <div>Total Sales</div>
          </div>
          </div>
         </div>
        </div>
        {/* latest booking or sales */}
        <div className='second-main-div mt-4'>
         <div className='inside-cont flex justify-between
          flex-wrap gap-2 sm:grid grid-cols-[2fr_2fr_1fr_1fr]
           lg:grid-cols-[0.5fr_2fr_2fr_1fr_1fr] px-6 py-3 bg-sky-500 text-white border-b-1 border-slate-900/10 rounded-t-xl'>
          <h5 className='hidden lg:block'>Index</h5>
          <h5>Booking Dates</h5>
          <h5>Amount</h5>
          <h5>Status</h5>
         </div>
         <div></div>
        </div>
    </div>
  )
}

export default Dashboard