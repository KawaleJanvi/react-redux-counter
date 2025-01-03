import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import counterStore from './store/redux-index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={counterStore}><App /></Provider>);
