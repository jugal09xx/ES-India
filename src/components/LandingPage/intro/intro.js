import React from 'react';
import Header from '../../nav-header/nav-header.js';
import classes from "./introStyle.module.css";

const Intro = () => {
    return(
        <div className={classes.main}>
            <Header />
        </div>
    )
};

export default Intro;