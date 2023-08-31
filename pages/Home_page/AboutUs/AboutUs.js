import React from 'react'

const About = ({ khatamati_audible_count, total_read_khatamati, user_ids_count, number_downloads }) => {
  return (
    <div>
      <section className="content">
        <section id="counters-blk" className="my-5 py-2">
          <div className="container">
            <div className="counters-wrapper">
              <div className="counter-item aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">
                <div className="counter-ico">
                  <img src="https://nomowsoft.github.io/sahabi_website/hearing.png" alt=""/>
                </div>
                <span className="count">{khatamati_audible_count}</span>
                <h6>الختمات المسموعة</h6>
              </div>
              <div className="counter-item aos-init aos-animate" data-aos="zoom-in" data-aos-delay="500">
                <div className="counter-ico">
                  <img src="https://nomowsoft.github.io/sahabi_website/reading.png" alt=""/>
                </div>
                <span className="count">{total_read_khatamati}</span>
                <h6>الختمات المقروءة</h6>
              </div>
              <div className="counter-item aos-init aos-animate" data-aos="zoom-in" data-aos-delay="700">
                <div className="counter-ico">
                  <img src="https://nomowsoft.github.io/sahabi_website/users.png" alt=""/>
                </div>
                <span className="count">{user_ids_count}</span>
                <h6>المستخدمين</h6>
              </div>
              <div className="counter-item aos-init aos-animate" data-aos="zoom-in" data-aos-delay="800">
                <div className="counter-ico">
                  <img src="https://nomowsoft.github.io/sahabi_website/downloads.png" alt=""/>
                </div>
                <span className="count">{number_downloads}</span>
                <h6>تحميل التطبيق</h6>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default About
