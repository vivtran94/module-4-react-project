import React, { Component } from "react";
import { AnimeCard2 } from "./AnimeCard2";

export const AnimeWatchList = props => {
  let changeToWatched = anime => {
    fetch(`http://localhost:3000/watchlists/${anime.id}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
      //   body: JSON.stringify({
      //     watchlist_id: watchlist.id
      //   })
    }).then(() => {
      props.setAnimesToBeWatched(
        props.animesToBeWatched.filter(a => a.id !== anime.id)
      );
      props.setWatchedAnimes([...props.watchedAnimes, anime]);
    });
  };

  return (
    <div
      style={{
        float: "left",
        width: "40%",
        padding: "5%",
        backgroundColor: "#c6f2f7"
      }}
    >
      <h1>AnimeWatchList</h1>
      {props.animesToBeWatched.map(anime => (
        <AnimeCard2 changeToWatched={changeToWatched} anime={anime} />
      ))}
    </div>
  );
};
