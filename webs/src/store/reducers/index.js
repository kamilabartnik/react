import {combineReducers} from 'redux';
import auth from './authReducer';
import admin from './authReducer';

export default combineReducers({
  auth,
  admin
})
