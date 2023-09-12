import Section from "./About_us/Section"
import Our from "./About_us/Our"
import Projectes from "./About_us/Projectes"
import Said from "./About_us/Said"


export const getStaticProps = async () => {
  try {
    const res_about_us = await fetch("https://sahbi.nomowsoft.com/api/get/about_us");
    const data_about_us = await res_about_us.json();
    return {
      props: {
        about_us: data_about_us.data[0].about_us,
        projects: data_about_us.data[0].projects,
        said_about_us: data_about_us.data[0].said_about_us,
      },
    };
  } catch (error) {
      console.log("ali")
  }
};

export default function aboutus({
  about_us,
  projects,
  said_about_us,
}){
  return (
    <div>
      <Section/>
      <Our about_us={about_us}/>
      <Projectes projects={projects}/>
      <Said said_about_us={said_about_us}/>
    </div>
  );
}
