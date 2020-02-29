import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";

//const routing = Routes();
if(localStorage.userData) window.user=JSON.parse(localStorage.userData)

//ReactDOM.render(routing, document.getElementById('root'));

ReactDOM.render(
  <BrowserRouter basename=''>
    <Route path='/' render={() => <App />} />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
