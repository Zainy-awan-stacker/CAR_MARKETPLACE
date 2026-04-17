import React from 'react'

function About() {
  return (
    <section className="section-about py-20 px-10">
    <div className='Inside-about flex flex-wrap gap-4  mt-5 mx-auto'>
      <div className='left-side  flex-[5]'>
      <div className='inner py-4 pl-6'>
      <h4 className='textLine text-sky-400'>Your Trusted Real Estate Partner</h4>
      <h1>Helping You Every Step of the Way</h1>
      <p className='text mt-5 mb-10'>Find reliable car with transparent pricing, verified inspections, flexible pickup and delivery options, and 24/7 customer support for a smooth rental or buying experience.</p>
      </div>
      <div className='inside-box flex flex-wrap justify-center gap-6 w-full '>

  <div className='first p-4 bg-primary w-full lg:w-[45%] rounded-xl'>
    <h5 className='font-semibold mb-2'>Wide Vehicle Selection</h5>
    <p className='text-sm text-gray-500 font-sans'>
      Book in seconds with instant confirmations and flexible pickup options, so you get on the road fast without waiting or hassles.
    </p>
  </div>

  <div className='scnd p-4 bg-sky-300 w-full lg:w-[45%] rounded-xl'>
    <h5 className='font-semibold mb-2'>Quick Service</h5>
    <p className='text-sm text-gray-500 font-sans'>
      Choose from economy to luxury models, regularly maintained and verified, giving you reliable performance and the perfect car for every trip.
    </p>
  </div>

  <div className='thrd p-4 bg-amber-100 w-full lg:w-[45%] rounded-xl'>
    <h5 className='font-semibold mb-2'>Transparent Pricing</h5>
    <p className='text-sm text-gray-500 font-sans'>
      Upfront rates with no hidden fees, clear breakdowns for insurance and extras, so pricing stays predictable and easy to understand before booking.
    </p>
  </div>

  <div className='four p-4 bg-gray-100 w-full lg:w-[45%] rounded-xl'>
    <h5 className='font-semibold mb-2'>24/7 Support</h5>
    <p className='text-sm text-gray-500 font-sans'>
      Around the clock customer support via chat and phone, resolving issues quickly and helping with changes, extensions, or roadside assistance anytime you need.
    </p>
  </div>

</div>

      </div>
      <div className='right-side  flex flex-[4] justify-center gap-7'>
        <div className='one'><img src='/images/demo.png' alt='demo' width={270} className='rounded-3xl'/></div>
        <div className='scnd-img mt-8'><img src='/images/demo1.png' alt='demo1' width={270} className='rounded-2xl'/></div>
      </div>
    </div>
    </section>
  )
}

export default About