import Identity from "./Home_page/Identity"
import About from "./Home_page/AboutUs"
import Defind from "./Home_page/Defind"
import Guide from "./Home_page/Guide"
import Favor from "./Home_page/Favor"
import Commission from "./Home_page/Commission"
import { React, useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css";

export const getStaticProps = async () => {
  const res_statistics = await fetch("https://sahbi.nomowsoft.com/api/get/statistics");
  const data_statistics = await res_statistics.json();
  return {
    props: {
      statistics: data_statistics.data[0],
    },
  };
};

export default function Home({
  statistics,
  
}){
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
  }, [])
  return (
    <div>
      <Identity/>
      <About statistics={statistics}/>
      <Defind/>
      <Guide/>
      <Favor/>
      <Commission/>
    </div>
  );
}
