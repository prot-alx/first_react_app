import React from "react";
import { updateNewMessageTextActionCreator, addMessageActionCreator } from "../../../redux/dialogsReducer";
import StoreContext from '../../../StoreContext';
import SendMessageBlock from "./SendMessageBlock";

const SendMessageBlockContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = props.store.getState();

                    let changeMessageText = (text) => {
                        props.store.dispatch(updateNewMessageTextActionCreator(text));
                    };

                    let addMessage = () => {
                        props.store.dispatch(addMessageActionCreator());
                    };

                    return (
                        <SendMessageBlock
                            addMessage={addMessage}
                            changeMessageText={changeMessageText}
                            newMessageText={state.dialogsPage.newMessageText} />
                    );
                }
            }
        </StoreContext.Consumer >
    )
}

export default SendMessageBlockContainer;