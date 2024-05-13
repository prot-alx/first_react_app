import React, { Fragment } from "react";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/MessageItem";
import StoreContext from "../../StoreContext";
import SendMessageBlockContainer from './SendMessageBlock/SendMessageBlockContainer';
import styles from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    
                    let dialogsItems = store.getState().dialogsPage.dialogsData.map(dialogItem => <DialogItem key={dialogItem.id} name={dialogItem.name} id={dialogItem.id} />);

                    let messageItems = store.getState().dialogsPage.messagesData.map(messageItem => <MessageItem key={messageItem.id} message={messageItem.message} />);

                    return (
                        <Fragment>
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
                                    <SendMessageBlockContainer store={store}/>
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