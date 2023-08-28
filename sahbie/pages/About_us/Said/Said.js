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

const Said = () => {
  return (
    <section className="bg-light">
    <div className="container py-5">
      <h3 class="wz-aftr-b4 centered-aftr mt-3 mb-4 font-weight-bold text-center aos-init aos-animate" data-aos="fade-down">
        قالوا عنا
      </h3>
      <Swiper
        data-aos="fade-up"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        // breakpoints={{
        //   "@0.00": {
        //     slidesPerView: 1,
        //   },
        //   "@0.75": {
        //     slidesPerView: 2,
        //     slidesPerGroup: 2,
        //   },
        //   "@1.00": {
        //     slidesPerView: 3,
        //     slidesPerGroup: 3,
        //   },
        //   "@1.50": {
        //     slidesPerView: 4,
        //     slidesPerGroup: 4,
        //   },
        // }}
        // navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="swiper_Said">
          <div class="tes-item item">
            <div class="tes-img">
                <div class="tes-img-inner">
                    <Image src="/dr.jpg" width={100} height={100} alt=""/>
                </div>
            </div>
            <div class="tes-col">
              <div class="tes-dets">
                  <h5>هنيئا لكم ...</h5>
                  <p>
                      لا شك أن عملا بهذا الحجم وسعة النشاط يشرف من يسانده ماديا ومعنويا، فشرفه من شرف موضوعه وهو القرآن الكريم، فهنيئا لمن كانت له يد في خدمة كتاب الله تعالى.
                  </p>
              </div>
              <div class="tes-footer">
                  <h4>
                      أ. د. عجيل جاسم النشمي
                  </h4>
                  <p>
                      عميد كلية الشريعة - الكويت - سابقا
                  </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper_Said">
          <div class="tes-item item">
            <div class="tes-img">
                <div class="tes-img-inner">
                    <Image src="/dr.jpg" width={100} height={100} alt=""/>
                </div>
            </div>
            <div class="tes-col">
              <div class="tes-dets">
                  <h5>هنيئا لكم ...</h5>
                  <p>
                      لا شك أن عملا بهذا الحجم وسعة النشاط يشرف من يسانده ماديا ومعنويا، فشرفه من شرف موضوعه وهو القرآن الكريم، فهنيئا لمن كانت له يد في خدمة كتاب الله تعالى.
                  </p>
              </div>
              <div class="tes-footer">
                  <h4>
                      أ. د. عجيل جاسم النشمي
                  </h4>
                  <p>
                      عميد كلية الشريعة - الكويت - سابقا
                  </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
  )
}

export default Said
