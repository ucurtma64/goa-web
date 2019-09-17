import { combineReducers } from 'redux';
import authReducer from './authReducer';
import surveyReducer from './surveysReducer';

export default combineReducers({
    auth: authReducer,
    surveys: surveyReducer
});