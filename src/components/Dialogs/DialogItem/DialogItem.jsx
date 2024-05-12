import React from "react";
import styles from './DialogItem.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {

    const activeLinkCheck = (navData) => navData.isActive ? styles.active : styles.inactive;

    let path = '/messages/'+props.id;

    return (
        <div className={styles.dialogsItems}>
            <NavLink to={path} className = { activeLinkCheck }> {props.name} </NavLink>
        </div>
    )
}

export default DialogItem;