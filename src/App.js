import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Team from "./components/Team";
import WhyMast from "./components/WhyMast";


function App() {

  const [isMenuShown, setIsMenuShown]= useState(false);
  return (
    <div>
      <Navbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown}/>
      <HeroSection isMenuShown={isMenuShown}/>
      <About/>
      <Team/>
      <WhyMast/>
      <Contact/>
    </div>
  );
}

export default App;
