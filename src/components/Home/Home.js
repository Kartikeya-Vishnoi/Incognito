import React from "react";
import Navbar from "../Navbar";
import About from "../About";
import Hero from "../Hero";
import Testimonials from "../Testimonials";
import Demo from "../Demo";
import Footer from "../Footer";
import Slider  from "../Slider";
import classes from "./Home.module.css"

function Home() {
  return (
    <div className={classes.home}>
   <Hero />
   <Footer />
    </div>
  );
}

export default Home;
