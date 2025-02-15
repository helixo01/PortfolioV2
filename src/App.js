import React from 'react';
import Hero from './features/hero/Hero';
import Header from './features/header/Header';
import About from './features/about/About';
import Projects from './features/projects/Projects';
import Skills from './features/skills/Skills';
import Contact from './features/contact/Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <Hero />
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
