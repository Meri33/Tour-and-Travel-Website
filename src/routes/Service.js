import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";

import Heroimg from '../assets/10.jpg'
import Footer from "../components/footer/Footer";
import Trip from "../components/trip/Trip";


function Service (){
    return(
<>
<Navbar/>
 
 
<Hero
    cName = "hero-service"
    heroImg ="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/08/39/5d/bd.jpg"
    title = " Service"
    text = "Choose Your Favourite Destination"
   
/> 
<Trip/>
<Footer/> 
</>
    )
}

export default Service;