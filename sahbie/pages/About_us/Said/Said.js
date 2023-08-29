import React from 'react'
import Image from 'next/image'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Said = ({ said_about_us }) => {
  console.log(said_about_us)
  return (
    <section className="bg-light">
    <div className="container py-5">
      <h3 className="wz-aftr-b4 centered-aftr mt-3 mb-4 font-weight-bold text-center aos-init aos-animate" data-aos="fade-down">
        قالوا عنا
      </h3>
      <Swiper
        data-aos="fade-up"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
      >
        {said_about_us?.map((said) => (
          <SwiperSlide key={said.id} className="swiper_Said">
            <div className="tes-item item">
              <div className="tes-img">
                  <div className="tes-img-inner">
                      <img 
                        src={said.image} 
                        width={100} 
                        height={100} 
                        alt=""
                      />
                  </div>
              </div>
              <div className="tes-col">
                <div className="tes-dets">
                    <h5>{said.title}</h5>
                    <p>{said.content}</p>
                </div>
                <div className="tes-footer">
                    <h4>{said.name}</h4>
                    <p>{said.position}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
  )
}

export default Said
