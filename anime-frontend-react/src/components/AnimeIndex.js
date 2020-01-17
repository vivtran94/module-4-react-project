import React, { Component } from "react";
import Header from "./Header";
import AnimeList from "./AnimeList";
import Search from "./Search";

export default class AnimeIndex extends Component {
  state = {
    animeList: [],
    displayedAnime: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/animes")
      .then(res => res.json())
      .then(res => this.setState({ animeList: res, displayedAnime: res }));
  }

  searchAnime = searchinput => {
    this.setState({
      displayedAnime: this.state.animeList.filter(anime =>
        anime.title.toLowerCase().includes(searchinput.toLowerCase())
      )
    });
    console.log(searchinput);
  };

  render() {
    console.log(this.state.displayedAnime);
    return (
      <div>
        <Header/>
        <Search searchAnime={this.searchAnime} />
        <br></br>
        <AnimeList animes={this.state.displayedAnime} />
      </div>
    );
  }
}
