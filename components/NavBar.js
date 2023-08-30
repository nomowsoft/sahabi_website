import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';

const NavBar = () => {
  const [show, setshow] = useState(false);
  const router = useRouter();
  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) {
        setScrolled(true);
      }
      else {
        setScrolled(false);
      }
  }
  useEffect(() => {
      window.addEventListener('scroll', handleScroll)
  })
  return (
    <navbar>
     <nav className={scrolled ? 'navbar navbar-expand-lg main-nav sticky-menu' : 'navbar navbar-expand-lg main-nav'}>
        <div className="container">
            <div>
                <Link className="navbar-brand" href="https://sahibi.app">
                    <Image data-src="/saheby-logo.png" src="/saheby-logo.png" width={50} height={50} className="logo ls-is-cached lazyloaded" alt=""/>
                </Link>
            </div>
            <button 
              onClick={() => setshow((prevshow) => !prevshow)}
              className={show ? 'navbar-toggler order-0' : 'navbar-toggler order-0 collapsed'}
              type="button" 
              data-toggle="collapse" 
              data-target="#navbarSupportedContent" 
              aria-controls="navbarSupportedContent" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={show ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'}  id="navbarSupportedContent">
                <ul className="navbar-nav mb-2">
                    <li className={`${router.pathname === "/" ? "nav-item active" : "nav-item"}`}>
                        <Link className="nav-link" href="/">الرئيسية</Link>
                    </li>
                    <li className={`${router.pathname === "/aboutus" ? "nav-item active" : "nav-item"}`}>
                        <Link className="nav-link" href="/aboutus">نبذة عنا</Link>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link" href="#">اتصل بنا</Link>
                    </li>

                </ul>
            </div>
            <div className="stores-lnks d-flex">
                <span className="main-color">حمل التطبيق : </span>
                <Link href="https://play.google.com/store/apps/details?id=com.roqay.saheby" className="google-store mx-2" target="_blank">
                    <svg className="svg-inline--fa fa-play fa-w-14 mx-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
                    جوجل بلاي            </Link>
                <Link href="https://apps.apple.com/sa/app/%D8%B5%D8%A7%D8%AD%D8%A8%D9%8A/id1552876759" className="app-store mx-2" target="_blank">
                    <svg className="svg-inline--fa fa-apple fa-w-12 mx-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                    ابل ستور            </Link>
            </div>
        </div>
      </nav>
    </navbar>
  )
}

export default NavBar
