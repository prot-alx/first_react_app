import './index.css';
import state from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost, updateNewPostText, addMessage, updateNewMessageText, subscribe } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {    
    root.render(
    <React.StrictMode>
        <App 
            state={state} 
            addPost={addPost} 
            updateNewPostText={updateNewPostText} 
            addMessage={addMessage} 
            updateNewMessageText={updateNewMessageText}
        />
    </React.StrictMode>
    );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);