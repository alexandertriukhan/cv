import classNames from 'classnames';
import React from 'react';

import MineImg from '../../../../../assets/icons/mine.png';
import { FIELDS_SIZE } from '../../constants';
import classes from './styles.module.scss';

function MineSweeperTileValue({ value }) {
  let color;
  switch (value) {
    case 2:
      color = 'blue';
      break;
    case 3:
      color = 'red';
      break;
    default:
      color = 'green';
  }
  return value ? <span style={{ color: color }}>{value}</span> : null;
}

function MineSweeperTile({ hasMine = false, value, onClick, uncovered }) {
  const modifyMineSweeperField = () => {
    return classNames(
      !uncovered && 'window',
      classes.mineSweeperTile,
      uncovered && classes['mineSweeperTile--uncovered'],
    );
  };

  const handleClick = () => {
    onClick(hasMine);
  };

  return (
    <div
      className={modifyMineSweeperField()}
      onClick={handleClick}
      style={{ width: FIELDS_SIZE, height: FIELDS_SIZE }}
    >
      <div>{hasMine ? <img src={MineImg} alt="" /> : <MineSweeperTileValue value={value} />}</div>
    </div>
  );
}

export default MineSweeperTile;
