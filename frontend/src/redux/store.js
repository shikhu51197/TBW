import {
    applyMiddleware,
    legacy_createStore,
    combineReducers,
    compose,
  } from "redux";
  import thunk from "redux-thunk";
  import reducer from "../redux/auth/reducer";
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  export const store = legacy_createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
  );