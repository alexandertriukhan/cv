import * as TYPES from '../actionTypes/fieldActionTypes';

export type CellType = {
  uncovered: boolean;
  value?: number;
  marked?: boolean;
  hasMine?: boolean;
  noMine?: boolean;
}

export default function fieldReducer(state: CellType[][], action) {
  switch (action.type) {
    case TYPES.SET_UNCOVERED:
      return state.map((col, colIndex) =>
        col.map((cell, cellIndex) => {
          if (colIndex === action.indexColumn && cellIndex === action.index && !cell.marked) {
            return { ...cell, uncovered: true };
          } else {
            return cell;
          }
        }),
      );

    case TYPES.MARK_MINE:
      return state.map((col, colIndex) =>
        col.map((cell, cellIndex) => {
          if (colIndex === action.indexColumn && cellIndex === action.index) {
            return { ...cell, marked: !cell.marked };
          } else {
            return cell;
          }
        }),
      );

    case TYPES.SET_FIELD:
      return action.payload;

    case TYPES.UNCOVER_ALL:
      return state.map(col => col.map(cell => ({ ...cell, uncovered: true, noMine: cell.marked && !cell.hasMine })));

    default:
      return state;
  }
}
