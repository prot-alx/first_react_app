import React from "react";
import logo from "../img/logo.webp";

const Header = () => {
    return (
        <header className='header'>
            <img src={logo} alt="site-logo"/>
        </header>
    )
}

export default Header;