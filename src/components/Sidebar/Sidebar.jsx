import React from "react";
import classes from './Sidebar.module.css';

const Sidebar = () => {
  return (
      <nav className={classes.nav}>
      <div className={classes.item}>
        <a href='/#'>Profile</a>
      </div>
      <div className={classes.item}>
        <a href='/#'>Messages</a>
      </div>
      <div className={classes.item}>
        <a href='/#'>Music</a>
      </div>
      <div className={classes.item}>
        <a href='/#'>Options</a>
      </div>
      <div className={classes.item}>
        <a href='/#'>Help</a>
      </div>
    </nav>
  )
}

export default Sidebar;