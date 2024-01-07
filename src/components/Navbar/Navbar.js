import "./NavbarStyles.css";
import React from 'react';
import pic from '../assets/menu.png'
import pic2 from "../assets/cross.png"
import { Link } from "react-router-dom";
import { useState } from "react";
<link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css"
    rel="stylesheet"
/>


const goToAbout = () => {
    window.scrollTo({ top: 700, left: 0, behavior: "smooth" });
}
// const goToTop = () => {
//     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
// }
const goToContacts = () => {
    window.scrollTo({ top: 2800, left: 0, behavior: "smooth" });
}
const goToProjects = () => {
    window.scrollTo({ top: 1400, left: 0, behavior: "smooth" });
}

const Navbar = () => {


    const [click, setClick] = useState(false);
     const handleClick = () => setClick(!click);

    // const [color, setColor] = useState(false);


    return (
        <>
        <div className="header">
            <div className="main-heading">
                <h1>Portfolio.</h1>
            </div>

            <div className={click?"hamlinks":"navmenu"}>
                <Link className="links" to="/" >
                    <h2>Home</h2>
                </Link>


                <Link className="links" to="/" onClick={goToProjects}>

                    <h2>Project</h2>
                </Link>


                <Link className="links" to="/" onClick={goToContacts}>
                    <h2>Contact</h2>
                </Link>

                <Link className="links" to="/" onClick={goToAbout}>
                    <h2>About</h2>
                </Link>

            </div>

            <div className="ham-in-menu">

                
            </div>
             <div className="hamburger" >
                <img onClick = {handleClick} src={click?pic2:pic} alt="" />
                </div> 
                
       
        </div>
         <div className="underline1"></div>
         </>
    )
}

export default Navbar
