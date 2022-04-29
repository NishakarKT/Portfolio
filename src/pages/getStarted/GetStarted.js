import React from "react";
import { useHistory } from "react-router-dom";
import "./GetStarted.css";
// constants
import { HOME } from "../../constants/routes";
import { NK, HOME_BG } from "../../constants/images";
// material-ui
import { Button } from "@material-ui/core";

const GetStarted = () => {
    const history = useHistory();
    return (
        <div className="getStarted">
            <img src={HOME_BG} alt="" />
            <div className="getStarted__box">
                <img className="getStarted__myPic" src={NK} alt="" />
                <h1>Hey there !</h1>
                <h4>I am Nishakar, a student at IIT Kharagpur, pursuing Instrumentation Engineering under the Department of Electrical Engineering.</h4>
                <h4>Click on "Lets Go" to know more about me.</h4>
                <Button onClick={() => history.push(HOME)}>Let's Go</Button>
            </div>
        </div>
    );
};

export default GetStarted;
