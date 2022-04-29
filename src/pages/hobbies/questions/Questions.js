import React from "react";
import "./Questions.css";
// constants
import { HOME_BG } from "../../../constants/images";
// material-ui
import { Accordion, AccordionDetails, AccordionSummary } from "@material-ui/core";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";

const Questions = () => {
    return (
        <div className="questions">
            <img className="questions__infoBg" src={HOME_BG} alt="" />
            <div className="questions__set">
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                        <p className="questions__title">Who are you ?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="questions__details">Nishakar Kumar</p>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                        <p className="questions__title">What is your roll ID ?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="questions__details">20IE10019</p>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                        <p className="questions__title">Which Course ?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="questions__details">Instrumentation Engineering</p>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                        <p className="questions__title">Which Department ?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="questions__details">Electrical Engineering</p>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className="questions__set">
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                        <p className="questions__title">Why Web Development ?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="questions__details">Why not ?! We are living in the best time to become a web developer.</p>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                        <p className="questions__title">Why Programming ?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="questions__details">Programming is where you can finally start visualising your logics and algorithms.</p>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                        <p className="questions__title">Why Music ?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="questions__details">Music is the most effective way to get rid of all the thoughts cluster in your head.</p>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                        <p className="questions__title">Why Chess ?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="questions__details">Well, chess is what I have been playing for a long time.</p>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                        <p className="questions__title">Why Hobbies ?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="questions__details">Hobbies are what enable you to save some time away from your monotonous daily routine.</p>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className="questions__set">
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                        <p className="questions__title">Why IIT Kharagpur ?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="questions__details">I get a chance not only to work with the best of students, but also to align my goals with the needs of the country.</p>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                        <p className="questions__title">Why Instrumentation Engineering ?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="questions__details">I have been inclined towards instruments and their working from a young age, and now I am pursuing my dream.</p>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                        <p className="questions__title">Javascript or Python ?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="questions__details">Both are great languages but as a Javacript developer...I will say Javascript... :p</p>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                        <p className="questions__title">Why Student ?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="questions__details">You need to go through this student phase to transform into a wonderful adult.</p>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                        <p className="questions__title">Why Human ?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="questions__details">Well, now it feels like I am really out of questions...</p>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
};

export default Questions;
