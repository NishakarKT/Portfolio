import React from "react";
import { useHistory } from "react-router-dom";
import "./NotFound.css";
// constants
import { ERROR_404_GIF, HOME_BG } from "../../constants/images";
import { HOME } from "../../constants/routes";
// material-ui
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import { Button } from "@material-ui/core";

const NotFound = () => {
    const history = useHistory();
    return (
        <div className="notFound">
            <div className="notFound__box">
                <img className="notFound__bg" src={HOME_BG} alt="" />
                <img src={ERROR_404_GIF} alt="error 404" />
                <h1>404</h1>
                <h2>Looks like the page requested doesn't exist...</h2>
                <div className="notFound__buttonsGroup">
                    <Button onClick={() => history.push(HOME)}>
                        <HomeRoundedIcon />
                        <p>Home</p>
                    </Button>
                    <Button onClick={() => history.goBack()}>
                        <ArrowBackIosRoundedIcon />
                        <p>Back</p>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
