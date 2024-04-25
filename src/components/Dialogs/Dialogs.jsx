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

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem {...dialogsData[1]}/>
                <DialogItem name='Olga' id='3'/>
                <DialogItem name='Timur' id='4'/>
                <DialogItem name='Kirill' id='5'/>                
            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message}/>
                <Message {...messagesData[1]}/>
                <Message message='2342356'/>
                <Message message='!!!!!223213'/>
                <Message message='&&&^^^^!!!!222'/>
            </div>
        </div>
    );
}

export default Dialogs;