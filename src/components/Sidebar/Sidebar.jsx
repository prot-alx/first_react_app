import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Sidebar.module.css';

const activeLinkCheck = (navData) => navData.isActive ? classes.active : classes.inactive;
const Sidebar = () => {
  return (
    <nav className={classes.nav}>
      <div>
        <NavLink to='/profile' className = { activeLinkCheck }>Profile</NavLink>
      </div>
      <div>
        <NavLink to='/dialogs' className = { activeLinkCheck }>Messages</NavLink>
      </div>
      <div>
        <NavLink to='/music' className = { activeLinkCheck }>Music</NavLink>
      </div>
      <div>
        <NavLink to='/options' className = { activeLinkCheck }>Options</NavLink>
      </div>
      <div>
        <NavLink to='/help' className = { activeLinkCheck }>Help</NavLink>
      </div>
    </nav>
  )
}

export default Sidebar;