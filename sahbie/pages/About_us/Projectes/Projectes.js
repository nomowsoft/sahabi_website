import React from "react";
import Image from "next/image";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Projectes = ({ projects }) => {
  return (
    <section className="bg-light">
      <div className="container py-5">
        <h3 className="wz-aftr-b4 centered-aftr mt-3 mb-4 font-weight-bold text-center aos-init aos-animate" data-aos="fade-down">
          مشاريع حفاظ
        </h3>
        <Swiper
          data-aos="fade-up"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
            },
            "@0.75": {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            "@1.00": {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            "@1.50": {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
          }}
          // navigation
          pagination={{ clickable: true }}
        >
          <div>
            {projects?.map((project) => ( 
              <SwiperSlide key={project.id} className="swiper">
                <img
                  src={project.image}
                  width={150}
                  height={150}
                  alt=""
                />
                <h6 className="font-weight-bold">
                  {project.name}
                </h6>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  )
}

export default Projectes
