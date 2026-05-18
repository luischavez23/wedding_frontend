import { useEffect } from "react";

import Hero from './components/Hero'
import Parents from './components/Parents'
import About from './components/About';
import Gallery from "./components/Gallery";
import Ceremony from "./components/Ceremony";
import DressCode from "./components/DressCode";
import Gift from "./components/Gift";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Hero />
      <Parents />
      <About />
      <Gallery />
      <Ceremony />
      <DressCode />
      <Gift />
      <RSVP />
      <Footer /> 
    </>
  )
}

export default App
