import "./App.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skill from "./components/Skill";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Work from "./components/Work";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <>
      {/* <h1> Testing hello there </h1> */}
      <Navbar />
      <HeroSection />
      <About />
      <Process />
      <Work />
      <Skill />
      <Portfolio />
      <Footer />
      <ScrollTop />
    </>
  );
}

export default App;
