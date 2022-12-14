import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorBoundary from './components/ErrorBoundary';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import { Provider } from 'react-redux';

window.store = store;


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
    <ErrorBoundary>
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </ErrorBoundary>
  // </React.StrictMode>
);

//906deb40-189c-468a-9e06-c52268474800