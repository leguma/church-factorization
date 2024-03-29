import { actionTypes } from "../constants";

export function updateTutorialViewed(tutorialViewed) {
  return { type: actionTypes.UPDATE_TUTORIAL_VIEWED, tutorialViewed };
}

export function updateTutorialStep(tutorialStep) {
  return { type: actionTypes.UPDATE_TUTORIAL_STEP, tutorialStep };
}

export function updateNumber(number) {
  return { type: actionTypes.UPDATE_NUMBER, number };
}