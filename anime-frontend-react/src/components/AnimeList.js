import React, { Component } from 'react';
import AnimeCard from "./AnimeCard";


export default class AnimeList extends Component {
    render() {
        return (
            <div className="ui cards">
                {this.props.animes.map(anime =>  (
                    <AnimeCard anime={anime}/>
                    
                    
                ))}
            </div>
        );
    }
}