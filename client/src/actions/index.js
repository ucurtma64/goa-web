import axios from "axios";
import {
  FETCH_USER,
  FETCH_SURVEYS,
  FETCH_PRODUCTS,
  FETCH_POSTS,
  NOTIFICATION_MODAL
} from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const updateUser = values => async dispatch => {
  const res = await axios.post("/api/profile", values);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post("/api/surveys", values);

  history.push("/surveys");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const buyProduct = values => async dispatch => {
  try {
    const res = await axios.post("/api/products", values);

    dispatch({ type: FETCH_USER, payload: res.data.user });

    if (res.data.success) {
      return { success: res.data.success };
    } else if (res.data.error) {
      return { error: res.data.error };
    }
  } catch (error) {
    if (error.response) {
      return { error: error.response.data };
    } else {
      return { error: "unknown error" };
    }
  }
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get("/api/surveys");

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

export const fetchProducts = () => async dispatch => {
  const res = await axios.get("/api/products");

  dispatch({ type: FETCH_PRODUCTS, payload: res.data });
};

export const fetchPosts = (page, limit) => async dispatch => {
  const res = await axios.get("/api/posts?page=" + page + "&limit=" + limit);

  dispatch({ type: FETCH_POSTS, payload: res.data });
};

export const notifyModal = (isVisible, type, message) => async dispatch => {
  dispatch({
    type: NOTIFICATION_MODAL,
    payload: { isVisible: isVisible, type: type, message: message }
  });
};
