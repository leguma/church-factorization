import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { updateTutorialViewed, updateNumber } from "../actions/appActions";
import NumberEntry from "../components/NumberEntry";

const HomeContainer = ({
  redirectToTutorial,
  visualizeChurchFactors,
  onViewTutorial,
  onSubmitNumber
}) => {
  if (redirectToTutorial) return <Redirect to={"/tutorial"} />;
  if (visualizeChurchFactors) return <Redirect to={"/churchFactors"} />;

  return (
    <>
      <div style={{ marginBottom: "2rem" }}>
        <button onClick={() => onViewTutorial()}>View tutorial</button>
      </div>
      <NumberEntry onSubmitNumber={onSubmitNumber} />
    </>
  );
};

const mapStateToProps = state => ({
  redirectToTutorial: !state.app.tutorialViewed,
  visualizeChurchFactors: state.app.number !== undefined
});

const mapDispatchToProps = dispatch => ({
  onViewTutorial: () => dispatch(updateTutorialViewed(false)),
  onSubmitNumber: number => dispatch(updateNumber(number))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
