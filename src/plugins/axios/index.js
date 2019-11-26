import axios from 'axios'
import React from 'react'
import baseUrl from "../../baseUrl/baseUrl";
import store from "../redux";
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    store.dispatch({type:'LOADING',payload:true})
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    store.dispatch({type:'LOADING',payload:false})
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

React.axios = axios
axios.baseUrl = baseUrl.baseUrl
export default axios