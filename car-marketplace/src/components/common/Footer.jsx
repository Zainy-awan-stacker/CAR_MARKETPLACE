import React from 'react'

function Footer() {
  return (
    <footer className='bg-sky-500 text-white px-8 pt-14 pb-6'>
      
      {/* Top Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-sky-400'>

        {/* Logo + Desc + Icons */}
        <div className='flex flex-col gap-4'>
          <div>
            <img src='/images/cars.png' alt='car' width={70} className='brightness-200'/>
            <span className='block text-white font-extrabold text-xl tracking-widest mt-1'>RENTIFY</span>
          </div>
          <p className='text-sky-100 text-sm leading-relaxed'>
            Find reliable car with transparent pricing, verified inspections,
            flexible pickup and delivery options, and 24/7 customer support.
          </p>
          <div className='flex gap-3 mt-1'>
            {[
              { src: '/images/face.png', alt: 'facebook' },
              { src: '/images/insta.png', alt: 'instagram' },
              { src: '/images/twit.png', alt: 'twitter' },
              { src: '/images/linkdin.png', alt: 'linkedin' },
            ].map((icon) => (
              <div key={icon.alt} className='w-9 h-9 bg-sky-600 hover:bg-white rounded-full flex items-center justify-center cursor-pointer transition'>
                <img src={icon.src} alt={icon.alt} width={16} className='brightness-200'/>
              </div>
            ))}
          </div>
        </div>

        {/* Company */}
        <div className='flex flex-col gap-3'>
          <h4 className='text-white font-bold text-base mb-1 border-l-4 border-white pl-3'>Company</h4>
          {['About', 'Careers', 'Press', 'Blog', 'Partners'].map(item => (
            <span key={item} className='text-sky-100 text-sm cursor-pointer hover:text-white transition w-fit'>
              {item}
            </span>
          ))}
        </div>

        {/* Support */}
        <div className='flex flex-col gap-3'>
          <h4 className='text-white font-bold text-base mb-1 border-l-4 border-white pl-3'>Support</h4>
          {['Help Center', 'Safety Information', 'Cancellation Option', 'Contact Us', 'Accessibility'].map(item => (
            <span key={item} className='text-sky-100 text-sm cursor-pointer hover:text-white transition w-fit'>
              {item}
            </span>
          ))}
        </div>

        {/* Newsletter */}
        <div className='flex flex-col gap-4'>
          <h4 className='text-white font-bold text-base border-l-4 border-white pl-3'>Stay Updated</h4>
          <p className='text-sky-100 text-sm leading-relaxed'>
            Subscribe to our newsletter for inspiration and special offers.
          </p>
          <div className='relative flex items-center mt-2'>
            <input
              type='email'
              placeholder='Your email...'
              className='w-full bg-white text-gray-800 text-sm placeholder-gray-400 rounded-full py-3 pl-4 pr-28 outline-none focus:ring-2 focus:ring-white'
            />
            <button className='absolute right-0 translate-x-2 bg-black hover:bg-gray-800 text-white text-sm font-bold px-5 py-3 rounded-full transition whitespace-nowrap'>
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className='flex flex-col sm:flex-row justify-between items-center gap-3 pt-6 text-sky-100 text-sm'>
        <span>© 2025 Rentify. All rights reserved.</span>
        <div className='flex gap-5'>
          <span className='hover:text-white cursor-pointer transition'>Privacy Policy</span>
          <span className='hover:text-white cursor-pointer transition'>Terms of Service</span>
          <span className='hover:text-white cursor-pointer transition'>Cookies</span>
        </div>
      </div>

    </footer>
  )
}

export default Footer