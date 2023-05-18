import React, { useState } from 'react';
import './navbar.css';
import { MenuItems } from "../menu/MenuItems";
import { Link } from 'react-router-dom';



const Navbar = () => {
const [toggle,setToggle] = useState(true);
const [active,setActive] = useState(true)
const handleClick = () => {
  setToggle(!toggle);
  setActive(false)
 
 
}


  return (
   <nav className="NavbarItems ">
    <h1 className="navbar-logo">Trippy</h1>

    <div className="menu-icons"
    onClick={handleClick}
    >
    <i className={toggle ? "fas fa-bars" : "fas fa-times"}></i>
     
    
    </div>

    <ul className={active ? "nav-menu " : "nav-menu active"}>
    {
      MenuItems.map((item,index)=>{
        return(
          <li key={index}>
        <Link className={item.cName} to={item.url}>
        <i className={item.icon}></i>
        {item.title}</Link>
      </li>
        )
      })
    }
     <button>Sign Up</button>
    </ul>
   </nav>
  )
}

export default Navbar