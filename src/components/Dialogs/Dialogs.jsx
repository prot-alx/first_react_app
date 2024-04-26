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

    let dialogsData = [
        { id: 1, name: 'Alex'}, 
        { id: 2, name: 'Andrey' }, 
        { id: 3, name: 'Olga' }, 
        { id: 4, name: 'Timur' }, 
        { id: 5, name: 'Kirill' }
    ];

    let messagesData = [
        { id: 1, message: 'asdasd'}, 
        { id: 2, message: 'fghfghfgh' }, 
        { id: 3, message: '2342356' }, 
        { id: 4, message: '!!!!!223213' }, 
        { id: 5, message: '&&&^^^^!!!!222' }
    ];

    let dialogsItems = dialogsData.map(dialogCompanion => <DialogItem name={dialogCompanion.name} id={dialogCompanion.id}/>);

    let messageItems = messagesData.map(lastMessage => <Message message={lastMessage.message}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsItems}               
            </div>
            <div className={classes.messages}>
                {messageItems}
            </div>
        </div>
    );
}

export default Dialogs;