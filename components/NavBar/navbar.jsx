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
            <Link className="desktopMenuListItem">Home</Link>
            <Link className="desktopMenuListItem">About</Link>
            <Link className="desktopMenuListItem">Education</Link>
            <Link className="desktopMenuListItem">Projects</Link>

           </div>
           <button className="desktopMenuBtn">
            <img src={contactme} alt="" className="desktopMenuImg" />
           </button>
        </nav>
    )
}

export default Navbar