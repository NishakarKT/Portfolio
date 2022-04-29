import React, { useState } from 'react';
import "./Contact.css";
// lib
import firebase from "../../lib/Firebase";
// constants
import { FACEBOOK, INSTAGRAM, LINKEDIN, TWITTER, YOUTUBE } from "../../constants/routes";
import { CONTACT_ILLUSTRATION, FACEBOOK_ICON, INSTAGRAM_ICON, LINKEDIN_ICON, TWITTER_ICON, YOUTUBE_ICON, GMAIL_ICON, HOME_BG } from "../../constants/images";
// material-ui
import { TextField, Button } from "@material-ui/core";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [feedback, setFeedback] = useState("");
    const [nameErr, setNameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [contactErr, setContactErr] = useState(false);
    const textInputProps = { autoComplete: "none" };

    const handleFeedback = (e) => {
        e.preventDefault();

        setNameErr(!name ? true : false);
        setEmailErr(!email ? true : false);
        setContactErr(!email ? true : false);

        if (name) {
            const feedbackData = { name, email, contact, feedback }
            firebase.firestore().collection("feedbacks").add(feedbackData);
            e.target.reset();
        };
    };

    return (
        <div className="contact">
            <img className="home__infoBg" src={HOME_BG} alt="" />
            <div className="contact__box">
                <div className="contact__form">
                    <form className="contact__feedbackForm" onSubmit={(e) => handleFeedback(e)}>
                        <p>Feedback</p>
                        <TextField
                            label="Name"
                            error={nameErr}
                            helperText={nameErr ? "What's your name ?" : ""}
                            onChange={(e) => setName(e.target.value)}
                            inputProps={textInputProps} />
                        <TextField
                            label="Email Address"
                            error={emailErr}
                            helperText={emailErr ? "What's your Email Address ?" : ""}
                            onChange={(e) => setEmail(e.target.value)}
                            inputProps={textInputProps} />
                        <TextField
                            label="Contact Number"
                            error={contactErr}
                            helperText={contactErr ? "What's your Contact Number ?" : ""}
                            onChange={(e) => setContact(e.target.value)}
                            inputProps={textInputProps} />
                        <textarea placeholder="Any suggestions ?" onChange={(e) => setFeedback(e.target.value)} />
                        <div className="contact__buttonsBox">
                            <Button type="submit" >Submit</Button>
                            <Button onClick={(e) => document.querySelector(".contact__feedbackForm").reset()} >Clear</Button>
                        </div>
                    </form>
                </div>
                <div className="contact__linksBox">
                    <img className="contact__illustration" src={CONTACT_ILLUSTRATION} alt="" />
                    <img className="contact__linkIcon contact__gmIcon" onClick={() => alert("Email : nishakarkumar0@kgpian.iitkgp.ac.in")} src={GMAIL_ICON} alt="" />
                    <img className="contact__linkIcon contact__ytIcon" onClick={() => window.open(YOUTUBE, "_blank")} src={YOUTUBE_ICON} alt="" />
                    <img className="contact__linkIcon contact__twIcon" onClick={() => window.open(TWITTER, "_blank")} src={TWITTER_ICON} alt="" />
                    <img className="contact__linkIcon contact__inIcon" onClick={() => window.open(LINKEDIN, "_blank")} src={LINKEDIN_ICON} alt="" />
                    <img className="contact__linkIcon contact__igIcon" onClick={() => window.open(INSTAGRAM, "_blank")} src={INSTAGRAM_ICON} alt="" />
                    <img className="contact__linkIcon contact__fbIcon" onClick={() => window.open(FACEBOOK, "_blank")} src={FACEBOOK_ICON} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;

