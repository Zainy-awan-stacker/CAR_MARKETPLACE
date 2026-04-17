import React from 'react'
import Hero from '../components/userScreenComponents/Hero'
import About from '../components/userScreenComponents/About'
import FeaturedCars from '../components/userScreenComponents/FeaturedCars'
import Banner from '../components/userScreenComponents/Banner'
import Testimonial from '../components/userScreenComponents/Testimonial'


function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <FeaturedCars/>
      <Banner/>
      <Testimonial/>
    </>
  )
}

export default Home