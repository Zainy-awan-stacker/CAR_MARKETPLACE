import React from 'react'
import { useNavigate } from 'react-router-dom'

function Banner() {
  const navigate = useNavigate()
  return (
    <section className='max-padd-container py-20 px-10'>
      <div className='max-scnd-container bg-sky-500 rounded-3xl xl:max-h-72 '>
        {/* ye pehla container hacontainer */}
        <div className='inner-cont flex flex-col justify-between md:flex-row'>
          {/* ye left side ha */}
          <div className='flex flex-5 relative lg:bottom-12 xl:bottom-20'>
            <img src='/images/range.png' alt='range' className='range'/>
          </div>
          {/* right side ye ha */}
          <div className='flex flex-4 p-5'>
            <div className='flex flex-col gap-5'>
              <h3 className='heading text-white font-bold capitalize xl:pt-6'>Buy with confidence, rent without worry</h3>
              <p className='text-white/70 font-serif'>Find your next ride or earn from your vehicle in minutes. We handle insurance, driver   verification and secure payments.</p>
              <button onClick={()=>navigate("/listing")} className='btn-white w-36 bg-white p-4 rounded-full font-bold'>Explore cars</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner