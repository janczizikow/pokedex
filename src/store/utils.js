/* eslint-disable import/prefer-default-export  */
export const updateStateObject = (oldState, newState) => ({
  ...oldState,
  ...newState,
});
