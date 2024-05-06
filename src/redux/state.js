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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 6,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._callSubscriber(this._state);
            this._state.profilePage.newPostText = '';

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 6,
                message: this._state.dialogsPage.newMessageText
            };
            this._state.dialogsPage.messagesData.push(newMessage);
            this._callSubscriber(this._state);
            this._state.dialogsPage.newMessageText = '';

        } else if (action.type ==='UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);    
        }
    }
}

export default store;
//window.store = store;