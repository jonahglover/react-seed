import { combineReducers } from 'redux';
import todos from './todos';

const AppReducers = combineReducers({
  todos,
});

export default AppReducers;
