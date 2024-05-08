const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'; 

let initialState = {            
    postsData: [
        { id: 1, message: 'Hi, how are you?', likesCount: 15, }, 
        { id: 2, message: 'helloooowoowowo', likesCount: 11, }, 
        { id: 3, message: '2342356', likesCount: 0, }, 
        { id: 4, message: '!!!!!223213', likesCount: 2, }, 
        { id: 5, message: '&&&^^^^!!!!222', likesCount: 5, }
    ],
    newPostText: ''  
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: state.newPostText,
                likesCount: 0
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {type : ADD_POST}
}

export const updatePostActionCreator = (text) => {
    return {type : UPDATE_NEW_POST_TEXT, newText : text}
}

export default profileReducer;