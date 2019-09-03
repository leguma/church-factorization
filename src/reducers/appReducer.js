import { actionTypes } from "../constants";

export const defaultAppState = {
  tutorialViewed: false,
  tutorialStep: 0,
  number: undefined
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
    case actionTypes.UPDATE_NUMBER:
      return Object.assign({}, state, {
        number: action.number
      });
    default:
      return state;
  }
};
