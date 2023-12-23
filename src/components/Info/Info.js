import "./Infocard.css";
import React, { useState } from 'react'

import Infodataskill from "./Infodataskill";
import Card from "../Card/Card";

const Info = () => {
  const [toggleState, setToggleState] = useState(1)
  const toggleTab = (index) =>{
    setToggleState(index)
  }
  return (
    <>
    <div className="info-container">
      <div className="education">
      <h1 className="info-heading">Educational Qualifications</h1>
      <div className="edu-tabs">
        <div className={toggleState===1?"tab-live":"tab" }onClick={() => toggleTab(1)}>
          <h2>Class-10th </h2>
          </div>
        <div className="divide"><h1>|</h1></div> 
        <div className={toggleState===2?"tab-live":"tab" } onClick={() => toggleTab(2)}><h2>Class-12th </h2></div>
        <div className="divide" ><h1>|</h1></div> 
        <div className={toggleState===3?"tab-live":"tab" } onClick={() => toggleTab(3)}><h2>Undergraduate </h2></div>
      </div>
      <div className="edu-info">
        <div className={toggleState===1?"info":"info-display"}>
        
        10th Class 2019
        St.Thomas School, Kanpur
        Percentage: 94.4
        </div>
        <div className={toggleState===2?"info":"info-display"}>
             
         12th Class 2021
        St.Thomas School, Kanpur
        Percentage: 91.5
        </div>
        <div className={toggleState===3?"info":"info-display"}>
          
       B.tech CSE 2021-2025
      The LNM Institute of Information Technology
        CGPA: 6.91
        
        </div>


      </div>
      </div>
      <div className="skills">
      <h1 className="info-heading">Skills</h1>
      <div className="cards">
      {Infodataskill.map((val, ind)=>
        {
          return (
            <Card 
            Image={val.img}
            Heading={val.title}
            description1={val.text1}
            description2={val.text2}
            
            
            />
          );
        })}
      
      </div>
     </div>
    </div>
    <div className="underline"></div>
    </>
  )
}

export default Info;