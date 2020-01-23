import React from "react";
import "./App.css";

import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";

import AnimeIndex from "./components/AnimeIndex";
import Menu from "./components/Menu";
import {MyProfile} from "./components/MyProfile";

import { Router, Route } from "react-router-dom";
import { history } from "./history";



export function App(){
 
    return (
      <div>
        
        <Router history={history}>
          <div>
            <Menu />
            <Route exact path='/' component={AnimeIndex} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/signup' component={SignUpPage} />
            <Route exact path='/myprofile' component={MyProfile} />
          </div>
        </Router>
      </div>
    );
}
