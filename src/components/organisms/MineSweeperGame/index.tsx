import { useEffect, useState } from 'react';
import { useTimer } from 'use-timer';

import { DIFFICULTIES } from './constants';
import initField from './initField';
import MineSweeperField from './molecules/MineSweeperField';
import { MenuOption } from '../../atoms';
import classes from './styles.module.scss';

const pickEmoji = (isLose: boolean, isWin: boolean) => {
  if (isLose) {
    return '💀';
  }
  if (isWin) {
    return '🎉';
  }
  return '🙂';
};

const INITIAL_DIFFICULTY = DIFFICULTIES.BEGINNER;

function MineSweeperGame() {
  const [isGameMenuOpened, setIsGameMenuOpened] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState(INITIAL_DIFFICULTY);
  const { time, start, reset } = useTimer({
    endTime: 999,
    onTimeOver: () => {
      setGameLost(true);
    },
  });
  const [fieldSettings, setFieldSettings] = useState(
    initField(INITIAL_DIFFICULTY.COLS, INITIAL_DIFFICULTY.ROWS, INITIAL_DIFFICULTY.MINES),
  );

  useEffect(() => {
    start();
  }, [start]);

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
      initField(selectedDifficulty.COLS, selectedDifficulty.ROWS, selectedDifficulty.MINES),
    );
  };

  const handleBoardClick = () => {
    if (gameLost || gameWon) {
      restartGame();
    }
  };

  const handleOpenMenu = () => {
    setIsGameMenuOpened(true);
  };

  return (
    <div className={classes.mineSweeper}>
      <div className={classes.header}>
        <MenuOption text="Game" onClick={handleOpenMenu} isPressed={isGameMenuOpened} />
      </div>
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
