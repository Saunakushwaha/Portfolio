import "./Footerstyles.css";
import React from 'react';
import { FaArrowAltCircleUp, FaFacebook, FaInstagram, FaLinkedinIn} from "react-icons/fa";
const Footer = () => {
    const goToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    return (
        <>
            <div className="footer">
               
               
                                
                    <div className="contents">
                        <h4>Contact Me</h4>
                       
                        <div className="phone">

                            <h4>7007623090</h4>
                        </div>
                        <div className="email">

                            <h4> 
                                saunakkushwaha@gmail.com</h4>
                        </div>
                        <div className="location">


<p>Kanpur, Uttar Pradesh India</p>
</div>
                    </div>

                    <div className="social">
                        <h4>Socialize with social</h4>
                        <a href="https://m.facebook.com/profile.php?eav=AfacZ-HYhzmLP838sUEPj6gcoL8bJdGfuyCqoNDcjNQSWVdGGRMwB1ZqGjZSb19REvA&paipv=0">
                            <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
                        <a href="https://www.instagram.com/saunak_/"><FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>

                        <a href="https://www.linkedin.com/in/saunak-k-b26785229/"><FaLinkedinIn size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
                        <div className="totop"><div className="topicon" onClick={goToTop}><FaArrowAltCircleUp size={30} style={{ color: "#fff", marginRight: "1rem" }} /></div>
                            <div className="toptext">Move to top</div>                        
                       </div>    
                    </div>
                

            </div>
        </>
    )
}

export default Footer
