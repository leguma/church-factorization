import React from "react";
import { css, keyframes } from "emotion";

import logo from "./logo.svg";

const appLogoSpin = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

const getStyles = () => ({
  animation: `${appLogoSpin} infinite 20s linear`,
  height: "40vmin",
  pointerEvents: "none"
});

export default () => <img src={logo} className={css(getStyles())} alt="logo" />;
