import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import ReactDOM from 'react-dom';

import Search from './containers/Search';
import App from './containers/App';

import { BrowserRouter, Route, Link } from 'react-router-dom'

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>),
    document.getElementById('root'));