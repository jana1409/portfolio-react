import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
//import {ThemeProvider} from '@material-ui/styles';
import MainRouter from '../MainRouter'
//import Contact from './contact'
//import theme from '../theme';
//import {hot} from 'react-hot-loader'
import Navbar from '../components/NavBar/navbar';
import Intro from '../components/Intro/intro';
import Skills from '../components/Skills/skills';
import Contact from "../components/Contact/contact";
import Works from '../components/Works/works';
import Footer from '../components/Footer/footer';


const App = () => {
  return(
    <Router>
      <MainRouter />
      <Navbar />  
      <Intro/>
      <Skills />
      <Contact/>
      <Works />
      <Footer />
      
    </Router>
  );
}

export default App;