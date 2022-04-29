import React from "react";
import "./Hobbies.css";
// constants
import { CAR, HOME_BG, WEB_DEV_IMG, PROGRAMMING_IMG, MUSIC_IMG, CHESS_IMG } from "../../../constants/images";
// components
import InfoCard from "../../../components/infoCard/InfoCard";
import Questions from "../questions/Questions";

const Hobbies = () => {
    // skills data
    const hobbies = [{ id: "1", imgSrc: WEB_DEV_IMG, title: "Web Development", summary: "I recently started Web Development and it has really grabed my inclination towards creating user-friendly web aplplications." }, { id: "2", imgSrc: PROGRAMMING_IMG, title: "Programming", summary: "I started programming journey with C, a few months back. Since then, I have learnt C++, Java, Python & Javascript." }, { id: "3", imgSrc: MUSIC_IMG, title: "Music", summary: "I like listening to music after lengthy programming sessions to save my head a break." }, { id: "4", imgSrc: CHESS_IMG, title: "Chess", summary: "Node. js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications" }];

    return (
        <div className="hobbies">
            <div className="hobbies__box">
                <div className="hobbies__title">Hobbies<img src={CAR} alt="" /></div>
                <div className="hobbies__hobbies">
                    <img className="hobbies__infoBg" src={HOME_BG} alt="" />
                    {hobbies.map(role => <InfoCard key={role.id} link={role.link} imgSrc={role.imgSrc} title={role.title} summary={role.summary} />)}
                </div>
            </div>
            <div className="hobbies__box">
                <div className="hobbies__title">Questions<img src={CAR} alt="" /></div>
                <Questions />
            </div>
        </div>
    );
};

export default Hobbies;
