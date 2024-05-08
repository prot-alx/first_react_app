import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarList = sidebarReducer(this._state.sidebarList);
        this._callSubscriber(this._state);        
    }
}

export default store;
//window.store = store;