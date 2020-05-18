import React, { useState } from 'react';
import MineSweeperField from './molecules/MineSweeperField';
import initField from './initField';
import { DIFFICULTIES } from './constants';

function MineSweeperGame() {
  const [fieldSettings, setFieldSettings] = useState(
    initField(DIFFICULTIES.BEGINNER.COLS, DIFFICULTIES.BEGINNER.ROWS, DIFFICULTIES.BEGINNER.MINES),
  );

  const handleWin = () => {};

  const handleLose = () => {};

  return <MineSweeperField fieldSettings={fieldSettings} onWin={handleWin} onLose={handleLose} />;
}

export default MineSweeperGame;
