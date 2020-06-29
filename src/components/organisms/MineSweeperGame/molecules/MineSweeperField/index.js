import React, { useReducer } from 'react';
import fieldReducer from '../../../../../store/reducers/fieldReducer';
import { SET_UNCOVERED } from '../../../../../store/actionTypes/fieldActionTypes';
import { setField } from '../../../../../store/actions/fieldAction';
import MineSweeperTile from '../../atoms/MineSweeperTile';
import { getNeighboringTiles } from '../../initField';
import { FIELDS_SIZE } from '../../constants';
import classes from './styles.module.scss';

function MineSweeperField({ onWin, onLose, fieldSettings }) {
  let revealed = 0;
  const [field, dispatchFieldAction] = useReducer(
    fieldReducer,
    fieldSettings.field.map(c => c.map(r => ({ ...r, uncovered: false }))),
  );
  let tmpField = Array.from(field);

  const handleClick = (hasMine, columnIndex, index) => {
    if (hasMine) {
      onLose();
    } else {
      revealTiles(columnIndex, index);
      dispatchFieldAction(setField(tmpField));
    }
  };

  const revealTiles = (columnIndex, index) => {
    if (!tmpField[columnIndex][index].hasMine) {
      tmpField = fieldReducer(tmpField, {
        type: SET_UNCOVERED,
        indexColumn: columnIndex,
        index: index,
      });
      revealed++;
      if (tmpField[columnIndex][index].value === 0) {
        const neighbors = getNeighboringTiles(field.length, field[0].length, columnIndex, index);
        neighbors.map(({ x, y }) => {
          !tmpField[x][y].uncovered && revealTiles(x, y);
        });
      }
    }
  };

  return (
    <div
      className={classes.mineSweeperField}
      style={{
        gridTemplateColumns: `repeat(${fieldSettings.cols}, ${FIELDS_SIZE}px)`,
        gridTemplateRows: `repeat(${fieldSettings.rows}, ${FIELDS_SIZE}px)`,
      }}
    >
      {field.map((row, columnIndex) =>
        row.map(({ hasMine, value, uncovered }, index) => (
          <MineSweeperTile
            uncovered={uncovered}
            key={index}
            hasMine={hasMine}
            value={value}
            onClick={hasMine => handleClick(hasMine, columnIndex, index)}
          />
        )),
      )}
    </div>
  );
}

export default MineSweeperField;
