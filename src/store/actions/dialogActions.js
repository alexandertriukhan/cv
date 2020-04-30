import * as TYPES from '../actionTypes/dialogActionTypes';

export const openDialog = payload => ({
  type: TYPES.OPEN_DIALOG,
  payload,
});

export const closeDialog = dialogName => ({
  type: TYPES.CLOSE_DIALOG,
  dialogName,
});

export const minimizeDialog = dialogName => ({
  type: TYPES.MINIMIZE_DIALOG,
  dialogName,
});

export const setActive = dialogName => ({
  type: TYPES.SET_ACTIVE,
  dialogName,
});
