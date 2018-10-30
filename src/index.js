import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import { Provider } from 'react-redux'
import store from './config/store'

const app = <Provider store={store}>
                <BrowserRouter>
                     <App />
                 </BrowserRouter>
            </Provider>

ReactDOM.render(app, document.getElementById('root'));

