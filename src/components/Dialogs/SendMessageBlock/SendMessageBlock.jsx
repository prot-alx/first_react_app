import React from "react";
import styles from './SendMessageBlock.module.css';

const SendMessageBlockContainer = (props) => {
    let state = props.props;

    console.log(state);

    let newMessageElement = React.createRef();

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        state.updateNewMessageTextActionCreator(text);
    };

    let sendMessage = () => {
        state.addMessageActionCreator();
    }

    let sendMsgOnEnter = (e) => { if (e.key === "Enter") sendMessage() };

    return (
        <div className={styles.sendMessage}>
            <textarea
                ref={newMessageElement}
                onChange={onMessageChange}
                onKeyUp={sendMsgOnEnter}
                value={state.newMessageText} />
        <button onClick={sendMessage}>Send</button>
    </div>
    );
}



export default SendMessageBlockContainer;