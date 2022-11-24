import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Demo from "./components/Demo";
import Footer from "./components/Footer";

function App() {
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

export default App;
