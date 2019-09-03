import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import styles from "./styles";
import themes from "./theme-names";

const { applyTheme, global, ThemeProvider } = styles;

const defaults = themeValue => {
  const themeTokens = applyTheme(themeValue);
  const stylesheet = global(themeTokens);
  const className = css(stylesheet);
  return className;
};

const Theme = ({ value, children }) => (
  <ThemeProvider value={{ name: value }}>
    <div className={defaults(value)}>
      <div>{children}</div>
    </div>
  </ThemeProvider>
);

Theme.propTypes = {
  value: PropTypes.oneOf(Object.values(themes)).isRequired,
  children: PropTypes.node
};

Theme.defaultProps = {
  children: null
};

export default Theme;
