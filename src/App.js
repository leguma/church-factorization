import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { createBrowserHistory as createHistory } from "history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import configureStore from "./store/configureStore";

import themeNames from './theme/theme-names';
import Theme from "./theme/Theme";
import Home from "./containers/Home";
import Tutorial from "./containers/Tutorial";
import NotFound from "./components/NotFound";

const history = createHistory({ basename: process.env.REACT_APP_ROOT_URL });
const { persistor, store } = configureStore();

history.listen((location, action) => {
  window.scrollTo(0, 0);
});

export default () => (
  <Provider store={store}>
    <PersistGate loading={<div> Loading ...</div>} persistor={persistor}>
      <Theme value={themeNames.DARK}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/tutorial" component={Tutorial} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Theme>
    </PersistGate>
  </Provider>
);
