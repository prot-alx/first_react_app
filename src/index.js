import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import StoreContext from './Store-Context';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {    
    root.render(
    <React.StrictMode>
        <StoreContext.Provider value={store}>
            <App 
                state={state}
                dispatch={store.dispatch.bind(store)}
                store={store}
            />
        </StoreContext.Provider>
    </React.StrictMode>
    );
}

rerenderEntireTree(store.getState());

store.subscribe( () => {
    let state = store.getState();
    rerenderEntireTree(state);
});