import React from "react";
import { Link } from "react-router-dom";
import "./Intro.css";
// constants
import { CONTACT, IWG, KGP } from "../../../constants/routes";
import { HOME_BG } from "../../../constants/images";

const Intro = () => {
    return (
        <div className="intro">
            <img src={HOME_BG} alt="" />
            <div className="intro__box">
                <h1>Hey! Welcome to my portfolio.</h1>
                <h4>I am a Nishakar Kumar, a web developer, standing on the sweet spot where design and code intersects.<br />This website is created under a web dev task from <span className="intro__kgpLink" onClick={() => window.open(IWG, "_blank")}>IWG</span>, <span className="intro__kgpLink" onClick={() => window.open(KGP, "_blank")}>IIT Kharagpur</span>.</h4>
                <div className="intro__linksBox">
                    <Link to={CONTACT} className="intro__boxLink">Contact</Link>
                    <Link to={CONTACT} className="intro__boxLink">Feedback</Link>
                </div>
            </div>
        </div>
    );
};

export default Intro;
