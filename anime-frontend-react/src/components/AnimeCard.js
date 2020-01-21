import React, { Component } from "react";
export default class AnimeCard extends Component {
  render() {
    return (
      <div className="ui card">
        <div className="image">
          <img src={this.props.anime.coverImage} alt="cover of anime"  />
        </div>
        <div className="content">
          <p className="header">{this.props.anime.title}</p>
          <p className="header">Year Released: {this.props.anime.seasonYear}</p>
          <div className="header"> Number of Episodes: {this.props.anime.episodes}
          </div>
        </div>
            <div className="description">{}</div>
       <div className="description">{}</div>
        
        <button className="ui blue button">Add to Watch List</button>

      </div>
    );
  }
}
