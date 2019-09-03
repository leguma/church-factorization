import React from "react";
import styles from "./styles";

const { ThemeConsumer } = styles;

/**
 * Creates a Higher Order Component that consumes Theme properties
 */
function createThemedComponent(Component) {
  class ThemedComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}; // https://github.com/facebook/react/issues/12670\
    }

    render() {
      return (
        <ThemeConsumer>
          {themeValue => (
            <Component
              {...this.props}
              themeContext={themeValue}
              theme={themeValue.name}
            />
          )}
        </ThemeConsumer>
      );
    }
  }

  return ThemedComponent;
}

export default createThemedComponent;
