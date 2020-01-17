import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Menu extends Component {
    render() {
        return (
          <div className="ui blue three item inverted menu">
            <Link className="item active" to="/">Home</Link>
            <Link className="item" to="/about">About</Link>
            <Link className="item" to="/login">Login</Link>
          </div>
        );
    }
}