import * as TYPES from '../actionTypes/fieldActionTypes';

export const setUncovered = (indexColumn: number, index: number) => ({
  type: TYPES.SET_UNCOVERED,
  indexColumn,
  index,
});

export const setField = payload => ({
  type: TYPES.SET_FIELD,
  payload,
});

export const uncoverAll = () => ({
  type: TYPES.UNCOVER_ALL,
});

export const markMine = (indexColumn: number, index: number) => ({
  type: TYPES.MARK_MINE,
  indexColumn,
  index,
});
