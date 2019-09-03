import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension"; // for redux devtools chrome extension

import abortRehydrationIfStoreShapeChanged from "./abortRehydrationIfStoreShapeChanged";
import reducers from "../reducers";
import { defaultAppState } from "../reducers/appReducer";

const config = {
  key: "root",
  storage: storage,
  transforms: [abortRehydrationIfStoreShapeChanged({ app: defaultAppState })]
};

// Reducers is an object containing all of the reducers (instead of a root reducer created with combineReducers())
const rootReducer = persistReducer(config, reducers);

// Thunk middleware allows functions returned from reducers (for async stuff).
const middleware = [thunk];

export default () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );

  const persistor = persistStore(store);

  return { persistor, store };
};
