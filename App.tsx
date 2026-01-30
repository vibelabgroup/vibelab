import React from 'react';
import Navigation from './components/Navigation.tsx';
import Hero from './components/Hero.tsx';
import Manifesto from './components/Manifesto.tsx';
import Expertise from './components/Expertise.tsx';
import CallToAction from './components/CallToAction.tsx';
import Footer from './components/Footer.tsx';
import CustomCursor from './components/CustomCursor.tsx';

const App: React.FC = () => {
  return (
    <>
      <CustomCursor />
      <Navigation />
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