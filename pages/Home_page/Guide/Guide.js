import React from 'react';
import { useState, useRef } from "react";

const Guide = () => {
  const videoRef = useRef();
  const [showImage, setShowImage] = useState(true)
  const togglePlay = () =>{
    if(videoRef.current.paused){
      videoRef.current.play();
      setShowImage(false);
    }else{
      videoRef.current.pause();
      setShowImage(true);
    }
    setShowImage(!showImage)
  };
  return (
    <div>
      <section id="vids-blk" className="mb-5">
        <div className="container">
          <div className="mt-3 pb-3">
            <h3 className="wz-aftr-b4 centered-aftr font-weight-bold text-center mb-4 aos-init aos-animate" data-aos="fade-down">
            ‫ ‫تطبيق‬   
              <span className="main-color"> القرآن صاحبي </span> 
            </h3>
          </div>
          <div className="row">
            <div className="col-md-12 mb-5 mb-md-0 text-center">
              <h6 className="sub-tit aos-init aos-animate" data-aos="fade-zoom-in">
              دليل المستخدم 
              </h6>
              <p data-aos="fade-zoom-in" className="aos-init aos-animate">
                دليل المستخدم للتطبيق
              </p>
              <div className="vid-wrapper aos-init aos-animate" data-aos="zoom-in">
                <video controls={showImage ? false : true} ref={videoRef} onClick={togglePlay}>
                  <source src="https://nomowsoft.github.io/sahabi_website/vedio_sahipi.mp4" type="video/mp4"/>
                            Sorry, your browser doesn't support embedded videos.
                </video>
                {showImage &&
                  <div className="vid-poster" onClick={togglePlay}>
                    <img src="https://nomowsoft.github.io/sahabi_website/image_Quran.jpeg" alt="..."/>
                    <div className="vid-play-ico">
                      <svg 
                        className="svg-inline--fa fa-play-circle fa-w-16" 
                        aria-hidden="true" 
                        focusable="false" 
                        data-prefix="fas" 
                        data-icon="play-circle" 
                        role="img" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 512 512" 
                        data-fa-i2svg=""
                        >
                          <path 
                            fill="currentColor" 
                            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
                          >
                          </path>
                      </svg>
                    </div>
                  </div> 
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Guide
