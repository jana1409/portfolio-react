import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
//import {ThemeProvider} from '@material-ui/styles';
import MainRouter from '../MainRouter'
//import Contact from './contact'
//import theme from '../theme';
//import {hot} from 'react-hot-loader'
import Navbar from '../components/NavBar/navbar';
import Intro from '../components/intro/intro';
import Skills from '../components/Skills/skills';
import Contact from "../components/Contact/contact";
import Works from '../components/Works/works';
const App = () => {
  return(
    <Router>
      <MainRouter />
      <Navbar />  
      <Intro/>
      <Skills />
      <Contact/>
      <Works />

    </Router>
  );
}

export default App;