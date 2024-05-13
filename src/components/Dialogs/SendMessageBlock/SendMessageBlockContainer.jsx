import React from "react";
import { updateNewMessageTextActionCreator, addMessageActionCreator } from "../../../redux/dialogsReducer";
//import StoreContext from '../../../StoreContext';
import SendMessageBlock from "./SendMessageBlock";

const SendMessageBlockContainer = (props) => {
    // return (
    //     <StoreContext.Consumer>
    //         {
    //             (store) => {
                    
    //                 let addMessage = () => {
    //                     store.dispatch(addMessageActionCreator());
    //                 };

    //                 let changeMessageText = (text) => {
    //                     store.dispatch(updateNewMessageTextActionCreator(text));
    //                 };

    //                 return (
    //                     <SendMessageBlock
    //                         addMessage={addMessage}
    //                         changeMessageText={changeMessageText}
    //                         newMessageText={store.getState().dialogsPage.newMessageText} />
    //                 );
    //             }
    //         }
    //     </StoreContext.Consumer >
    // )
}

export default SendMessageBlockContainer;