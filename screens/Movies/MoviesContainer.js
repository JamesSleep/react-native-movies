import React, { useEffect, useState } from "react";
import { movieApi } from "../../api";
import MoviesPresenter from "./MoviesPresenter";

export default () => {
  const [movies, setMovies] = useState({
    nowPlaying: [],
    nowPlayingError: null,
    popular: [],
    popularError: null,
    upcoming: [],
    upcomingError: null,
    loading : true
  });
  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    const [popular, popularError] = await movieApi.popular();
    const [upcoming, upcomingError] = await movieApi.upcoming();
    setMovies({
      loading : false,
      nowPlaying,
      popular,
      upcoming,
      nowPlayingError,
      popularError,
      upcomingError
    });
  };
  useEffect(()=>{
    getData();
  },[]);

  return (
    <MoviesPresenter {...movies}/>
  );
};