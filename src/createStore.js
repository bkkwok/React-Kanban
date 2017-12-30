import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { loadState, saveState } from "./localStorage";
import throttle from "lodash.throttle";
import omit from "lodash.omit";

export default function() {
  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
          {
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
          }
        )
      : compose;

  const enhancers = composeEnhancers(applyMiddleware(thunk));

  const persistedState = loadState();

  const store = createStore(reducers, persistedState, enhancers);

  store.subscribe(
    throttle(() => {
      const state = omit(store.getState(), "userinterface");
      saveState(state);
    }, 1000)
  );

  return store;
}
