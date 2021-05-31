import React, { useState, useEffect } from 'react';
import { useTimer } from 'use-timer';
import MineSweeperField from './molecules/MineSweeperField';
import initField from './initField';
import { DIFFICULTIES } from './constants';
import classes from './styles.module.scss';

const pickEmoji = (isLose, isWin) => {
  if (isLose) {
    return '💀';
  }
  if (isWin) {
    return '🎉';
  }
  return '🙂';
};

function MineSweeperGame() {
  const [gameWon, setGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);
  const { time, start, pause, reset, status } = useTimer({
    endTime: 999,
    onTimeOver: () => {
      setGameLost(true);
    },
  });
  const [fieldSettings, setFieldSettings] = useState(
    initField(DIFFICULTIES.BEGINNER.COLS, DIFFICULTIES.BEGINNER.ROWS, DIFFICULTIES.BEGINNER.MINES),
  );

  useEffect(() => {
    start();
  }, []);

  const handleWin = () => {
    setGameWon(true);
  };

  const handleLose = () => {
    setGameLost(true);
  };

  const handleEmojiClick = () => {
    restartGame();
  };

  const restartGame = () => {
    reset();
    start();
    setGameLost(false);
    setGameWon(false);
    setFieldSettings(
      initField(
        DIFFICULTIES.BEGINNER.COLS,
        DIFFICULTIES.BEGINNER.ROWS,
        DIFFICULTIES.BEGINNER.MINES,
      ),
    );
  };

  const handleBoardClick = () => {
    if (gameLost || gameWon) {
      restartGame();
    }
  };

  return (
    <div className={classes.mineSweeper}>
      <div className={classes.gameStatus}>
        <div>{fieldSettings.totalMines}</div>
        <div>
          <button onClick={handleEmojiClick}>
            <div>{pickEmoji(gameLost, gameWon)}</div>
          </button>
        </div>
        <div>{String(time).padStart(3, '0')}</div>
      </div>
      <div className={classes.gameContainer} onClick={handleBoardClick}>
        <MineSweeperField fieldSettings={fieldSettings} onWin={handleWin} onLose={handleLose} />
      </div>
    </div>
  );
}

export default MineSweeperGame;
