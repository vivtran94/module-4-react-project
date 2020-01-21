import React, { Component } from "react";
export default class AnimeCard extends Component {
  state = {
    buttonClicked: false
  };

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

        <div>
          <button className="ui blue button">Add to Watch List</button>

          <button
            onClick={() =>
              this.setState({ buttonClicked: !this.state.buttonClicked })
            }
            className="ui green button"
          >
            Description
          </button>

          {this.state.buttonClicked ? (
            <div>
                {this.props.anime.description}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
