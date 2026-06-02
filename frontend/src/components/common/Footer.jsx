import React from 'react'

function Footer() {
  return (
    <footer className='footer bg-gray-200  px-12'>
    <div className='footer-div  grid lg:grid-cols-4 items-center gap-10 md:gap-6'>
    <div className='first-part flex flex-col w-full   p-4 gap-3'>
      <div className='relative'>
       <img src='/images/cars.png' alt='car' width={80}/>
       <span className='absolute top-13 pl-1'>RENTIFY</span>
      </div>
      <div><p className='small-para font-serif'>Find reliable car with transparent pricing, verified inspections, flexible pickup and delivery options, and 24/7 customer support.</p></div>
      <div className='icons flex gap-4'>
       <img src='/images/face.png' alt='facebook' width={20}/>
       <img src='/images/insta.png' alt='insta'/>
       <img src='/images/twit.png' alt='twit'/>
       <img src='/images/linkdin.png' alt='link'/>
      </div>
    </div>
    <div className='scnd-box w-full  px-4'>
      <h4>COMPANY</h4>
      <ul className='flex gap-2 flex-col'>
        <li>About</li>
        <li>Careers</li>
        <li>Press</li>
        <li>Blog</li>
        <li>Partners</li>
      </ul>
    </div>
    <div className='thrd-box w-full  px-4'>
      <h4>Support</h4>
      <ul className='flex gap-2 flex-col'>
        <li>Help center</li>
        <li>Safety Information</li>
        <li>Cancellation Option</li>
        <li>Contact Us</li>
        <li>Accessibility</li>
      </ul>
    </div>
    <div className='four-box flex flex-col gap-5 sm:w-1/2'>
      <h4>Stay Updated</h4>
      <p className='mini-para font-serif w-full'>Subscribe to our newsletter for inspiration and special offers.</p>
      <div className='last-email flex relative '>
        <input type='email' placeholder='Your email...' className='border-black rounded-full py-2 px-4  bg-white relative w-full'/>
        <button className='btn-blk bg-black text-white font-bold px-4 py-2 rounded-full absolute left-20 '>Subscribe</button>
      </div>
    </div>
    </div>
    </footer>
  )
}

export default Footer