import React, { Fragment } from "react";
import { updateNewMessageTextActionCreator, addMessageActionCreator } from "../../../redux/dialogsReducer";
//import SendMessageBlock from "./SendMessageBlock";
import StoreContext from '../../../StoreContext'
import styles from './SendMessageBlockContainer.module.css'


const SendMessageBlockContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    
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
                            <div className={styles.sendMessage}>
                                <textarea ref={newMessageElement} onChange={onMessageChange} onKeyUp={sendMsgOnEnter} value={store.getState().dialogsPage.newMessageText} />
                                <button onClick={sendMessage}>Send</button>
                            </div>
                        </Fragment>
                    );
                }
            }
        </StoreContext.Consumer >
    )
}


export default SendMessageBlockContainer;


