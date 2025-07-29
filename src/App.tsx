import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Work';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Projects />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;