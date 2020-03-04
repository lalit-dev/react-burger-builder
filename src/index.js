import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import {BrowserRouter as Router} from "react-router-dom"

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/******  axios global configurations  ********/
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// axios.interceptors.request.use(request => {
//     console.log("Request = ", request);
//     // Edit request config
//     return request;
// }, error => {
//     console.log(error);
//     return Promise.reject(error);
// });

// axios.interceptors.response.use(response => {
//     console.log("Response = ", response);
//     // Edit request config
//     return response;
// }, error => {
//     console.log(error);
//     return Promise.reject(error);
// });

/*********** */

const app = (
    <Router>
        <App />
    </Router>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
