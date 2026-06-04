import React, { useEffect,useState} from "react";
import Item from "./Item";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import API from "../../api/api";

function FeaturedCars() {
  const navigate = useNavigate()
  const [cars,setCars] =useState([]);
  
  const handleHoverTo =()=>{
    navigate("/listing")
  }

  useEffect(() => {

  const fetchCars = async () => {

    try {

      const res = await API.get("/cars");

      setCars(res.data.cars || res.data);

    } catch (error) {

      console.log(error);

    }

  };

  fetchCars();

}, []);

  return (
    <section className="third-container py-16 px-15">
      {/* maindev */}
      <div className="main-dev py-10">
        <div>
          <h4 className="mini-heading text-sky-400 px-1">
            Your Next Car Awaits
          </h4>
        </div>
        <div className="flex flex-col xl:flex-row xl:justify-between items-start xl:items-center pb-5 gap-4">
  <div className="flex-[5]">
    <h1>Start Driving With Ease</h1>
  </div>
  <div className="flex-[3]">
    <p className="font-bold text-gray-400">
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
        {cars.map((car) => (
          <SwiperSlide key={car._id}  className="click cursor-pointer">
            <Item car={car}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default FeaturedCars;
