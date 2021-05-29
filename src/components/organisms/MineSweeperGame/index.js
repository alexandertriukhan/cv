import React, { useState } from 'react';
import MineSweeperField from './molecules/MineSweeperField';
import initField from './initField';
import { DIFFICULTIES } from './constants';
import classes from './styles.module.scss';

function MineSweeperGame() {
  const [fieldSettings, setFieldSettings] = useState(
    initField(DIFFICULTIES.BEGINNER.COLS, DIFFICULTIES.BEGINNER.ROWS, DIFFICULTIES.BEGINNER.MINES),
  );

  const handleWin = () => {
    console.log('won');
  };

  const handleLose = () => {
    console.log('lost');
  };

  console.log(fieldSettings);
  return (
    <div className={classes.mineSweeper}>
      <div className={classes.gameStatus}>
        <div>{fieldSettings.totalMines}</div>
        <div></div>
        <div></div>
      </div>
      <div className={classes.gameContainer}>
        <MineSweeperField fieldSettings={fieldSettings} onWin={handleWin} onLose={handleLose} />
      </div>
    </div>
  );
}

export default MineSweeperGame;
