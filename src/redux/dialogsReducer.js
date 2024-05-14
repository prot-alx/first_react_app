import {v1} from 'uuid';

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        { id: 1, name: 'Alex'}, 
        { id: 2, name: 'Andrey' }, 
        { id: 3, name: 'Olga' }, 
        { id: 4, name: 'Timur' }, 
        { id: 5, name: 'Kirill' }
    ],
    
    messagesData: [
        { id: 1, message: 'asdasd'}, 
        { id: 2, message: 'fghfghfgh' }, 
        { id: 3, message: '2342356' }, 
        { id: 4, message: '!!!!!223213' }, 
        { id: 5, message: '&&&^^^^!!!!222' }
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: v1(),
                message: state.newMessageText
            };
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage; 
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
    console.log('SEND_MESSAGE Action triggered');
    return {type : SEND_MESSAGE}
}

export const updateNewMessageTextActionCreator = (text) => {
    console.log('UPDATE_NEW_MESSAGE_TEXT Action triggered')
    return {type : UPDATE_NEW_MESSAGE_TEXT, newMessage : text}
}

export default dialogsReducer;