import React, { Component } from "react";
export default class Search extends Component {
  render() {
    return (
      <div class="ui search">
        <div class="ui icon input">
          <input
            onChange={e => this.props.searchAnime(e.target.value)}
            class="prompt"
            type="text"
            placeholder="Search for Anime..."
          ></input>
          <i class="search icon"></i>
        </div>
        <div class="results"></div>
      </div>
    );
  }
}
