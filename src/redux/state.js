const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'; 
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {            
            postsData: [
                { id: 1, message: 'Hi, how are you?', likesCount: 15, }, 
                { id: 2, message: 'helloooowoowowo', likesCount: 11, }, 
                { id: 3, message: '2342356', likesCount: 0, }, 
                { id: 4, message: '!!!!!223213', likesCount: 2, }, 
                { id: 5, message: '&&&^^^^!!!!222', likesCount: 5, }
            ],
            newPostText: ''  
        },
        
        dialogsPage: {
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
        },  

        sidebarList: [ 
            {id: 1, menuName: 'Profile', menuAddress: '/profile'},
            {id: 2, menuName: 'Messages', menuAddress: '/messages'},
            {id: 3, menuName: 'Music', menuAddress: '/music'},
            {id: 4, menuName: 'Options', menuAddress: '/options'},
            {id: 5, menuName: 'Help', menuAddress: '/help'},
        ]
    },
    
    getState() {
        return this._state;
    },

    _callSubscriber() { 
        console.log('state changed') 
    },
    
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {        
        if (action.type === ADD_POST) {
            let newPost = {
                id: 6,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._callSubscriber(this._state);
            this._state.profilePage.newPostText = '';

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 6,
                message: this._state.dialogsPage.newMessageText
            };
            this._state.dialogsPage.messagesData.push(newMessage);
            this._callSubscriber(this._state);
            this._state.dialogsPage.newMessageText = '';

        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);    
        } else {
            alert('wrong action type:', action.type);
        }
    }
}

export const addPostActionCreator = () => {
    return {type : ADD_POST}
}

export const updatePostActionCreator = (text) => {
    return {type : UPDATE_NEW_POST_TEXT, newText : text}
}

export const addMessageActionCreator = () => {
    return {type : ADD_MESSAGE}
}

export const updateNewMessageTextActionCreator = (text) => {
    return {type : UPDATE_NEW_MESSAGE_TEXT, newMessage : text}
}

export default store;
//window.store = store;