import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

export function renderAll(state, addPost, updatePostText) {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updatePostText={updatePostText} />
        </React.StrictMode>
    );
}
