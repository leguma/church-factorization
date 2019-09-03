import React from "react";
import themeDark from "./theme-dark";
import merge from "lodash.merge";
import tokens from "./tokens";
import global from "./global.css";
import themes from "./theme-names";

function applyTheme(theme) {
  switch (theme) {
    case themes.DARK:
      return merge({}, tokens, themeDark);
    default:
      return tokens;
  }
}

const themeContext = React.createContext({ name: themes.DARK });

export default {
  applyTheme,
  global,
  ThemeProvider: themeContext.Provider,
  ThemeConsumer: themeContext.Consumer,
  themeContext,
  tokens
};
