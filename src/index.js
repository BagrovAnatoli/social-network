import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorBoundary from './components/ErrorBoundary';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import StoreContext from './StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = () => {
    root.render(
      <React.StrictMode>
        <ErrorBoundary>
          <Router>
            <StoreContext.Provider value={store}>
              <App />
            </StoreContext.Provider>
          </Router>
        </ErrorBoundary>
      </React.StrictMode>
    );
};

rerenderEntireTree();

store.subscribe(rerenderEntireTree);