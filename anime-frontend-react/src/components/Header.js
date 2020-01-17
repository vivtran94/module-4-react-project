import React, { Component } from 'react';


export default class Header extends Component {
    render() {
        return (
          <div class="ui clearing segment">
            <h3 class="ui right floated header"></h3>
            <h3 class="ui left floated header">Anime</h3>
          </div>
        );
    }
}