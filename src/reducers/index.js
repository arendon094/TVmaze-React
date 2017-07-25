import { combineReducers } from 'redux';
import ShowsReducer from './reducer_shows';

const rootReducer = combineReducers({
  shows: ShowsReducer
});

export default rootReducer;
