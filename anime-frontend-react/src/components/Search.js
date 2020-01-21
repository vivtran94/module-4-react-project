import React, { Component } from "react";
export default class Search extends Component {

  state = {
    popularClicked: null,
    ratingClicked: null
  }

  popularClick = () => {
    this.setState({
      popularClicked: true,
      ratingClicked: false
    })
  }

  ratingClick = () => {
    this.setState({
      popularClicked: false,
      ratingClicked: true
      
    })
  }

    render() {
        return (
            
        <div className="ui search">
          <div className="ui icon input">
            <input 
              onChange={(e) => this.props.searchAnime(e.target.value)} 
              className="prompt" 
              type="text" 
              placeholder="Search for Anime..." 
              style={{width:"400px"}}>
            </input>
            <i className="search icon"></i>
          </div>
          <div className="results"></div>
          <div>
            <input type="radio"
              onClick={() => {this.props.sortPopular(); this.popularClick()}} 
              checked={this.state.popularClicked ? "checked" : ""} />  Most Popular<br></br>
            <input type="radio"
              onClick={() => {this.props.sortRating(); this.ratingClick()}} 
              checked={this.state.ratingClicked ? "checked" : ""} />  Highest Rating
          </div>
        </div>
             
            
        );
    }
}
