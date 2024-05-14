import {combineReducers, legacy_createStore as createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from './usersReducer';

let reducers = combineReducers({
    dialogsPage : dialogsReducer,
    profilePage : profileReducer,
    sidebarList : sidebarReducer,
    usersPage: usersReducer,
})

let store = createStore(reducers);

export default store;