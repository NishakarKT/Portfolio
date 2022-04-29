import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
// constants
import { FACEBOOK_ICON, INSTAGRAM_ICON, TWITTER_ICON, LINKEDIN_ICON } from "../../constants/images";
import * as ROUTES from "../../constants/routes";

const Footer = () => {
    return (
        <footer>
            <div className="footer__box">
                <div className="footer__text">
                    <div className="footer__body">
                        <div className="footer__subColumn">
                            <ul className="footer__column">
                                <p className="footer__columnTitle">Lost?</p>
                                <Link className="footer__columnLink" to={ROUTES.HOME}><li>Home</li></Link>
                                <Link className="footer__columnLink" to={ROUTES.HOBBIES}><li>Hobbies</li></Link>
                                <Link className="footer__columnLink" to={ROUTES.ACHIEVEMENTS}><li>Achievements</li></Link>
                                <Link className="footer__columnLink" to={ROUTES.CONTACT}><li>Contact</li></Link>
                            </ul>
                            <ul className="footer__column">
                                <p className="footer__columnTitle">Alma Mater?</p>
                                <a className="footer__columnLink" href={ROUTES.HVS} target="_blank" rel="noreferrer"><li>HVS</li></a>
                                <a className="footer__columnLink" href={ROUTES.MOTHERS} target="_blank" rel="noreferrer"><li>Mothers</li></a>
                                <a className="footer__columnLink" href={ROUTES.KGP} target="_blank" rel="noreferrer"><li>IIT KGP</li></a>
                                <Link className="footer__columnLink" to={"/random"}><li>404</li></Link>
                            </ul>
                        </div>
                        <div className="footer__subColumn">
                            <ul className="footer__column">
                                <p className="footer__columnTitle">Tools?</p>
                                <a className="footer__columnLink" href={ROUTES.MONGO} target="_blank" rel="noreferrer"><li>Mongo DB</li></a>
                                <a className="footer__columnLink" href={ROUTES.EXPRESS} target="_blank" rel="noreferrer"><li>Express</li></a>
                                <a className="footer__columnLink" href={ROUTES.REACT} target="_blank" rel="noreferrer"><li>React</li></a>
                                <a className="footer__columnLink" href={ROUTES.NODE} target="_blank" rel="noreferrer"><li>Node</li></a>
                            </ul>
                            <ul className="footer__column">
                                <p className="footer__columnTitle">Contact?</p>
                                <a className="footer__columnLink" href={ROUTES.FACEBOOK} target="_blank" rel="noreferrer"><li>Facebook</li></a>
                                <a className="footer__columnLink" href={ROUTES.INSTAGRAM} target="_blank" rel="noreferrer"><li>Instagram</li></a>
                                <a className="footer__columnLink" href={ROUTES.LINKEDIN} target="_blank" rel="noreferrer"><li>Linkedin</li></a>
                                <a className="footer__columnLink" href={ROUTES.TWITTER} target="_blank" rel="noreferrer"><li>Twitter</li></a>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer__iconLinks">
                    <a href={ROUTES.FACEBOOK} target="_blank" rel="noreferrer"><img src={FACEBOOK_ICON} alt="" /></a>
                    <a href={ROUTES.INSTAGRAM} target="_blank" rel="noreferrer"><img src={INSTAGRAM_ICON} alt="" /></a>
                    <a href={ROUTES.LINKEDIN} target="_blank" rel="noreferrer"><img src={LINKEDIN_ICON} alt="" /></a>
                    <a href={ROUTES.TWITTER} target="_blank" rel="noreferrer"><img src={TWITTER_ICON} alt="" /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
