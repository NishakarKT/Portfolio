import React from "react";
import "./AboutMe.css";
import { Link } from "react-router-dom";
// constants
import { HOBBIES, ACHIEVEMENTS, CONTACT } from "../../../constants/routes";
// material-ui
import { Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core";
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

const AboutMe = () => {
    return (
        <div className="aboutMe">
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                    <p className="aboutMe__title">What's up ?</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p className="aboutMe__details">Well, presently I am skilling up in web dev, getting to know about different libraries and frameworks and there applications. I am also working on many projects as believe in hands-on experience rather than being a rote-learner.</p>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                    <p className="aboutMe__title">About me</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p className="aboutMe__details">I am Nishakar Kumar, a Web Development enthusiast, programmer and student. I am presently pursuing Instrumentation Engineering at Indian Institute Of Technology, Kharagpur. To know more about me, keep scrolling...</p>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                    <p className="aboutMe__title">Hobbies</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p className="aboutMe__details">I try & enjoy creating user-friendly web applications. I also enjoy playing chess and listening to music. To know more about my hobbies, click on<Link to={HOBBIES} className="aboutMe__link">Hobbies</Link>and you will be redirected to the "Hobbies" section.</p>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                    <p className="aboutMe__title">Achievements</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p className="aboutMe__details">I secured 94.6 % in my board examinations. I also scored 99.86 %ile in JEE Main 2020 and went on to pursue Instrumentation Engineering from Indian Institute Of Technology, Kharagpur after my exemplary performance in JEE Advanced. To know more about my achievements, click on<Link to={ACHIEVEMENTS} className="aboutMe__link">Achievements</Link>and you will be redirected to the "Achievements" section</p>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                    <p className="aboutMe__title">Contact</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p className="aboutMe__details">Click on<Link to={CONTACT} className="aboutMe__link">Contact</Link>and you will be redirected to the "Contact" section, where you may find find floating icons. Click on them, get to me.</p>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default AboutMe;
