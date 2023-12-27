import "./HeroImagestyles.css";
import React from 'react';


import Picture3 from "./assets/Picture3.png"
const Heroimage = () => {
  const goToProjects = () => {
    window.scrollTo({ top: 1400, left: 0, behavior: "smooth" });
  
}

  return (
    <>
      <div className="hero">
       

          <div className="aboutme">
            <div className="head-dt">
            <h3>Hello,</h3>
            <h2>I'm Saunak Kushwaha</h2>
            </div>
            <div className="block"> REACT DEVELEPOR</div>
            <div className="discription">
            <p>I'm a dedicated React developer passionate about creating seamless user experiences through cutting-edge web technologies. My strong foundation in Data Structures and Algorithms enables me to excel in problem-solving and code optimization, ensuring high-quality solutions with efficiency.</p>
          </div>
          <div className="about-btn">
          <button onClick={goToProjects}>My Projects</button>
        </div>
          </div>
          <div className="main-Image">

            <img className="selfImage" src={Picture3} alt="saunak" />
          </div>
        </div>
     
    </>
  )
}

export default Heroimage
