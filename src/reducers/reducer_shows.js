import _ from 'lodash';
import { FETCH_TVSHOWS, FETCH_TVSHOW } from '../actions';

export default function(state = {}, action){
  switch (action.type) {
    case FETCH_TVSHOWS:
      const { data } = action.payload;
      return _.mapKeys(data, function(value, key){
        return data[key].show.id;
      });
    case FETCH_TVSHOW:
      return { ...state, [action.payload.data.show.id]: action.payload.data };
    default:
      return state;
  }
}
