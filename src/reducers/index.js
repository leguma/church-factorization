import { combineReducers } from "redux";
import appReducer from "./appReducer";

const rootReducer = combineReducers({
  app: appReducer
});

export default (state, action) => {
  // Global handlers (such as session timeout) can be added here.
  return rootReducer(state, action);
};
