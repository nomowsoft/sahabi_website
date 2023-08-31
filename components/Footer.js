import React from "react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="text-center p-0 m-0">
      <div className="container">
          <div className="row">
              <div className="col-lg-4">
                  <img 
                    data-src="https://nomowsoft.github.io/sahabi_website/saheby-logo.png" 
                    src="https://nomowsoft.github.io/sahabi_website/saheby-logo.png" 
                    className="logo d-block pt-5 ls-is-cached lazyloaded" 
                    width="280" 
                    alt=""
                  />
              </div>
              <div className="col-lg-4">
                  <div className="footer-top">

                      <div className="pt-5">
                          <h2 className="font-weight-bold mb-3 aos-init aos-animate" data-aos="fade-down">تبرع و ادعم و شارك</h2>
                          <h5 className="mb-3">
                              للمساهمة والتبرع لأحد مشاريع حفاظ اضغط هنا
                          </h5>
                      </div>

                      <div className="stores-lnks d-flex justify-content-center  my-4 mb-1 ">
                          <Link 
                            href="https://hofath.org/projects" 
                            className="google-store mx-2  btn btn-secondary text-white" 
                            target="_blank"
                          >
                              تبرع الان
                          </Link>
                      </div>

                      <div className="footer-list mb-5">
                          <Link className="mx-2" href="/">الرئيسية</Link>
                          <Link className="mx-2" href="/aboutus">نبذة عنا</Link>
                          <Link className="mx-2" href="#">اتصل بنا</Link>
                          <Link className="mx-2" href="#">سياسة الخصوصية</Link>
                      </div>
                  </div>
              </div>
              <div className="col-lg-4">
                  <img src="https://nomowsoft.github.io/sahabi_website/chart.png" className="logo pt-5 ls-is-cached lazyloaded"/>
              </div>
          </div>
      </div>
      <div className="copy-rights">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-3">
                <span className="span-email">
                  info@7ofaath.com
                  <svg 
                    className="svg-inline--fa fa-mail-bulk fa-w-18 mx-2" 
                    aria-hidden="true" 
                    focusable="false" 
                    data-prefix="fas" 
                    data-icon="mail-bulk" 
                    role="img" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 576 512" 
                    data-fa-i2svg=""
                  >
                    <path 
                      fill="currentColor" 
                      d="M160 448c-25.6 0-51.2-22.4-64-32-64-44.8-83.2-60.8-96-70.4V480c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32V345.6c-12.8 9.6-32 25.6-96 70.4-12.8 9.6-38.4 32-64 32zm128-192H32c-17.67 0-32 14.33-32 32v16c25.6 19.2 22.4 19.2 115.2 86.4 9.6 6.4 28.8 25.6 44.8 25.6s35.2-19.2 44.8-22.4c92.8-67.2 89.6-67.2 115.2-86.4V288c0-17.67-14.33-32-32-32zm256-96H224c-17.67 0-32 14.33-32 32v32h96c33.21 0 60.59 25.42 63.71 57.82l.29-.22V416h192c17.67 0 32-14.33 32-32V192c0-17.67-14.33-32-32-32zm-32 128h-64v-64h64v64zm-352-96c0-35.29 28.71-64 64-64h224V32c0-17.67-14.33-32-32-32H96C78.33 0 64 14.33 64 32v192h96v-32z"
                    >
                    </path>
                  </svg>
                </span>
              </div>
              <div className="col-lg-6">
              موقع و تطبيق صاحبي، تصميم و برمجة شركة 
                <Link 
                  href="https://www.nomowsoft.com" 
                  target="_blank" 
                  className="text-secondary px-2"
                >
                  نمو للبرمجيات
                </Link>
              </div>
              <div className="col-lg-3">
                <span className="span-phone">
                  96565524409+
                  <svg 
                    className="svg-inline--fa fa-phone fa-w-16 mx-2" 
                    aria-hidden="true" 
                    focusable="false" 
                    data-prefix="fas" 
                    data-icon="phone" 
                    role="img" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 512 512" 
                    data-fa-i2svg=""
                  >
                    <path 
                      fill="currentColor" 
                      d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                    >
                      </path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer
