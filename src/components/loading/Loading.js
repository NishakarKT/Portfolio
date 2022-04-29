import React from "react";
import "./Loading.css";
import { LOADING_ART } from "../../constants/images";

const Loading = () => {
    return (
        <div className="loading">
            <img src={LOADING_ART} alt="loading..." />
        </div>
    );
};

export default Loading;
