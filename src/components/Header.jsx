import React from "react";
import logo from "../img/logo.webp";
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src={logo} alt="site-logo"/>
        </header>
    )
}

export default Header;