import React from "react";
import "./App.css";
import {BrowserRouter, Route} from 'react-router-dom';
import LoginPage from "./LoginPage";
import AnimeIndex from "./components/AnimeIndex";
import Menu from "./components/Menu";
import SignUpPage from "./components/SignUpPage";


class App extends React.Component {
  render() { 
    return (
      <div>
        <BrowserRouter>
          <div>
            <Menu />
            <Route exact path='/' component={AnimeIndex} />
            <Route exact path='/animes' component={AnimeIndex} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/signup' component={SignUpPage} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}


export default App;