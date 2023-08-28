import Identity from "./Home_page/Identity"
import About from "./Home_page/AboutUs"
import Defind from "./Home_page/Defind"
import Guide from "./Home_page/Guide"
import Favor from "./Home_page/Favor"
import Commission from "./Home_page/Commission"
import { React, useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
  }, [])
  return (
    <>
      <Identity/>
      <About/>
      <Defind/>
      <Guide/>
      <Favor/>
      <Commission/>
    </>
  )
}
