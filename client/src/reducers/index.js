import { combineReducers } from "redux";
import authReducer from "./authReducer";
import surveyReducer from "./surveysReducer";
import productsReducer from "./productsReducer";

export default combineReducers({
  auth: authReducer,
  surveys: surveyReducer,
  products: productsReducer
});
