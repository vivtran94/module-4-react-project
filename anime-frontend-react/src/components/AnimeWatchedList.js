import React, { Component } from "react";
import { AnimeCard3 } from "./AnimeCard3";

export class AnimeWatchedList extends Component {
  render() {
    return (
      <div
        style={{
          float: "left",
          width: "40%",
          padding: "5%",
          backgroundColor: "#9ee39a"
        }}
      >
        <h1>AnimeWatchedList</h1>
        {this.props.watchedAnimes.map(anime => (
          <AnimeCard3 anime={anime} />
        ))}
      </div>
    );
  }
}
