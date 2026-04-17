import React from 'react'

function Testimonial() {
  return (
    <section className="section-about py-20 px-10">
    <div className='Inside-about flex flex-col  gap-4  mt-5 mx-auto'>
     <div>
     <h4 className='heading-sm text-sky-500 inner '>What people Says</h4>
     </div>
     <div className='inside-sec flex  flex-col  '>
      <div className='flex flex-5'><h1 className='H capitalize'>Don't just take our words</h1>
      </div>
      <div className='flex flex-4 font-helvetica font-bold mt-2'><p className='simple'>Hear what our users say about us. We're always looking for ways to improve. If you have a positive experience with us, leave a review.</p></div>
     </div>
     <div className='2nd-container grid grid-cols-1 lg:grid-cols-3 lg:gap-10  md:grid-cols-2 gap-5 justify-items-center mt-20'>
      <div className='main-div  bg-gray-100 rounded-2xl px-4 py-4 '>
      <div className='flex justify-between items-center'>
        <div className=''><img src='/images/rating.png' alt='rate' width={88} className='' /></div>
        <div><span>22 JAN 2026</span></div>
      </div>
      <p className='my-4'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna”</p>
      <div className='flex gap-3 items-center'><img src='/images/girl.png' alt='girl' className='h-8 w-8 rounded-full'/><h5>John Doe</h5></div>
      </div>
      {/* ye dusri div ha  */}
      <div className='main-div   bg-gray-100 rounded-2xl px-4 py-4  hover:bg-blue-500'>
      <div className='flex justify-between items-center'>
        <div className=''><img src='/images/rating.png' alt='rate' width={88} className='' /></div>
        <div><span>22 JAN 2026</span></div>
      </div>
      <p className='my-4'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna”</p>
      <div className='flex gap-3 items-center'><img src='/images/man.png' alt='girl' className='h-8 w-8 rounded-full'/><h5>Donald jackman</h5></div>
      </div>
      {/* ye tesri div ha  */}
      <div className='main-div   bg-gray-100 rounded-2xl px-4 py-4'>
      <div className='flex justify-between items-center'>
        <div className=''><img src='/images/rating.png' alt='rate' width={88} className='fill-yellow-400 hover:fill-yellow-500 transition' /></div>
        <div><span>22 JAN 2026</span></div>
      </div>
      <p className='my-4'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna”</p>
      <div className='flex gap-3 items-center'><img src='/images/female.png' alt='girl' className='h-8 w-8 rounded-full'/><h5>John Doe</h5></div>
      </div>
     </div>
    </div>
    </section>
  )
}

export default Testimonial