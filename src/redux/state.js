import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {            
        postsData: [
            { id: 1, message: 'Hi, how are you?', likesCount: 15, }, 
            { id: 2, message: 'helloooowoowowo', likesCount: 11, }, 
            { id: 3, message: '2342356', likesCount: 0, }, 
            { id: 4, message: '!!!!!223213', likesCount: 2, }, 
            { id: 5, message: '&&&^^^^!!!!222', likesCount: 5, }
        ],
        newPostText: 'it-text'  
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
    },  
}

export let addPost = () => {
    let newPost = {
        id: 6,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.postsData.push(newPost);
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;