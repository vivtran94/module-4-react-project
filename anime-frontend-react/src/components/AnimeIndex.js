import React from "react";
import {Header} from "./Header";
import {AnimeList} from "./AnimeList";
import Search from "./Search";

export default class AnimeIndex extends React.Component {
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

  sortPopular = () => {
    console.log("running sortPopular")
    let newArray = this.state.animeList.sort((a,b) => {return b.popularity-a.popularity})
    this.setState({
      displayedAnime: newArray
    })
  }

  sortRating = () => {
    console.log("running sortRating")
    let newArray = this.state.animeList.sort((a,b) => {return b.averageScore-a.averageScore})
    this.setState({
      displayedAnime: newArray
    })
  }

  render() {
    console.log(this.state.displayedAnime);
    return (
      <div className="App">
        <Header />
        <Search searchAnime={this.searchAnime} sortPopular={this.sortPopular} sortRating={this.sortRating}/>
        <br></br>
        <AnimeList animes={this.state.displayedAnime} />
      </div>
    );
  }
}
