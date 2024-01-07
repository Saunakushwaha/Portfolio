import React, { useState } from "react";
import "./Skills.css";
import logoimg from "../assets/img-logo.png";
const Skills = () => {
  const [langcontent, setlangContent] = useState(false);
  const [coursecontent, setcourseContent] = useState(false);
  const [datacontent, setdataContent] = useState(false);
  const handleLang = (event) => {
    setlangContent((current) => !current);
    if(langcontent===false){
      setcourseContent(false);
      setdataContent(false);
    }
   
  };

  const handleCourse = (event) => {
    setcourseContent((current) => !current);
    if(coursecontent===false){
      setlangContent(false);
      setdataContent(false);
    }
  };


  return (
    <div className="skills">
      <div className="sheading">
        <h1>Technical-Skills</h1>
      </div>
      <div className="logoimg">
        <div className="skillimg">
        <img src={logoimg} alt="" />
        </div>
        
        <div className="skillheading">
          <div className="techskill" onClick={handleLang}>
            <h2>Languages & Framworks</h2>
            <div className={langcontent ? "skillcontent" : "skillcontent-no"}>
              
              <ul className="list">
              <div>
                <li className="items-head">Programming Languages</li>
                <div className="items">
                <li>C</li>
                <li>C++</li>
                <li>Java</li>
                <li>JavaScript</li>
                </div>
                
                
              </div>
              <div>
                <li className="items-head">Development Languages</li>
               
               <div className="items">
               <li>HTML</li>
                <li>CSS</li>
                <li>NodeJs</li>
                <li>Reactjs</li>
                </div>
                </div>

                <div>
                <li >Databse Languages</li>
                <div className="items">
               <li>MongoDB</li>
                <li>MySQL</li>
                </div>
              </div>
              </ul>
            </div>
          </div>

           {/* <div className="techskill" onClick={handleData}>
            <h2>Databse Languages</h2>
            <div className={datacontent ? "skillcontent" : "skillcontent-no"}>
            <ul>
                <li>MongoDb</li>
                <li>MySQL</li>
            </ul>
            </div>
          </div>  */}

          <div className="techskill" onClick={handleCourse}>
            <h2>Relavent courseworks</h2>
            <div className={coursecontent ? "skillcontent" : "skillcontent-no"}>
              <ul>
                <li>Computer Networks</li>
                <li>Data Structures And Algorithms(DSA)</li>
                <li>Database Management System</li>
                <li>Advanced Programming in Java(OOPs)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
