import React from "react";
import Navbar from "../Navbar";
import About from "../About";
import Hero from "../Hero";
import Testimonials from "../Testimonials";
import Demo from "../Demo";
import Footer from "../Footer";

function Home() {
  return (
    <>
   <Navbar />
   <Hero />
   <About />
   <Testimonials/>
   {/* <Demo /> */}
   <Footer />
    </>
  );
}

export default Home;
