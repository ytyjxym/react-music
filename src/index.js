import React from 'react';
import ReactDOM from 'react-dom';
// import AppAuth from './plugins/Auth/Auth'
// import App from './library/APP/App'
import store from './plugins/redux'
import {Provider} from 'react-redux'
import {BrowserRouter,Route} from "react-router-dom";
import './utils/font'
import App from "./library/APP/App";
import baseUrl from "./baseUrl/baseUrl";
import './assets/css/icon.scss'
import './assets/css/base.scss'
React.baseUrl = baseUrl.baseUrl
ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <Route component={App}/>
    </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

