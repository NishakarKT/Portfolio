import React from "react";
import "./Home.css";
// constants
import { MONGO, EXPRESS, REACT, NODE, HVS, MOTHERS, KGP } from "../../../constants/routes";
import { MONGO_IMG, EXPRESS_IMG, REACT_IMG, NODE_IMG, HVS_IMG, MOTHERS_IMG, KGP_IMG, HOME_BG, CAR } from "../../../constants/images";
// components
import AboutMe from "../aboutMe/AboutMe";
import Intro from "../intro/Intro";
import InfoCard from "../../../components/infoCard/InfoCard";
import MyInfo from "../myInfo/MyInfo";
import Footer from "../../../components/footer/Footer";

const Home = () => {
    // skills data
    const skills = [{ id: "1", link: MONGO, imgSrc: MONGO_IMG, title: "Mongo DB", summary: "MongoDB is a document-oriented database which stores data in JSON-like documents with dynamic schema." }, { id: "2", link: EXPRESS, imgSrc: EXPRESS_IMG, title: "Express", summary: "Express js is a JavaScript back-end framework that's designed to develop complete web applications and APIs." }, { id: "3", link: REACT, imgSrc: REACT_IMG, title: "React", summary: "React is a JavaScript library for building user interfaces. React is used to build single page applications." }, { id: "4", link: NODE, imgSrc: NODE_IMG, title: "Node", summary: "Node. js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications" }];
    // alma mater data
    const alma = [{ id: "1", link: HVS, imgSrc: HVS_IMG, title: "HVS Public School", summary: "I completed UKG and 1st std at HVS Public School, Koti, Hyderabad, Telangana 500095." }, { id: "2", link: MOTHERS, imgSrc: MOTHERS_IMG, title: "Mother's Public School", summary: "I completed 2nd - 12th Std at Mothers Public School, Unit-I, Beside Indoor Hall, Bhubaneswar , PIN-751009" }, { id: "3", link: KGP, imgSrc: KGP_IMG, title: "IIT Kharagpur", summary: "I have started my engineering journey at Kharagpur 721302, West Bengal, India." }];

    return (
        <div className="home">
            <Intro />
            <div className="home__title">About<img src={CAR} alt="" /></div>
            <div className="home__about">
                <img className="home__infoBg" src={HOME_BG} alt="" />
                <AboutMe />
                <MyInfo />
            </div>
            <div className="home__title">Skills<img src={CAR} alt="" /></div>
            <div className="home__skills">
                <img className="home__infoBg" src={HOME_BG} alt="" />
                {skills.map(role => <InfoCard key={role.id} link={role.link} imgSrc={role.imgSrc} title={role.title} summary={role.summary} />)}
            </div>
            <div className="home__title">Alma Mater<img src={CAR} alt="" /></div>
            <div className="home__alma">
                <img className="home__infoBg" src={HOME_BG} alt="" />
                {alma.map(role => <InfoCard key={role.id} link={role.link} imgSrc={role.imgSrc} title={role.title} summary={role.summary} />)}
            </div>
            <Footer />
        </div>
    );
};

export default Home;
