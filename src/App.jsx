import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from '../MainRouter';
import Navbar from '../components/NavBar/navbar';
import Intro from '../components/Intro/intro';
import Skills from '../components/Skills/skills';
import Contact from '../components/Contact/contact';
import Works from '../components/Works/works';
import Footer from '../components/Footer/footer';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        {/* MainRouter is usually responsible for defining route paths */}
        <MainRouter />
        {/* Common components like Intro, Skills, etc., can be rendered within specific routes or globally */}
        <Intro />
        <Skills />
        <Works />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
