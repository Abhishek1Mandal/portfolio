import { useEffect } from "react";
import Aos from "aos";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";

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
