import { useEffect } from "react";
import Aos from "aos";
import "../App.css";

import Header from "../MainPages/Header";
import Footer from "../MainPages/Footer";
import Hero from "../MainPages/Hero";
import Services from "../MainPages/Services";
import Portfolio from "../MainPages/Portfolio";
import Contact from "../MainPages/Contact";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // You can adjust the duration as needed.
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
