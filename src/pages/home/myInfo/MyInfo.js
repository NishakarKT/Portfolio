import React from "react";
import "./MyInfo.css";
// material-ui
import { Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core";
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

const MyInfo = () => {
    return (
        <div className="myInfo">
            <div className="myInfo__detail">
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                        <p className="myInfo__title">Name</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="myInfo__details">Nishakar Kumar</p>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                        <p className="myInfo__title">Roll Id</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="myInfo__details">20IE10019</p>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                        <p className="myInfo__title">Mail Id</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="myInfo__details">nishakarkumar0@outlook.com<br />nishakarkumar0@kgpian.iitkgp.ac.in</p>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                        <p className="myInfo__title">Course</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="myInfo__details">Instrumentation Engineering</p>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                        <p className="myInfo__title">Department</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className="myInfo__details">Electrical Engineering</p>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
};

export default MyInfo;
