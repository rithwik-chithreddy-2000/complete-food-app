import { combineReducers } from "redux";
import auth from "../../app/auth/reducers/authReducers";
import alerts from "../../app/core/reducers/alertReducers";
import food from "../../app/foods/reducers/foodReducer";

export default combineReducers({
  auth,
  alerts,
  food,
});
