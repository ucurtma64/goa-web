import { combineReducers } from "redux";
import authReducer from "./authReducer";
import surveyReducer from "./surveysReducer";
import productsReducer from "./productsReducer";
import postsReducer from "./postsReducer";
import notificationModalReducer from "./notificationModalReducer";

export default combineReducers({
  auth: authReducer,
  surveys: surveyReducer,
  products: productsReducer,
  posts: postsReducer,
  notificationModal: notificationModalReducer
});
