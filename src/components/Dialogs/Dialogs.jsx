import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/MessageItem";
import SendMessageBlock from './SendMessageBlock/SendMessageBlock';
import styles from './Dialogs.module.css';

const Dialogs = (props) => {

    let dialogsItems = props.dialogsPage.dialogsData.map(dialogItem => <DialogItem key={dialogItem.id} name={dialogItem.name} id={dialogItem.id} />);

    let messageItems = props.dialogsPage.messagesData.map(messageItem => <MessageItem key={messageItem.id} message={messageItem.message} />);

    return (
        <div className={styles.dialogsWrapper}>
            <div className={styles.dialogs}>
                <div>
                    {dialogsItems}
                </div>
                <div>
                    {messageItems}
                </div>
            </div>
            <div>
                <SendMessageBlock props={props}/>
            </div>
        </div>
    );
}


export default Dialogs;