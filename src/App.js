import React from 'react';
//import { Route, Link, Switch, withRouter } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
import Content from './pages/Content';
import Users from './pages/Users';
import Header from './includes/Header';
import Sidebar from './includes/Sidebar';
import Footer from './includes/Footer';
import config from './config';

// Configs
window.server = config.server_url;

window.logout = force => {
let logout = () => {
let path = window.location.pathname;
localStorage.clear();
localStorage.previousPath = path;
window.location = "/login";
};

if (force) {
logout();
return false;
}

window.alert2.confirm({
title: "Are you sure that you want to Logout ?",
message: "If you agree your session will be terminated",
confirmText: "Log Out",
onSubmit: () => {
logout();
}
});

// window.alert2.onConfirm = () => {
// logout();
// };

// let path = window.location.pathname;
// localStorage.clear();
// localStorage.previousPath = path;
// window.location = "/login";
};

class App extends React.Component{
   render() {
      return(
      	<Router>
      	<Switch>
      	<Route exact path="/" component={Login}/>
      	<Route exact path="/dashboard" component={Content}/>
         <Route exact path="/users"     component={ Users }/>

         </Switch>
         </Router>
      );
   }
}
export default App;