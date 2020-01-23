import React from 'react';
import {AnimeCard} from "./AnimeCard";


export function AnimeList (props) {



    function addToWatchlist(anime) {
        console.log(anime)
        console.log("running addtowatchlist")
        fetch('http://localhost:3000/watchlists', {
            method: 'POST',
            credentials: 'include',
            headers: { 
                'Content-Type' : 'application/json'}, 
            body: JSON.stringify({
                // user_id: currentUser.id,
                anime_id: anime.id
            })
        })
            .then(res => res.json())
            .then(res => console.log(res))
      }
    
        return (
            <div className="ui cards">
                {props.animes.map(anime =>  (
                    <AnimeCard anime={anime} key={anime.popularity} addToWatchlist={addToWatchlist}/>
                    
                    
                ))}
            </div>
        );

}