import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Expertise from './components/Expertise';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Expertise />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
};

export default App;