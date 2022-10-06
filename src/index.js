import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogs = [
  {id: '1', name: 'Galina'},
  {id: '2', name: 'Vladimir'},
  {id: '3', name: 'Anna'},
  {id: '4', name: 'Elena'},
  {id: '5', name: 'Kirill'},
  {id: '6', name: 'Olga'},
];

const messages = [
  {id: '1', message: 'Hi'},
  {id: '2', message: 'How is you it-kamasutra?'},
  {id: '3', message: 'Good'},
];

const posts = [
  {id: 1, message: "Hi, how are you?", likesCount: 10},
  {id: 2, message: "It's my first post", likesCount: 1000},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
