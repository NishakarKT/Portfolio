import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
// constants
import { LOGO } from "../../constants/images";
import { GET_STARTED, HOME, HOBBIES, ACHIEVEMENTS, CONTACT } from "../../constants/routes";
// material-ui
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import RowingRoundedIcon from '@material-ui/icons/RowingRounded';
import CallRoundedIcon from '@material-ui/icons/CallRounded';

const NavBar = () => {
    return (
        <div className="navBar">
            <div className="navBar__left">
                <Link to={GET_STARTED}><img className="navBar__logo" src={LOGO} alt="" /></Link>
                <NavLink to={HOME} activeClassName="navBar__linkActive" className="navBar__link" ><HomeRoundedIcon /><p>Home</p></NavLink>
                <NavLink to={HOBBIES} activeClassName="navBar__linkActive" className="navBar__link" ><RowingRoundedIcon /><p>Hobbies</p></NavLink>
                <NavLink to={ACHIEVEMENTS} activeClassName="navBar__linkActive" className="navBar__link"><ThumbUpAltRoundedIcon /><p>Achievements</p></NavLink>
                <NavLink to={CONTACT} activeClassName="navBar__linkActive" className="navBar__link" ><CallRoundedIcon /><p>Contact</p></NavLink>
            </div>
        </div>
    );
};

export default NavBar;
