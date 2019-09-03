import React, { useState } from "react";

import createThemedComponent from "../theme/themed-component";
import styles from "../theme/styles";
import { css } from "emotion";

const getStyles = theme => {
  const { fontSizes } = styles.applyTheme(theme);
  return {
    input: {
      fontSize: fontSizes.body.large,
      width: "4rem",
      marginTop: "1rem"
    }
  };
};

const coerceRange = val => {
  let x = parseInt(val);
  return isNaN(x) || x < 1 ? 1 : x > 200 ? 200 : x;
};

const NumberEntry = ({ onSubmitNumber, theme }) => {
  const [value, setValue] = useState(1);
  return (
    <div className={css(getStyles(theme))}>
      <div>
        <label>
          Enter a number from 1-200
          <br />
          <input
            type="number"
            min="1"
            max="200"
            value={value}
            onChange={e => setValue(coerceRange(e.target.value))}
          />
        </label>
      </div>
      <button onClick={() => onSubmitNumber(value)}>Find factors!</button>
    </div>
  );
};

export default createThemedComponent(NumberEntry);
