import React from 'react';
import ReactDOM from 'react-dom';
import AppAuth from './plugins/Auth/Auth'
import {BrowserRouter} from "react-router-dom";
import './utils/font'
// import './assets/css/base.scss'
import './assets/css/bg.scss'
ReactDOM.render(
    <BrowserRouter>
        <AppAuth />
    </BrowserRouter>
    , document.getElementById('root'));

