import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorBoundary from './components/ErrorBoundary';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import store from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = () => {
    root.render(
      <React.StrictMode>
        <ErrorBoundary>
          <Router>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
          </Router>
        </ErrorBoundary>
      </React.StrictMode>
    );
};

// const addPostRerender = (message) => {
//   addPost(message);
//   rerenderEntireTree();
// }

rerenderEntireTree();

store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
