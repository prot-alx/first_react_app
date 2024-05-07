import React from "react";
import logo from "../../img/logo.webp";
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="site-logo"/>
        </header>
    )
}

export default Header;