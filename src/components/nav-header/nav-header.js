import React,{useState} from "react";
import Logo from "../../assets/Logo.svg";
//import Bar from "../../assets/Hamburger-1.png";
import {Link} from "react-router-dom";
import classes from "./nav-header.module.css";


const Header = () => {
    const [isActive, setActive] = useState(false);


    const toggleClass = () => {
    setActive(!isActive);
}
const [showMenu, setShowMenu] = useState(false);

let menu;


if(showMenu){
    menu = <div>
        <div className={classes.menu_div}>
                <ul>
                    <li><a style={{color: "#444444", textDecoration: "none"}} href="#abt" onClick={() => {setShowMenu(!showMenu); toggleClass();}}>About Us</a></li>
                    <li><a style={{color: "#444444", textDecoration: "none"}} href="#specs" onClick={() => {setShowMenu(!showMenu); toggleClass();}}>Specialisations</a></li>
                    <li><a style={{color: "#444444", textDecoration: "none"}} href="#works" onClick={() => {setShowMenu(!showMenu); toggleClass();}}>Works</a></li>
                    <li><a style={{color: "#444444", textDecoration: "none"}} href="#clients" onClick={() => {setShowMenu(!showMenu); toggleClass();}}>Clients</a></li>
                    <li><Link style={{color: "#444444"}} to="/ourteam">Our Team</Link></li>
                    <li><Link style={{color: "#444444"}} to="/contactus">Contact Us</Link></li>
                </ul>
            </div>
    </div>
}
    return(
        <div className={classes.mainContainer}>
            <div className={classes.logoContainer}>
                <img alt="logo" src={Logo} className={classes.logo} />
            </div>
            <div className={classes.navMenuContainer} onClick={() => setShowMenu(!showMenu)}>
                <div className={isActive ? classes.menu_btn+ ' ' + classes.open: classes.menu_btn} onClick={toggleClass}>
                    <div className={classes.menu_btn_ham}>
                    </div>
                </div>
                {/*<img alt="bar"  src={Bar} />*/}
                <ul>
                    <li><Link to="#abt">About us</Link></li>
                    <li><Link href="#specs">Specialisations</Link></li>
                    <li><Link href="#">Works</Link></li>
                    <li><Link to="/Ourteam">Our team</Link></li>
                    <li><Link to="/ContactUs">Contact us</Link></li>
                </ul>
            </div>
            {menu}
        </div>
    )
};

export default Header;
