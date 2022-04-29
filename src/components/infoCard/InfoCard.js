import React from "react";
import "./InfoCard.css";

const InfoCard = ({ link, imgSrc, title, summary }) => {
    return (
        <div className="identityCard" onClick={() => window.open(link, "_blank")}>
            <img src={imgSrc} alt="" />
            <h1>{title}</h1>
            <h2>{summary}</h2>
        </div>
    );
};

export default InfoCard;
