import "./NavbarStyles.css";
import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


const goToAbout = () => {
    window.scrollTo({ top: 1250, left: 0, behavior: "smooth" });
}
const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}
const goToContacts = () => {
    window.scrollTo({ top: 3600, left: 0, behavior: "smooth" });
}
const goToProjects = () => {
    window.scrollTo({ top: 2100, left: 0, behavior: "smooth" });
}

const Navbar = () => {


    const [click, setClick] = useState(false);
    const handleclick = () => setClick(!click);

    const [color, setColor] = useState(false);


    return (
        <>
        <div className="header">
            <div className="main-heading">
                <h1>Portfolio.</h1>
            </div>

            <div className="navmenu">
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


            {/* <div className="hamburger" onClick={handleclick}>
                    {click ? (<FaTimes size={20} style={{ color: "white" }} />)
                        :
                        (<FaBars size={20} style={{ color: "white" }} />)
                    }
                </div> */}
                
       
        </div>
         <div className="underline1"></div>
         </>
    )
}

export default Navbar
