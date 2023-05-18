import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import AboutUs from "../components/Aboutus/AboutUs"




function About (){
    return(
<>
<Navbar/>

<Hero
    cName = "hero-about"
    heroImg = "https://github.com/tech2etc/React-Trippy-Tour-Website-Template/blob/main/src/assets/night.jpg?raw=true"
   
  
   
/>
<AboutUs/>
  <Footer/>  
</>
    )
}

export default About;