import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorBoundary from './components/ErrorBoundary';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = (state, addPost, updateNewPostText) => {
    root.render(
      <React.StrictMode>
        <ErrorBoundary>
          <Router>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
          </Router>
        </ErrorBoundary>
      </React.StrictMode>
    );
};

export default rerenderEntireTree;