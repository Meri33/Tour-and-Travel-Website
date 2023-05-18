import Navbar from "../components/navbar/Navbar";
import Heroimg from '../assets/11.jpg'
import Hero from "../components/hero/Hero";
import Footer from "../components/footer/Footer";
import ContactUs from "../components/contactus/ContactUs";


function Contact (){
    return(
<>
<Navbar/>
  
  
<Hero
    cName = "hero-contact"
    heroImg ="https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    title = " Contact Us"
   

  
/>
<ContactUs/>
<Footer/> 
</>
    )
}

export default Contact;