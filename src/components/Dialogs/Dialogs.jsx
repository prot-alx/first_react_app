import React from "react";
import classes from './Dialogs.module.css';
import { NavLink } from "react-router-dom";


const activeLinkCheck = (navData) => navData.isActive ? classes.active : classes.inactive;
const DialogItem = () => {
    return (
        <div className={classes.dialog}>
            <NavLink to='/dialogs/1' className = { activeLinkCheck }>Alex</NavLink>
        </div>
    )
}
const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/1' className = { activeLinkCheck }>Alex</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/2' className = { activeLinkCheck }>Andrey</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/3' className = { activeLinkCheck }>Olga</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/4' className = { activeLinkCheck }>Timur</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/5' className = { activeLinkCheck }>Kirill</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>1</div>
                <div className={classes.message}>2</div>
                <div className={classes.message}>3</div>
                <div className={classes.message}>4</div>
                <div className={classes.message}>5</div>
            </div>
        </div>
    );
}

export default Dialogs;