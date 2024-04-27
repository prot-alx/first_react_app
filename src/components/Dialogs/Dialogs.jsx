import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsItems = props.state.dialogsData.map(dialogCompanion => <DialogItem name={dialogCompanion.name} id={dialogCompanion.id}/>);

    let messageItems = props.state.messagesData.map(lastMessage => <Message message={lastMessage.message}/>);

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