import React, { Component } from 'react';
import AnimeWatchList from "./AnimeWatchList"
import AnimeWatchedList from "./AnimeWatchedList"



export default class UserList extends Component {


state = {
    watchAnime: [],
    watchedAnime: []


}


    render() {
        return (
            <div>
                <AnimeWatchList/>
                <AnimeWatchedList/>
            </div>
        );
    }
}