import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Sidebar.module.css';
import StoreContext from "../../StoreContext";

const Sidebar = () => {  
  return (
    <StoreContext.Consumer>
      {
        (store) => {          

          let activeLinkCheck = (link) => link.isActive ? styles.active : styles.inactive;

          let sideBarElements = store.getState().sidebarList.map((sidebarMenu, index) => <NavLink key={index} to={sidebarMenu.menuAddress} className={activeLinkCheck}>{sidebarMenu.menuName}</NavLink>)

          return (
            <nav className={styles.nav}>
              {sideBarElements}
            </nav>
          )
        }
      }      
    </StoreContext.Consumer>
  )
}

export default Sidebar;