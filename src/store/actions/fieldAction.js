import * as TYPES from '../actionTypes/fieldActionTypes';

export const setUncovered = (indexColumn, index) => ({
  type: TYPES.SET_UNCOVERED,
  indexColumn,
  index,
});

export const setField = payload => ({
  type: TYPES.SET_FIELD,
  payload,
});