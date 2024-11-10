import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Skill from './Components/Skill';
import { ScrollProvider } from './Components/ScrollContext';
import Project from './Components/Project';
import Cantact from './Components/Cantact'
import Footer from './Components/Footer';


function App() {
  return (
   <div>
    <ScrollProvider>
   <Header/>
   <Home/>
   <AboutMe/>
   <Skill/>
   <Project/>
   <Cantact/>
   <Footer/>
   </ScrollProvider>
   </div>
);
}

export default App;
