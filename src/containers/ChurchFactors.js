import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { updateNumber } from "../actions/appActions";

const getFactors = number => {
  // Incredibly dumb brute force method meant to simulate basic Church Numeral-encoded approach.
  // This could be animated to explain what lambda calculus would be doing.
  const factors = [];

  for (let i = 1; i <= number; i++) {
    let unaryNumber = number;
    while (unaryNumber > 0) {
      unaryNumber -= i;
    }

    if (unaryNumber === 0) factors.push(i);
  }

  return factors;
};

const randomHsl = () =>
  "hsla(" +
  Math.random() * 360 +
  ", 100%, " +
  (Math.random() * 30 + 50) +
  "%, 1)";

const ChurchFactors = ({
  number,
  redirectToTutorial,
  redirectToNumberInput,
  resetNumber
}) => {
  if (redirectToTutorial) return <Redirect to={"/tutorial"} />;
  if (redirectToNumberInput) return <Redirect to={"/"} />;

  const factors = getFactors(number);

  return (
    <>
      <button onClick={() => resetNumber()}>Try a new number</button>
      <h2>{number}</h2>
      {factors.map(factor => (
        <div key={factor}>
          <p>{factor}</p>
          {Array(number / factor)
            .fill()
            .map((_, i) => (
              <span style={{ color: randomHsl() }} key={i}>
                <span>
                  {Array(factor)
                    .fill()
                    .map((_, j) => (
                      <span key={j}>|</span>
                    ))}
                </span>
              </span>
            ))}
        </div>
      ))}
    </>
  );
};

const mapStateToProps = state => ({
  redirectToTutorial: !state.app.tutorialViewed,
  redirectToNumberInput: !state.app.number,
  number: state.app.number
});

const mapDispatchToProps = dispatch => ({
  resetNumber: () => dispatch(updateNumber(undefined))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChurchFactors);
