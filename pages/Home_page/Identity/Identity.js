import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Identity = () => {
  return (
    <div className="container mt-4">
      <header>
        <div className="row no-gutters">
          <div className="col-lg-6 col-md-7 align-self-center">
            <div className="site-descp">
              <h1 className="site-title my-3 aos-init aos-animate" data-aos="fade-zoom-in">
                القرآن صاحبي
              </h1>
              <div>
                <div className="py-3 aos-init aos-animate" data-aos="fade-down">
                  <p>
                  تطبيق يقوم بتحديد ورد يومي للقراء للمساهمة في نشر ثقافة قراءة القرآن الكريم والمواظبة عليها. يقوم مستخدم التطبيق بتحديد الورد اليومي الذي يرغب فالمواصلة عليها وتحديد مكان قراءة الورد "داخل التطبيق – خارجه"أو الاشتراك في مجموعات لقراءة القران بشكل منفصل او الاشتراك بختمه واحده.
                  </p>
                </div>
                <Link href="/aboutus" className="btn btn-secondary aos-init aos-animate" data-aos="fade-down">
                  المزيد عنا
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-5">
            <div className="site-img aos-init aos-animate" data-aos="zoom-in">
              <img src="https://nomowsoft.github.io/sahabi_website/flyingPh.png" alt="flyingPh"/>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Identity
