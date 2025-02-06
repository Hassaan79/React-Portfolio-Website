import React from 'react';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
