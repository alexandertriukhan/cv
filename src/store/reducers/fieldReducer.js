import * as TYPES from '../actionTypes/fieldActionTypes';

export default function fieldReducer(state, action) {
  switch (action.type) {
    case TYPES.SET_UNCOVERED:
      return state.map((c, cI) =>
        c.map((r, rI) => {
          if (cI === action.indexColumn && rI === action.index) {
            return { ...r, uncovered: true };
          } else {
            return r;
          }
        }),
      );

    case TYPES.SET_FIELD:
      return action.payload;

    default:
      return state;
  }
}
