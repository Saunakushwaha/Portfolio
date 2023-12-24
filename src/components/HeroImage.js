import "./HeroImagestyles.css";
import React from 'react';

import Saunak from "./assets/Saunak (3).jpg";

const Heroimage = () => {
  return (
    <>
    <div className="hero">
      <div className="content">
        <div className="main-Image">

          <img className="selfImage" src={Saunak} alt="saunak" />
        </div>
        <div className="aboutme">
          <h2>MY NAME IS.....</h2>
          <h2>SAUNAK KUSHWAHA</h2>
          <div className="block">I'M A REACT DEVELEPOR</div>
        </div>

      </div>




      <div className="hero-con">
        <div className="discription">
          <div className="heading1"><h2>who am I ??</h2></div>
          <div className="aboutme2">
            <p><h3>Greetings!</h3>I'm a passionate <span style={{ fontWeight: "bold" }}>React developer</span>, dedicated to crafting seamless and engaging user experiences through the power of cutting-edge web technologies.</p>

            <p>With a strong foundation in <span style={{ fontWeight: "bold" }}>Data Structures and Algorithms (DSA)</span>, I thrive on solving complex problems and optimizing code for efficiency.</p>


            <p> I am a fervent tech enthusiast, constantly exploring the ever-evolving landscape of technology. I believe in the transformative potential of innovation and am committed to staying at the forefront of the tech world.</p>
          </div>

        </div>

      </div>

    </div>
     {/* <div className="underline"></div> */}
     </>
  )
}

export default Heroimage
