import React, { Component } from "react";
import Header from "./Header";


export default class AnimeIndex extends Component {


    state = {
        animeList:[],
        searchedAnime: []
        
    }

    componentDidMount() {
        fetch("http://localhost:3000/")
            .then((res => res.json))
            .then(res => this.setState({animeList: res})


            )}




  render() {
    return (
      <div>
        <Header/>
        <h1>AnimeIndex</h1>
      </div>
    );
  }
}
