import axios from 'axios';
import { 
    FETCH_USER, 
    FETCH_SURVEYS, 
    SUBMIT_SURVEY,
    IYZIPAY_START
} from "./types";

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data });
};

export const iyzipayStart = token => async dispatch => {
    const res = await axios.post('/api/iyzipay', token);

    dispatch({ type: FETCH_USER, payload: res.data })
};

export const submitSurvey = (values, history) => async dispatch => {
    console.log('submiiiiiiiiiiiiiiiiiit');
    const res = await axios.post('/api/surveys', values);

    history.push('/surveys');
    dispatch({ type: SUBMIT_SURVEY, payload: res.data })
};

export const fetchSurveys = () => async dispatch => {
    const res = await axios.get('/api/surveys');

    dispatch({ type: FETCH_SURVEYS, payload: res.data });
};