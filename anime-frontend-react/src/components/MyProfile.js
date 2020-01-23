import React, { useEffect } from "react";
import { AnimeWatchList } from "./AnimeWatchList";
import { AnimeWatchedList } from "./AnimeWatchedList";
import { useCurrentUser } from "../useCurrentUser";
import { AnimeCard } from "./AnimeCard";
import { AnimeCard2 } from "./AnimeCard2";


export function MyProfile() {
  const currentUser = useCurrentUser();

  console.log(currentUser);

  const [watchedAnimes, setWatchedAnimes] = React.useState([]);
  const [animesToBeWatched, setAnimesToBeWatched] = React.useState([]);

  useEffect(() => {
    const animes = currentUser ? currentUser.animes : [];
    const watchlists = currentUser ? currentUser.watchlists : [];

    setWatchedAnimes(
      animes.filter(anime => {
        return watchlists.find(list => list.anime_id === anime.id)
          .has_been_watched;
      })
    );

    setAnimesToBeWatched(
      animes.filter(anime => {
        return !watchlists.find(list => list.anime_id === anime.id)
          .has_been_watched;
      })
    );
  }, [currentUser]);

  if(currentUser == null) return <div class="ui huge red message">Please log-in or sign-up first to view your profile ^.^</div>

  return (
    <div style={{ background: "#A0D0EC", height: "100vh"}}>
      <h1>My Profile</h1>
      <h1>
        First: {currentUser.firstName} Last: {currentUser.lastName}
      </h1>
      <h1>Username: {currentUser.username}</h1>
      <AnimeWatchList
        animesToBeWatched={animesToBeWatched}
        setAnimesToBeWatched={setAnimesToBeWatched}
        setWatchedAnimes={setWatchedAnimes}
        watchedAnimes={watchedAnimes}
      />
      <AnimeWatchedList watchedAnimes={watchedAnimes} />
      {/* <AnimeWatchList />
                <AnimeWatchedList /> */}
    </div>
  );
}
