import React from "react";
import styles from './SendMessageBlock.module.css';

const SendMessageBlockContainer = (props) => {
    let state = props.props;

    let newMessageElement = React.createRef();
    
    let sendMessage = () => {
        state.addMessageActionCreator();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        state.updateNewMessageTextActionCreator(text);
    };

    let sendMsgOnEnter = (e) => { if (e.key === "Enter") sendMessage() };

    return (
        <div className={styles.sendMessage}>
            <textarea
                ref={newMessageElement}
                onChange={onMessageChange}
                onKeyUp={sendMsgOnEnter}
                value={state.dialogsPage.newMessageText} />
        <button onClick={sendMessage}>Send</button>
    </div>
    );
}



export default SendMessageBlockContainer;