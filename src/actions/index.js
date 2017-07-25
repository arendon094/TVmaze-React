import axios from 'axios';

const ROOT_URL = 'http://api.tvmaze.com';

export const FETCH_TVSHOWS = 'FETCH_TVSHOWS';

export function fetchTVShows(show){
  const url = `${ROOT_URL}/search/shows?q=${show}`;
  const request = axios.get(url);

  return{
    type: FETCH_TVSHOWS,
    payload: request
  };
}
