import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Capabilities from "../components/Capabilities";
import Industries from "../components/Industries";
import Leadership from "../components/Leadership";
import Differentiators from "../components/Differentiators";
import Methodology from "../components/Methodology";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Capabilities />
      <Industries />
      <Leadership />
      <Differentiators />
      <Methodology />
      <Contact />
      <Footer />
    </>
  );
}