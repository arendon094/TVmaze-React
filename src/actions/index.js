import axios from 'axios';

export const FETCH_TVSHOWS = 'FETCH_TVSHOWS';
export const FETCH_TVSHOW = 'FETCH_TVSHOW'

const ROOT_URL = 'http://api.tvmaze.com';

export function fetchTVShows(show){
  const url = `${ROOT_URL}/search/shows?q=${show}`;
  const request = axios.get(url);

  return{
    type: FETCH_TVSHOWS,
    payload: request
  };
}

export function fetchTVShow(id){
  const request = axios.get(`${ROOT_URL}/shows/${id}?embed=cast`);

  return{
    type: FETCH_TVSHOW,
    payload: request
  };
}
