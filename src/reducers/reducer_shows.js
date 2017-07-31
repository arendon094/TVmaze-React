import _ from 'lodash';
import { FETCH_TVSHOWS, FETCH_SHOW } from '../actions';

export default function(state = {}, action){
  switch (action.type) {
    case FETCH_TVSHOWS:
      const { data } = action.payload;
      return _.mapKeys(data, function(value, key){
        return data[key].show.id;
      });
    case FETCH_SHOW:
      const show = action.payload.data;
      return { ...state, [show.id]: show };
    default:
      return state;
  }
}
