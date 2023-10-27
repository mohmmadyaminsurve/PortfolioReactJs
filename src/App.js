import "./App.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skill from "./components/Skill";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";

function App() {
  return (
    <>
      {/* <h1> Testing hello there </h1> */}
      <Navbar />
      <HeroSection />
      <About />
      <Process />
      <Skill />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
