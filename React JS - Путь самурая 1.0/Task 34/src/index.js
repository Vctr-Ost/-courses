import React from 'react';
import reportWebVitals from './reportWebVitals';
import state, { addPost, updatePostText } from './state/state'
import { renderAll } from "./render";


renderAll(state, addPost, updatePostText);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();










//import React from 'react';
//import ReactDOM from 'react-dom/client';
//import App from './App';
//import './index.css';
//import reportWebVitals from './reportWebVitals';
//import state, {addPost, subscribe, updatePostText} from './state/state'



//const root = ReactDOM.createRoot(document.getElementById('root'));

//function rerenderEntireTree(state, addPost, updatePostText) {
//    root.render(
//        <React.StrictMode>
//            <App state={state} addPost={addPost} updatePostText={updatePostText}/>
//        </React.StrictMode>
//    );
//}

//rerenderEntireTree(state, addPost, updatePostText);

//subscribe(rerenderEntireTree);


//// If you want to start measuring performance in your app, pass a function
//// to log results (for example: reportWebVitals(console.log))
//// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();