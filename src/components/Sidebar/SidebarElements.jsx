import React from "react";
import { NavLink } from "react-router-dom";
import styles from './SidebarElements.module.css'

let SideBarElements = (props) => {

    let activeLinkCheck = (link) => link.isActive ? styles.active : styles.inactive;

    let reactionOnClick = () => {
        props.doNothing()
    }
    
    let sideBarElements = props.sidebarList.map(
        (sidebarMenu, index) => <NavLink key={index} to={sidebarMenu.menuAddress} className={activeLinkCheck} onClick={reactionOnClick}>{sidebarMenu.menuName}</NavLink>)
    return (
        <nav className={styles.nav}>
            {sideBarElements}
        </nav>
    )
}

export default SideBarElements;