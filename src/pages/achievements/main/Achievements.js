import React from "react";
import "./Achievements.css";
// constants
import { LEARNING_GIF, CAR, HOME_BG, BOARD_10_IMG, BOARD_12_IMG, JEE_MAIN_IMG, JEE_ADVANCED_IMG } from "../../../constants/images";
// components
import InfoCard from "../../../components/infoCard/InfoCard";
import Chart from "../../../components/chart/Chart";
import Questions from "../questions/Questions";

const Achievements = () => {
    const results = [{ id: "1", imgSrc: BOARD_10_IMG, title: "10th Std", summary: "I secured a grade of 9.8 CGPA in 10th Std Board Examinations CBSE, in the year 2017." }, { id: "2", imgSrc: BOARD_12_IMG, title: "12th Std", summary: "I secured a percentage of 94.6 in 12th Std Board Examinations CBSE, in the year 2019." }, { id: "3", imgSrc: JEE_MAIN_IMG, title: "JEE Main", summary: "I secured an NTA Score of 99.86 %ile in JEE Main, in the year 2020." }, { id: "4", imgSrc: JEE_ADVANCED_IMG, title: "JEE Advanced", summary: "I secured an AIR of 5301 in JEE Advanced, in the year 2020." }];
    return (
        <div className="achievements">
            <p className="achievements_title">Present<img src={CAR} alt="" /></p>
            <div className="achievements__cgpa">
                <img className="achievements__infoBg" src={HOME_BG} alt="" />
                <Chart />
                <img src={LEARNING_GIF} alt="" />
            </div>
            <Questions />
            <p className="achievements_title">Past<img src={CAR} alt="" /></p>
            <div className="achievements__results">
                <img className="achievements__infoBg" src={HOME_BG} alt="" />
                {results.map(result => <InfoCard key={result.id} imgSrc={result.imgSrc} title={result.title} summary={result.summary} />)}
            </div>
        </div>
    );
};

export default Achievements;

