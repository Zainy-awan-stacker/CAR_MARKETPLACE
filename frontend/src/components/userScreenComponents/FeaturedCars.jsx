import React from "react";
import Item from "./Item";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Cars } from "../../data";
import { useNavigate } from "react-router-dom";

function FeaturedCars() {
  const navigate = useNavigate()
  const handleMoveTo =()=>{
     navigate(`/listing/${Cars.id}`);
  }

  const handleHoverTo = ()=>{
        navigate('/listing')
  }

  return (
    <section className="third-container py-16 px-15">
      {/* maindev */}
      <div className="main-dev py-10">
        <div>
          <h4 className="mini-heading text-sky-400 px-1">
            Your Next Car Awaits
          </h4>
        </div>
        <div className="inside-heading flex xl:justify-between items-center pb-5">
          <div className="inerr-side flex-5">
            <h1>Start Driving With Ease</h1>
          </div>
          <div className="inner-2-side flex-3">
            <p className="para-side font-bold text-gray-400 font-san-serif">
              Find reliable car with transparent pricing, verified inspections,
              flexible pickup and delivery options, and 24/7 customer support
              for a smooth rental or buying experience.
            </p>
          </div>
        </div>
        <div className="scnd-heading flex justify-between mt-4">
          <div>
            <h5>
              <span>Displaying 1–6 </span>from 3k listing
            </h5>
          </div>
           
            <div className="polish p-3 bg-sky-400 rounded-md cursor-pointer" onClick={handleHoverTo} >
              <img
                src="/images/filter.png"
                alt="filter"
                width={20}
                className="filter-img invert"
              />
            </div>
          
        </div>
      </div>
      {/* ye ha car feature vala part */}
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesOffsetBefore={0}
        slidesOffsetAfter={0}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper w-full !px-0"
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {Cars.map((car) => (
          <SwiperSlide key={Cars.id} onClick={handleMoveTo} className="click cursor-pointer">
            <Item car={car}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default FeaturedCars;
