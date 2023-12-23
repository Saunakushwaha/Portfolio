import "./Footerstyles.css";
import React from 'react';
import { FaFacebook, FaHome, FaInstagram, FaLinkedinIn, FaMailBulk, FaPhone} from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="underline"></div>
                <div className="footer-container">
                    <div className="Sub-heading">
                        <h2>Get in touch...</h2>
                    </div>
                    <div className="head">
                    <h1>CONTACT</h1>
                    </div>
                    
                    <div className="content">
                        <div className="location">


                            <p><FaHome size={20} style={{ color: "#fff", marginRight: "1rem" }} />Kanpur, Uttar Pradesh <br />
                                India</p>
                        </div>
                        <div className="phone">

                            <h4 ><FaPhone size={20} style={{ color: "#fff", marginRight: "1rem" }} />7007623090</h4>
                        </div>
                        <div className="email">

                            <h4>  <FaMailBulk size={20} style={{ color: "#fff", marginRight: "1rem" }} />
                                saunakkushwaha@gmail.com</h4>
                        </div>
                    </div>
                    <div className="social">
                        <a href="https://m.facebook.com/profile.php?eav=AfacZ-HYhzmLP838sUEPj6gcoL8bJdGfuyCqoNDcjNQSWVdGGRMwB1ZqGjZSb19REvA&paipv=0">
                            <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
                        <a href="https://www.instagram.com/saunak_/"><FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>

                        <a href="https://www.linkedin.com/in/saunak-k-b26785229/"><FaLinkedinIn size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer
