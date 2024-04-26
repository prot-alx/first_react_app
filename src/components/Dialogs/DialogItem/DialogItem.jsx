import React from "react";
import classes from './DialogItem.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    const activeLinkCheck = (navData) => navData.isActive ? classes.active : classes.inactive;
    let path = '/dialogs/'+props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path} className = { activeLinkCheck }> {props.name} </NavLink>
        </div>
    )
}

export default DialogItem;