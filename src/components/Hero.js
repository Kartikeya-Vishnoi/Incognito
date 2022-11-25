import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
   const navigate=useNavigate();
   
    return (
        <div className='hero'>
            <div className='content'>
                <p></p>
                <p>Connect With Us</p>

                <p>Give Your Startup's a Boom</p>
                <p>"With Us gave company a new Wing" </p>
                <button href='/' className='button' onClick={() => {navigate("/Signup")}} >Connect With Us</button>
            </div>
        </div>
    )
}

export default Hero
