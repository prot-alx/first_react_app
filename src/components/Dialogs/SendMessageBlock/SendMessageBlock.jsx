import React from "react";
import styles from './SendMessageBlock.module.css';
import StoreContext from '../../../StoreContext';

const SendMessageBlock = (props) => {

    let newMessageElement = React.createRef();

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.changeMessageText(text);
    };

    let sendMessage = () => {
        props.addMessage();
    }

    let sendMsgOnEnter = (e) => { if (e.key === "Enter") sendMessage() };

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    return (
                        <div className={styles.sendMessage}>
                            <textarea
                                ref={newMessageElement}
                                onChange={onMessageChange}
                                onKeyUp={sendMsgOnEnter}
                                value={props.newMessageText} />
                            <button onClick={sendMessage}>Send</button>
                        </div>

                    );
                }
            }
        </StoreContext.Consumer >
    )

}


export default SendMessageBlock;