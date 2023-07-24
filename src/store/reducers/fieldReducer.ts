import * as TYPES from '../actionTypes/fieldActionTypes';

export default function fieldReducer(state, action) {
  switch (action.type) {
    case TYPES.SET_UNCOVERED:
      return state.map((col, colIndex) =>
        col.map((row, rowIndex) => {
          if (colIndex === action.indexColumn && rowIndex === action.index) {
            return { ...row, uncovered: true };
          } else {
            return row;
          }
        }),
      );

    case TYPES.SET_FIELD:
      return action.payload;

    case TYPES.UNCOVER_ALL:
      return state.map(col => col.map(row => ({ ...row, uncovered: true })));

    default:
      return state;
  }
}
