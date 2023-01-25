import { combineReducers } from "redux";
import searchReducer from "./searchSlice";
import mobileDrawerReducer from "./mobileDrawerSlice";

export default combineReducers({
  search: searchReducer,
  mobileDrawer: mobileDrawerReducer,
});
