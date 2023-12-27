import "./Infocard.css";
import React, { useState } from 'react'
import clgpic from '../assets/LNMIIT VIEW.jpg'
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
      
      <div className="clg">
        <img className="clg-img" src={clgpic} alt="" />
      </div>
      <div>
      <h1 className="info-heading">Educational Qualifications</h1>
      <div className="edu-info">
      <div className="edu-dt">
        <div className="year">
        <h3>The LNM Institute of Information Techonolgy</h3>
        <h5 >2021-2025</h5>
        </div>
        
        
        <h5>Btech Computer Sciecnce Engineering</h5>
        <h5>CGPA - 6.91</h5>
      </div>
      </div>
      <div className="edu-info">
      <div className="edu-dt">
        <div className="year">
        <h3>St Thomas School</h3>
        <h5 >2021</h5>
        </div>
        
        
        <h5>International Schooling Certificate (ISC)</h5>
        <h5>Percentage - 91%</h5>
      </div>
      </div>
      <div className="edu-info">
      <div className="edu-dt">
        <div className="year">
        <h3>St Thomas School</h3>
        <h5 >2019</h5>
        </div>
        
        
        <h5>Indian Certificate of Secondary Education (ICSE)</h5>
        <h5>Percentage - 94%</h5>
      </div>
      </div>
      </div>
      
      
      </div>
      {/* <div className="skills">
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
     </div> */}
    </div>
   
    </>
  )
}

export default Info;