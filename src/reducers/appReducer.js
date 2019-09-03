import { actionTypes } from "../constants";

export const defaultAppState = {
  tutorialViewed: false,
  tutorialStep: 0
};

export default (state = defaultAppState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_TUTORIAL_VIEWED:
      return Object.assign({}, state, {
		tutorialViewed: action.tutorialViewed,
		tutorialStep: 0
      });
    case actionTypes.UPDATE_TUTORIAL_STEP:
      return Object.assign({}, state, {
        tutorialStep: action.tutorialStep
      });
    default:
      return state;
  }
};
