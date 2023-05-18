import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Heroimg from '../assets/12.jpg'
import Destination from "../components/destination/Destination";
import Trip from "../components/trip/Trip";
import Footer from "../components/footer/Footer";


function Home (){
    return(
<>
<Navbar/>
<Hero
    cName = "hero"
    heroImg = {Heroimg}
    title = " Your Journey Your Story"
    text = "Choose Your Favourite Destination"
    buttonText = "Travel Plan"
    url = "/"
    btnClass = "show"
/>

<Destination/>
<Trip/>
<Footer/>
</>
    )
}

export default Home;