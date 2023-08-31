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
      khatamati_audible_count: data_statistics.data[0].khatamati_audible_count,
      total_read_khatamati: data_statistics.data[0].total_read_khatamati,
      user_ids_count: data_statistics.data[0].user_ids_count,
      number_downloads: data_statistics.data[0].number_downloads,
    },
  };
};

export default function Home({
  khatamati_audible_count,
  total_read_khatamati,
  user_ids_count,
  number_downloads,
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
      <About 
        khatamati_audible_count={khatamati_audible_count} 
        total_read_khatamati={total_read_khatamati}
        user_ids_count={user_ids_count}
        number_downloads={number_downloads}
      />
      <Defind/>
      <Guide/>
      <Favor/>
      <Commission/>
    </div>
  );
}
