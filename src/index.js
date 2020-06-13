import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import LoginComponent from './login/login';
import SignupComponent from './signup/signup';
import DashboardComponent from './dashboard/dashboard';


const firebase = require('firebase')
require('firebase/firestore')

firebase.initializeApp({
  apiKey: "AIzaSyAZ_KsDVMYMew__kkD5bV2ushEIeXXR6Mc",
    authDomain: "sagred-test.firebaseapp.com",
    databaseURL: "https://sagred-test.firebaseio.com",
    projectId: "sagred-test",
    storageBucket: "sagred-test.appspot.com",
    messagingSenderId: "77805959932",
    appId: "1:77805959932:web:60ea78995be36134c97579"
});

const route = (
  <Router>
    <div id="routing-container">
      <Route path = "/login" component = {LoginComponent}></Route>
      <Route path = "/signup" component = {SignupComponent}></Route>
      <Route path = "/dashboard" component = {DashboardComponent}></Route>
    </div>
  </Router>
)

ReactDOM.render(route,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
