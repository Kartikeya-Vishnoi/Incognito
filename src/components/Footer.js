import React from "react";
import styled from "styled-components";
import classes from "./Footer.module.css"

const Footer = () => {
  return (
    <FormContainer>
      <div className={classes.footer}>
        <div className={classes.container}>
          <div className={classes.aboutus}>
            <h2>About Us</h2>
            <p>
              There are still blomming ideas in Idea that are not able to find assistance financially and morally.. Ideas that can serve humanity. 16% of ideas are not implemented due to lack of Capitals... There are Investors and VC's out there that are willing to provide a helping hand and capitalize on these many deserving ideas that can give Indian Economy a boom.
              <b> So what are you waiting for. Checkout Onicron Now!</b>
            </p>
            <ul className={classes.socialmedia}>
              <li>
                <a href="">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-brands fa-square-instagram"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className={classes.quicklinks}>
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#demo">Demo</a>
              </li>
            </ul>
          </div>
          <div className={classes.contactus}>
            <h2>Contact Us</h2>
            <ul className={classes.details}>
              <li>
                <span>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                </span>
                <span>
                  Dayananda Sagar College of Engineering, Kumaraswamy Layout, Bangalore-560078
                </span>
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-phone"></i>
                </span>
                <span>7903025691</span>
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <span>onicorn@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={classes.copyright}>
      Copyright © 2022 Onicron. All Rights Reserved.
      </div>
      </FormContainer>
  );
};

export default Footer;
const FormContainer=styled.div`
// @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative&display=swap');

// .footer {
//     display: flex;
//     justify-content: space-between;
//     flex-wrap: wrap;
//     font-family: 'Poppins', sans-serif;
//     color: #fff;
//     margin-top: 80px;
//     width: 100%;
//     height: 220px;
// }

// .footer .container {
//     display: flex;
//     justify-content: space-between;
//     flex-wrap: wrap;
//     flex-direction: row;
//     background-color: black;
// }

// .footer .container .about-us {
//     margin-right: 50px;
//     width: 40%;
//     padding-left: 40px;
// }

// .footer .container .about-us h2 {
//     position: relative;
//     font-weight: 600;
//     font-size: 30px;
//     color: white;
//     margin-bottom: 15px;
//     padding-top: 30px;
// }

// .footer .container .about-us p {
//     font-weight: 300;
// }

// .social-media {
//     display: flex;
//     margin-top: 20px;
// }

// .social-media li {
//     list-style: none;
// }

// .social-media li a {
//     display: inline-block;
//     width: 40px;
//     height: 40px;
//     margin-right: 30px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background: black;
//     text-decoration: none;
//     border-radius: 4px;

// }

// .social-media li a:hover {
//     border: 2px solid white;
// }

// .social-media li a .fa-brands {
//     color: #fff;
//     font-size: 20px;
// }

// .quicklinks h2 {
//     margin-right: 60px;
//     position: relative;
//     font-weight: 600;
//     font-size: 30px;
//     color: white;
//     margin-bottom: 15px;
//     padding-top: 30px;
// }

// .quicklinks li {
//     list-style: none;
//     line-height: 40px;
// }

// .quicklinks li a {
//     color: white;
//     margin-right: 60px;
//     text-decoration: none;
// }

// .quicklinks li a:hover {
//     text-decoration: underline;
// }

// .contact-us {
//     width: 350px;
//     margin-right: 10px;
//     padding-right: 40px;
// }

// .contact-us h2 {
//     margin-left: 40px;
//     font-size: 30px;
//     margin-bottom: 15px;
//     color: white;
//     padding-top: 30px;
// }

// .contact-us .details {
//     position: relative;
// }

// .contact-us .details li {
//     display: flex;
//     margin-bottom: 13px;
//     list-style: none;
// }

// .contact-us .details li span {
//     margin-right: 12px;
// }

// .copyright {
//     width: 100%;
//     /* background-color: black; */
//     color: white;
//     text-align: center;
//     font-family: 'Poppins', sans-serif;
//     font-size: 18px;
//     margin-top: 70px;
//     font-weight: 600;
// }
// `