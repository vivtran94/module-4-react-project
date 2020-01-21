import React, { Component } from 'react';


export default class Header extends Component {
    render() {
        return (
          <div className="ui clearing segment">
            {this.props.currentUser == null ? 
            <h3 className="ui right floated header"></h3> 
            : 
            <h3 className="ui right floated header">Hello, {this.props.currentUser.firstName}!</h3>}
            <h3 className="ui left floated header">Anime</h3>
          </div>
        );
    }
}