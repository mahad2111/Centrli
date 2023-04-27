import React,{useState} from 'react';
import CentrliLogo from '../navbar/favicon-16x16.png';
import './Navbar.css';
import {AiOutlineBars} from "react-icons/ai";
import {RiCloseLine} from "react-icons/ri";
const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false)
  const toggleMenu = () =>{
    setshowMenu(!showMenu);
    
  }
  return (
    <nav className='container navbar'>
    <div className='logo'>
    <img src= {CentrliLogo} size={33} />
   <p className='logo-text'>
    Centrli
   </p>
    </div>
    <menu>
<ul className='nav-links' id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide" }>
<li><a href='#'>Home</a></li>
<li><a href='#'>Events</a></li>
<li><a href='#'>Listings</a></li>
<li><a href='#'>About Us</a></li>
<li className='nav-btn'><a href='#' className='btn btn-light'>Sign In</a></li>
<li className='nav-btn2'><a href='#' className='btn btn-light'>Get Started</a></li>


</ul>
    </menu>
    <div className='menu-icons' onClick={toggleMenu}>
      {
        showMenu ? <RiCloseLine color="#fff" size={30} /> :
        <AiOutlineBars color="#fff" size={37} />
      }
    </div>
    </nav>

  )
}

export default Navbar