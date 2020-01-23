import React, { useState } from "react";


export function AnimeCard (props) {

  
  const [buttonClick, setButtonClick] = useState(false);
  
    return (
      <div className="ui card">
        <div className="image">
          <img src={props.anime.coverImage} alt="cover of anime"  />
        </div>
        <div className="content">
          <p className="header">{props.anime.title}</p>
          <p className="header">Year Released: {props.anime.seasonYear}</p>
          <div className="header"> Number of Episodes: {props.anime.episodes}
          </div>
        </div>
        <div className="description">{}</div>
        <div className="description">{}</div>

        <div>
          <button className="ui blue button"
            onClick={() => props.addToWatchlist(props.anime)}>Add to Watch List</button>

          <button className="ui green button"
            onClick={() => setButtonClick(!buttonClick)}>Description</button>

          {buttonClick ? (
            <div>
                {props.anime.description}
            </div>
          ) : null}
        </div>
      </div>
    
    )
}
