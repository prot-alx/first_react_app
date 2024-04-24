import React from "react";
import classes from './Dialogs.module.css';
import { NavLink } from "react-router-dom";


const activeLinkCheck = (navData) => navData.isActive ? classes.active : classes.inactive;
const DialogItem = (props) => {
    let path = '/dialogs/'+props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path} className = { activeLinkCheck }> {props.name} </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name='Alex' id='1'/>
                <DialogItem name='Andrey' id='2'/>
                <DialogItem name='Olga' id='3'/>
                <DialogItem name='Timur' id='4'/>
                <DialogItem name='Kirill' id='5'/>                
            </div>
            <div className={classes.messages}>
                <Message message='asdasd'/>
                <Message message='fghfghfgh'/>
                <Message message='2342356'/>
                <Message message='!!!!!223213'/>
                <Message message='&&&^^^^!!!!222'/>
            </div>
        </div>
    );
}

export default Dialogs;