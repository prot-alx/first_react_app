import React, { Fragment } from "react";
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../src/redux/dialogsReducer'
import StoreContext from "../../StoreContext";

const Dialogs = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let dialogsItems = store.getState().dialogsPage.dialogsData.map(dialogItem => <DialogItem key={dialogItem.id} name={dialogItem.name} id={dialogItem.id} />);

                    let messageItems = store.getState().dialogsPage.messagesData.map(messageItem => <Message key={messageItem.id} message={messageItem.message} />);

                    let newMessageElement = React.createRef();

                    let sendMessage = () => {
                        store.getState().dialogsPage.newMessageText === '' ? alert('Enter some text') : store.dispatch(addMessageActionCreator());
                    }

                    let onMessageChange = () => {
                        let text = newMessageElement.current.value;
                        let action = updateNewMessageTextActionCreator(text)
                        store.dispatch(action);
                    }

                    let sendMsgOnEnter = (e) => { if (e.key === "Enter") sendMessage() };

                    return (
                        <Fragment>
                            <div className={styles.dialogsWrapper}>
                                <div className={styles.dialogs}>
                                    <div className={styles.dialogsItems}>
                                        {dialogsItems}
                                    </div>
                                    <div className={styles.messageItems}>
                                        {messageItems}
                                    </div>
                                </div>
                                <div className={styles.sendMessage}>
                                    <textarea ref={newMessageElement} onChange={onMessageChange} onKeyUp={sendMsgOnEnter} value={store.getState().dialogsPage.newMessageText} />
                                    <button onClick={sendMessage}>Send</button>
                                </div>
                            </div>
                        </Fragment>
                    );

                }
            }
        </StoreContext.Consumer>
    )
}

export default Dialogs;