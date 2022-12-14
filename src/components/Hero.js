import React from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './Hero.module.css'

const Hero = () => {
   const navigate=useNavigate();
   
    return (
        <div className={classes.hero}>
            <div className={classes.header}>
            <ul>
                <li>About Us</li>
                <li onClick={() => {navigate("./login")}}>Login</li>
                <li onClick={() => {navigate("./who_r_u")}}>SignUp</li>
            </ul>
            </div>
            <div className={classes.box}>
            <div className={classes.content}>
                <p></p>
                <p>Connect With Us</p>
                <p>Give Your Startup's a Boom</p>
                <p>"With Us gave company a new Wing" </p>
                <button href='/' className={classes.button} onClick={() => {navigate("/who_r_u")}} >Connect With Us</button>
            </div>
            </div>
        </div>
    )
}

export default Hero
