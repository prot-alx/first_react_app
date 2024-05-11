import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {Provider} from './StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {    
    root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App 
                state={state}
                dispatch={store.dispatch.bind(store)}
                store={store}
            />
        </Provider>
    </React.StrictMode>
    );
}

rerenderEntireTree(store.getState());

store.subscribe( () => {
    let state = store.getState();
    rerenderEntireTree(state);
});