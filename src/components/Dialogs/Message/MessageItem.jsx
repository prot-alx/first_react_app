import React from "react";
import styles from './MessageItem.module.css';

const Message = (props) => {
    return (
        <div className={styles.messageItems}>
            {props.message}
        </div>
    )
}

export default Message;