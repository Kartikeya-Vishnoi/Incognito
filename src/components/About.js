import React from "react";
import aboutimg from "./images/about.jpeg";
import "./About.css";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
    <Navbar />
    <div className="heading">
        What do we Do?
    </div>
    <div className="about">
      <div className="photo">
        <img src={aboutimg} height="500px" width="600px"/>
      </div>
      <div className="info">
        <p>
          There are still blomming ideas in Idea that are not able to find
          assistance financially and morally.. Ideas that can serve humanity.
          16% of ideas are not implemented due to lack of Capitals... There are
          Investors and VC's out there that are willing to provide a helping
          hand and capitalize on these many deserving ideas that can give Indian
          Economy a boom.
        </p>
      </div>
    </div>
    </>
  );
};

export default About;