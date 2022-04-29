import React from "react";
import "./Questions.css";
// constants
import { HOME_BG } from "../../../constants/images";
// material-ui
import { Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";

const Questions = () => {
    return (
        <div className="achievementQs">
            <img className="achievementQs__infoBg" src={HOME_BG} alt="" />
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                    <p className="achievementQs__title">Why am I seeing a graph ?</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p className="achievementQs__details">That line graph displays my secured CGPA over 2 semesters at IIT Kharagpur.</p>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                    <p className="achievementQs__title">Why am I seeing a cartoon ?</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p className="achievementQs__details">Thats a random person programming, just like me.</p>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                    <p className="achievementQs__title">How do you balance your sems and web dev ?</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p className="achievementQs__details">Its pretty difficult but time management is the key. You can neither stop web dev nor can you manage to slip a grade.</p>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                    <p className="achievementQs__title">Why React JS ?</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p className="achievementQs__details">React JS is the first front-end Javascript library that I had learnt.</p>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                    <p className="achievementQs__title">Why Javascript ?</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p className="achievementQs__details">JavaScript is not the only client-side scripting language on the Internet, it was one of the first and it is still the most widely used.</p>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default Questions;
