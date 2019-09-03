import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { updateTutorialViewed } from "../actions/appActions";
import NumberEntry from "../components/NumberEntry";

const HomeContainer = ({ redirectToTutorial, onViewTutorial, ...props }) => {
  if (redirectToTutorial) return <Redirect to={"/tutorial"} />;

  return (
    <>
      <button onClick={() => onViewTutorial()}>View tutorial</button>
      <NumberEntry />
    </>
  );
};

const mapStateToProps = state => ({
  redirectToTutorial: !state.app.tutorialViewed
});

const mapDispatchToProps = dispatch => ({
  onViewTutorial: () => dispatch(updateTutorialViewed(false))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
