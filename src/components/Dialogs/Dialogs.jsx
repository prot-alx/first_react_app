import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsItems = props.state.dialogsData.map(dialogCompanion => <DialogItem name={dialogCompanion.name} id={dialogCompanion.id}/>);

    let messageItems = props.state.messagesData.map(lastMessage => <Message message={lastMessage.message}/>);
    let newMessageElement = React.createRef();
    let sendMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
     }

    return (
        <div className={classes.dialogsWrapper}>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogsItems}               
                </div>
                <div className={classes.messages}>
                    {messageItems}
                </div>            
            </div>
            <div className={classes.sendMessage}>
                <textarea ref={newMessageElement}></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default Dialogs;