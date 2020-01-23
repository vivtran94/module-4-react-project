import React from 'react';
import AnimeWatchList from "./AnimeWatchList"
import AnimeWatchedList from "./AnimeWatchedList"
import { useCurrentUser } from "../useCurrentUser";
import {AnimeCard} from "./AnimeCard"


export function MyProfile() {

   const  currentUser = useCurrentUser()
    

        if(currentUser == null) return <h1>Loading...</h1>

    
        return (
            <div>
                <h1>My Profile</h1>
                <h1>First: {currentUser.firstName} Last: {currentUser.lastName}</h1>
                <h1>Username: {currentUser.username}</h1>
                {currentUser.animes.map(anime => (
                    <AnimeCard anime={anime}/>
                ))}
                <AnimeWatchList />
                <AnimeWatchedList />
            </div>
        );
    
}