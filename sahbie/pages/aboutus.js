import Section from "./About_us/Section"
import Our from "./About_us/Our"
import Projectes from "./About_us/Projectes"
import Said from "./About_us/Said"
import { React, useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css";

const aboutus = () => {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
  }, [])
  return (
    <div>
      <Section/>
      <Our/>
      <Projectes/>
      <Said/>
    </div>
  )
}

export default aboutus
