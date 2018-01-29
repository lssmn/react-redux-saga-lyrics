import { combineReducers } from 'redux';
import search from './search';
import result from './result';

const reducers = combineReducers({
  search,
  result,
});

export default reducers;
