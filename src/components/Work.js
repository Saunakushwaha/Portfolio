import "./Workcardstyles.css";
import React from 'react'

import Workcarddata from"./Workcarddata";
import Card from "./Card/Card2";
const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {Workcarddata.map((val, ind)=>
        {
          return (
            <Card
n           // imgsrc={val.imgsrc}
            Heading={val.title}
            Description={val.text}
            Linkview={val.view}
            Linksource={val.text}
            />
          );
        })}
      </div>
    </div>
  )
}

export default Work;
