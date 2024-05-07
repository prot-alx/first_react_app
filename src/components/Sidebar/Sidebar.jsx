import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Sidebar.module.css';


const Sidebar = (props) => {

  let activeLinkCheck = (linkSelected) => linkSelected.isActive ? styles.active : styles.inactive;

  let sideBarElements = props.sidebarList.map(sidebarMenu => <NavLink to={sidebarMenu.menuAddress} className = { activeLinkCheck }>{sidebarMenu.menuName}</NavLink>)

  return (
    <nav className={styles.nav}>
      {sideBarElements}
    </nav>
  )
}

export default Sidebar;