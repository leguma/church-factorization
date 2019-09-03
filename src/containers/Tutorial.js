import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import {
  updateTutorialViewed,
  updateTutorialStep
} from "../actions/appActions";

import LogoSpinner from "../components/LogoSpinner";

const Tutorial = ({
  step,
  tutorialViewed,
  onSkipTutorial,
  onStepNavigation
}) => {
  if (tutorialViewed) return <Redirect to="/" />;
  return (
    <>
      <LogoSpinner />
      <p>Welcome! Would you like to view the tutorial? Step {step}</p>
      <button onClick={() => onStepNavigation(step + 1)}>Yes</button>
      <button onClick={() => onSkipTutorial(true)}>Skip</button>
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
