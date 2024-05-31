import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const HEADER_ISFETCHING = 'HEADER_ISFETCHING';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: null,
    isFetching: false,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
               ...state,
               ...action.data,
               isAuth: true,
            }
        case HEADER_ISFETCHING:
            return { ...state, isFetching: action.isFetching };
        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login) => ({ type: SET_USER_DATA, data: {id, email, login }});
export const headerIsFetching = (isFetching) => ({type: HEADER_ISFETCHING, isFetching});

export const authUserData = () => {
    return (dispatch) => {
        dispatch(headerIsFetching(true));
        authAPI.authUserData()
            .then(response => {
                dispatch(headerIsFetching(false));
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            });    
    }
}

export default authReducer;