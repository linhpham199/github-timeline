import { combineReducers } from 'redux';
import repoReducer from './repoReducer';
import userReducer from './userReducer';

const rootReducer = () => (
  combineReducers({
    repos: repoReducer,
    user: userReducer,
  })
);

export default rootReducer
