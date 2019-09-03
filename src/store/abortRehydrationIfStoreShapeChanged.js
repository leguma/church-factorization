import { createTransform } from "redux-persist";

const _recursiveShapeComparison = (expectedSlice, actualSlice) => {
  // eslint-disable-next-line
  for (const key in expectedSlice) {
    // If the default value is not null (or undefined), expect it to be in the persisted state.
    // Otherwise, the undefined/null value might not have been persisted.
    // Note: this means that if you set a property from a set default value to null/undefined, you may invalidate the persisted state.
    if (expectedSlice[key] && !actualSlice.hasOwnProperty(key)) {
      return false;
    }

    if (typeof expectedSlice[key] === "object") {
      if (!_recursiveShapeComparison(expectedSlice[key], actualSlice[key])) {
        return false;
      }
    }
  }

  return true;
};

export default (expectedStateShape, defaultState) =>
  createTransform(
    state => state,
    (state, key) => {
      // If the rehydrated state doesn't have the property tree that is expected, invalidate it.
      // Note: Additional properties in the rehydrated state will not cause invalidation.
      if (
        !expectedStateShape.hasOwnProperty(key) ||
        _recursiveShapeComparison(expectedStateShape[key], state)
      ) {
        return state;
      }

      return defaultState || expectedStateShape[key];
    }
  );
