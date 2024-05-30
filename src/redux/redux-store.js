import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from './usersReducer';
import authReducer from "./authReducer";
import { thunk as thunkMiddleware } from "redux-thunk";

let reducers = combineReducers({
    dialogsPage : dialogsReducer,
    profilePage : profileReducer,
    sidebarList : sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;