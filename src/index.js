import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Course } from './Components/Course';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from './Components/Navigationbar/Navbar';
import { Login } from './Components/Navigationbar/Login';
import { ProfilePage } from './Components/ProfilePage';

// Taken from https://github.com/diplomit-dtu/diplomPortal/blob/master/src/index.js
const token = getParameterByName("token");
console.log(token);
if (token!=null && token.length>0){
    //Store token and redirect to baseURL
    localStorage.setItem("portal-jwt-Token", token);
    window.location.replace("/");
}

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <NavBar/>
      <Switch>
        <Route exact path={'/'} component={App} />
        <Route path={'/course/:id'} component={Course} />
        <Route exact path={'/signin'} component={Login} />
        <Route exact path={'/profile'} component={ProfilePage} />
        <Route render={() => <h1>404</h1>} />
      </Switch>

    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// Taken from https://github.com/diplomit-dtu/diplomPortal/blob/master/src/index.js
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  //name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
