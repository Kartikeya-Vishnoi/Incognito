import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="about-us">
            <h2>About Us</h2>
            <p>
              There are still blomming ideas in Idea that are not able to find assistance financially and morally.. Ideas that can serve humanity. 16% of ideas are not implemented due to lack of Capitals... There are Investors and VC's out there that are willing to provide a helping hand and capitalize on these many deserving ideas that can give Indian Economy a boom.
              <b> So what are you waiting for. Checkout Onicron Now!</b>
            </p>
            <ul className="social-media">
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
          <div className="quicklinks">
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
          <div className="contact-us">
            <h2>Contact Us</h2>
            <ul className="details">
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
      <div className="copyright">
        <p>Copyright © 2022 Onicron. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;