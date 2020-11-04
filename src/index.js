import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Route,
  Switch
  } from 'react-router-dom';
import { About } from './screen/About';
import { MyProfile } from './screen/MyProfile';

ReactDOM.render(
  <Router>
    <Switch>
    <Route exact path={process.env.PUBLIC_URL} component={App} />
    <Route path={`${process.env.PUBLIC_URL}/about`} component={About} /> 
    <Route path={`${process.env.PUBLIC_URL}/profile`} component={MyProfile} /> 
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
