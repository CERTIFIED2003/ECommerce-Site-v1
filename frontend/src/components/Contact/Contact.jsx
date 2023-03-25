import React from 'react';
import "./Contact.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className="contact">
            <div className="wrapper">
                <span>
                    BE IN TOUCH WITH US:
                </span>
                <div className="mail">
                    <input
                        type="text"
                        placeholder="Enter your email..."
                    />
                    <button>
                        JOIN US
                    </button>
                </div>
                <div className="icons">
                    <Link className="link" to="/"><GoogleIcon /></Link>
                    <Link className="link" to="/"><PinterestIcon /></Link>
                    <Link className="link" to="/"><TwitterIcon /></Link>
                    <Link className="link" to="/"><InstagramIcon /></Link>
                    <Link className="link" to="/"><FacebookIcon /></Link>
                </div>
            </div>
        </div>
    )
}

export default Contact