import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Specials from "./components/Specials";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="font-[Cabin] text-[#3e2f1c] dark:text-[#fefaf3] bg-[#fff8f0] dark:bg-[#1a120b] scroll-smooth">
      <Header toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      <Hero toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode}/>
      <About />
      <Menu />
      <Specials />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
