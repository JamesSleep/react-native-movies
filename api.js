import axios from "axios";

const TMDB_KEY = "6d499214320b2e165ed71aabbc1a7e90";

const makeRequest = (path, params) => axios.get(`https://api.themoviedb.org/3${path}`, {
    params : {
        ...params,
        api_key : TMDB_KEY
    }
});

const getAnything = async (path, param = {}) => {
    try {
        const {
            data: { results }, data
        } = await makeRequest(path, param);
        return [results || data, null];
    } catch (e) {
        console.log(e);
        return [null, e];
    }
}

export const movieApi = {
    nowPlaying: () => getAnything("/movie/now_playing"),
    popular: () => getAnything("/movie/popular"),
    upcoming: () => getAnything("/movie/upcoming",{ region: "kr" }),
    search: query => getAnything("/search/movie", { query }),
    movie: id => getAnything(`/movie/${id}`),
    discover: () => getAnything("/discover/movie")
}

export const tvApi = {
    today: () => getAnything("/tv/airing_today"),
    thisWeek: () => getAnything("/tv/on_the_air"),
    topRated: () => getAnything("/tv/top_rated"),
    popular: () => getAnything("/tv/popular"),
    search: query => getAnything("/search/tv",{ query }),
    show: id => getAnything(`/tv/${id}`)
}

const Poster ="https://images.unsplash.com/photo-1571847140471-1d7766e825ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=673&q=80";

export const apiImage = (path, defaultPoster= Poster) => 
    path? `https://image.tmdb.org/t/p/w500${path}`
    : defaultPoster;
