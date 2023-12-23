import "./Infocard.css";
import React from 'react'
import { NavLink } from "react-router-dom";
const Infocard = (props) => {
  return (
    <div className="projec-card">
        <h2 className="projec-title">{props.title}</h2>
    <div className="pr-details">
      <p>{props.text1}</p>
      <p>{props.text2}</p>
    </div>
  
  </div>
  )
}

export default Infocard;
