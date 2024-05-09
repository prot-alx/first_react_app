import {combineReducers, legacy_createStore as createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let reducers = combineReducers({
    dialogsPage : dialogsReducer,
    profilePage : profileReducer,
    sidebarList : sidebarReducer,
})

let store = createStore(reducers);

export default store;