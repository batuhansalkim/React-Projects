import React from "react";
import "../15/footer.css";
import { FaGithubSquare, FaInstagram, FaLinkedin } from "react-icons/fa";


export const Footer=()=>{
    return(
        <div className="container">
            <div className="social">
                <div className="soci"><FaGithubSquare/></div>
                <div className="soci"><FaInstagram /></div>
                <div className="soci"><FaLinkedin /></div>
            </div>
            <div className="copyright">
                Copyright &copy; 2023.25.Mart, Batuhan SALKIM
            </div>
        </div>
    )
}