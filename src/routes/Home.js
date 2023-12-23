import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import HeroImage from "../components/HeroImage";
import Project from "../routes/Project"
import About from './About';
import Footer from '../components/Footer';

const home = () => {
  return (
    <div>
      <Navbar />
      <HeroImage />
      <About/>
     <Project/>     
      <Footer/>
    </div>
  )
};

export default home;
