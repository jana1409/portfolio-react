import React from 'react'
import './navbar.css'
import logoP from '../../src/assets/logoP.png';
import contactme from '../../src/assets/contactme.png';
import { Link } from 'react-scroll';

const Navbar = () =>{
    return (
        <nav className="navbar">
           <img src={logoP} alt="logo" className='logo'/>
           <div className="desktopmenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Education</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Projects</Link>

           </div>
           <button className="desktopMenuBtn">
            <img src={contactme} alt="" className="desktopMenuImg" />
           </button>
        </nav>
    )
}

export default Navbar