import React, { useReducer, useEffect, useRef, memo } from 'react';
import fieldReducer from '../../../../../store/reducers/fieldReducer';
import { SET_UNCOVERED } from '../../../../../store/actionTypes/fieldActionTypes';
import { setField, uncoverAll } from '../../../../../store/actions/fieldAction';
import MineSweeperTile from '../../atoms/MineSweeperTile';
import { getNeighboringTiles } from '../../initField';
import { FIELDS_SIZE } from '../../constants';
import classes from './styles.module.scss';

function MineSweeperField({ onWin, onLose, fieldSettings }) {
  let revealed = useRef(0);
  const [field, dispatchFieldAction] = useReducer(
    fieldReducer,
    fieldSettings.field.map(c => c.map(r => ({ ...r, uncovered: false }))),
  );
  let tmpField = useRef(Array.from(field));

  useEffect(() => {
    const newField = fieldSettings.field.map(c => c.map(r => ({ ...r, uncovered: false })));
    dispatchFieldAction(setField(newField));
    revealed.current = 0;
    tmpField.current = newField;
  }, [fieldSettings]);

  const handleClick = (hasMine, columnIndex, index) => {
    if (hasMine) {
      dispatchFieldAction(uncoverAll());
      onLose();
    } else {
      revealTiles(columnIndex, index);
      dispatchFieldAction(setField(tmpField.current));
    }
  };

  const revealTiles = (columnIndex, index) => {
    if (!tmpField.current[columnIndex][index].hasMine) {
      tmpField.current = fieldReducer(tmpField.current, {
        type: SET_UNCOVERED,
        indexColumn: columnIndex,
        index: index,
      });
      revealed.current++;
      if (tmpField.current[columnIndex][index].value === 0) {
        const neighbors = getNeighboringTiles(field.length, field[0].length, columnIndex, index);
        neighbors.forEach(({ x, y }) => {
          !tmpField.current[x][y].uncovered && revealTiles(x, y);
        });
      }
    }
    // TODO: check this code works correctly
    if (revealed.current === fieldSettings.cols * fieldSettings.rows - fieldSettings.totalMines) {
      onWin();
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

export default memo(MineSweeperField);
