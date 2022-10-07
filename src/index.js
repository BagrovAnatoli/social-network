// import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import { addPost, addChangeText } from './redux/state';
// import ErrorBoundary from './components/ErrorBoundary';
// import { BrowserRouter as Router } from 'react-router-dom';
import rerenderEntireTree from './render';






// const addPostRerender = (message) => {
//   addPost(message);
//   rerenderEntireTree();
// }

rerenderEntireTree(state, addPost, addChangeText);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
