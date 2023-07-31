import { memo, useEffect, useReducer, useRef } from 'react';

import { markMine, setField, uncoverAll } from '../../../../../store/actions/fieldAction';
import {
  MARK_MINE,
  SET_UNCOVERED,
  UNCOVER_ALL,
} from '../../../../../store/actionTypes/fieldActionTypes';
import fieldReducer, { CellType } from '../../../../../store/reducers/fieldReducer';
import MineSweeperTile from '../../atoms/MineSweeperTile';
import { FIELDS_SIZE } from '../../constants';
import { getNeighboringTiles } from '../../initField';
import classes from './styles.module.scss';

type Props = {
  onWin: () => void;
  onLose: () => void;
  fieldSettings: any;
};

function MineSweeperField({ onWin, onLose, fieldSettings }: Props) {
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

  const handleClick = (hasMine: boolean, columnIndex: number, index: number) => {
    if (hasMine) {
      dispatchFieldAction(uncoverAll());
      onLose();
    } else {
      revealTiles(columnIndex, index);
      dispatchFieldAction(setField(tmpField.current));
    }
  };

  const handleMarkMine = (columnIndex: number, index: number) => {
    tmpField.current = fieldReducer(tmpField.current, {
      type: MARK_MINE,
      indexColumn: columnIndex,
      index: index,
    });
    dispatchFieldAction(markMine(columnIndex, index));
  };

  const revealTiles = (columnIndex: number, index: number) => {
    const currentTile = tmpField.current[columnIndex][index];
    if (!currentTile.hasMine && !currentTile.marked) {
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
    if (revealed.current === fieldSettings.cols * fieldSettings.rows - fieldSettings.totalMines) {
      tmpField.current = fieldReducer(tmpField.current, {
        type: UNCOVER_ALL,
      });
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
      {field.map((row: CellType[], columnIndex: number) =>
        row.map((value: CellType, index: number) => (
          <MineSweeperTile
            {...value}
            key={index}
            onClick={hasMine => handleClick(hasMine, columnIndex, index)}
            onMarkMine={() => handleMarkMine(columnIndex, index)}
          />
        )),
      )}
    </div>
  );
}

export default memo(MineSweeperField);
