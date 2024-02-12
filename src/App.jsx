import { useState } from "react";
import Nav from "./components/Nav";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="bg-sky-300 min-h-screen font-custom">
        <Nav />
        <Introduction />
        <About />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </>
  );
}
