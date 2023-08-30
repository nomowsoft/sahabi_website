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

const Commission = () => {
  return (
    <div>
      <section id="committee-blk" className="py-5">
        <div className="container">
          <div className="mt-3 pb-3">
            <h3 
              className="wz-aftr-b4 centered-aftr mt-3 mb-4 font-weight-bold text-center aos-init aos-animate" 
              data-aos="fade-down"
            >
              اللجنة 
                <span className="main-color"> العلمية </span>
            </h3>
          </div>
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
              },
              "@1.00": {
                slidesPerView: 3,
              },
              "@1.50": {
                slidesPerView: 4,
              },
            }}
            // navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide className="swiper_commission">
              <div>
                <div>
                  <img 
                    className="border border-5 rounded-pill" 
                    width={180} 
                    height={180} 
                    src="https://nomowsoft.github.io/sahabi_website/blank-profile-picture.jpg" 
                    alt="..."
                  />
                </div>
                <div className="mt-4">
                  <h5 className="name">
                    الشيخ/ قيس خلف عبدالله الرفاعي
                  </h5>
                  <h5 className="description">رئيس اللجنة الشرعية</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper_commission">
              <div>
                <div>
                  <img 
                    className="border border-5 rounded-pill" 
                    width={180} 
                    height={180} 
                    src="https://nomowsoft.github.io/sahabi_website/blank-profile-picture.jpg" 
                    alt="..."
                  />
                </div>
                <div className="mt-4">
                  <h5 className="name">
                    الشيخ/ حاتم أحمد محفوض
                  </h5>
                  <h5 className="description">المستشار الفني</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper_commission">
              <div>
                <div>
                  <img 
                    className="border border-5 rounded-pill" 
                    width={180} 
                    height={180} 
                    src="https://nomowsoft.github.io/sahabi_website/blank-profile-picture.jpg" 
                    alt="..."
                  />
                </div>
                <div className="mt-4">
                  <h5 className="name">الشيخ / علي فالح نصار</h5>
                  <h5 className="description">عضو</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper_commission">
              <div>
                <div>
                  <img 
                    className="border border-5 rounded-pill" 
                    width={180} 
                    height={180} 
                    src="https://nomowsoft.github.io/sahabi_website/blank-profile-picture.jpg" 
                    alt="..."
                  />
                </div>
                <div className="mt-4">
                  <h5 className="name">
                    الشيخ/ محمد صالح معيان
                  </h5>
                  <h5 className="description">عضو</h5>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  )
}

export default Commission
