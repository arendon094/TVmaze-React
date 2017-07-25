import _ from 'lodash';
import { FETCH_TVSHOWS } from '../actions';

export default function(state = {}, action){
  switch (action.type) {
    case FETCH_TVSHOWS:
      const { data } = action.payload;
      return _.mapKeys(data, function(value, key){
        return data[key].show.id;
      });
    default:
      return state;
  }
}
