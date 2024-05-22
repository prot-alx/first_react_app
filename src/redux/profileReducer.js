import {v1} from 'uuid';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {            
    postsData: [
        { id: 1, message: 'Hi, how are you?', likesCount: 15, }, 
        { id: 2, message: 'helloooowoowowo', likesCount: 11, }, 
        { id: 3, message: '2342356', likesCount: 0, }, 
        { id: 4, message: '!!!!!223213', likesCount: 2, }, 
        { id: 5, message: '&&&^^^^!!!!222', likesCount: 5, }
    ],
    profile: null,
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, {id: v1(), message: state.newPostText, likesCount: 0 }]
            }       
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText : action.newText,
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type : ADD_POST});

export const updatePostActionCreator = (text) => ({type : UPDATE_NEW_POST_TEXT, newText : text});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export default profileReducer;