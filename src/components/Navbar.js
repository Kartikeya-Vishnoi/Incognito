import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from './images/logo2.jpg'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const navigate=useNavigate()

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            {/* <nav className='navbar'> */}
                    {/* <a href='/' className='logo'>
                        <img src={logo} alt='logo' />
                    </a> */}
                {/* <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div> */}

            <div className='compname'>
                <h1>ONICORN</h1>
            </div>

                <div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/about' onClick={closeMenu}>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials' onClick={closeMenu}>Testimonials</a>
                    </li>
                    <li className='nav-item' onClick={() => {navigate("/login")}}>
                        <a href=''>Log in</a>
                    </li>
                </ul>
                </div>
            {/* </nav> */}
        </div>
    )
}

export default Navbar