import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import {
  updateTutorialViewed,
  updateTutorialStep
} from "../actions/appActions";
import { tutorialContent } from "../constants";
import LogoSpinner from "../components/LogoSpinner";

const Tutorial = ({
  step,
  tutorialViewed,
  onSkipTutorial,
  onStepNavigation
}) => {
  if (tutorialViewed || step > tutorialContent.length)
    return <Redirect to="/" />;
  if (step === 0)
    return (
      <>
        <LogoSpinner />
        <p>Welcome! Would you like to view the tutorial?</p>

        <button onClick={() => onSkipTutorial(true)}>Skip</button>
        <button onClick={() => onStepNavigation(step + 1)}>Yes</button>
      </>
    );

  const content = tutorialContent[step - 1];
  return (
    <>
      <h3>{content.header}</h3>
      <div>
        {content.paragraphs.map(paragraph => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <button onClick={() => onStepNavigation(step - 1)}>Previous</button>
      {step === tutorialContent.length ? (
        <button onClick={() => onSkipTutorial(true)}>Done</button>
      ) : (
        <button onClick={() => onStepNavigation(step + 1)}>Next</button>
      )}
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  step: state.app.tutorialStep,
  tutorialViewed: state.app.tutorialViewed
});

const mapDispatchToProps = dispatch => ({
  onSkipTutorial: tutorialViewed =>
    dispatch(updateTutorialViewed(tutorialViewed)),
  onStepNavigation: step => dispatch(updateTutorialStep(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tutorial);
