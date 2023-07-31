import { useEffect, useState } from 'react';
import { useTimer } from 'use-timer';

import { HeaderMenu } from '../../molecules';
import { DIFFICULTIES, DifficultiesEnum, DifficultyType } from './constants';
import initField from './initField';
import MineSweeperField from './molecules/MineSweeperField';
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

const INITIAL_DIFFICULTY = DIFFICULTIES[DifficultiesEnum.TEST];

const MineSweeperGame = () => {
  const [gameWon, setGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState(INITIAL_DIFFICULTY);
  const { time, start, reset, pause } = useTimer({
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
    pause();
    setGameWon(true);
  };

  const handleLose = () => {
    pause();
    setGameLost(true);
  };

  const handleEmojiClick = () => {
    restartGame();
  };

  const restartGame = (difficulty?: DifficultyType) => {
    reset();
    start();
    setGameLost(false);
    setGameWon(false);
    if (difficulty) {
      setFieldSettings(initField(difficulty.COLS, difficulty.ROWS, difficulty.MINES));
    } else {
      setFieldSettings(
        initField(selectedDifficulty.COLS, selectedDifficulty.ROWS, selectedDifficulty.MINES),
      );
    }
  };

  const handleBoardClick = () => {
    if (gameLost || gameWon) {
      restartGame();
    }
  };

  const changeDifficulty = (difficulty: DifficultiesEnum) => {
    setSelectedDifficulty(DIFFICULTIES[difficulty]);
    restartGame(DIFFICULTIES[difficulty]);
  };

  return (
    <div className={classes.mineSweeper}>
      <HeaderMenu
        items={[
          {
            name: 'Game',
            menuItems: [
              {
                name: 'New',
                isLastInSection: true,
                onClick: restartGame,
              },
              {
                name: 'Beginner',
                isSelected: selectedDifficulty.id === DIFFICULTIES[DifficultiesEnum.BEGINNER].id,
                onClick: () => changeDifficulty(DifficultiesEnum.BEGINNER),
              },
              {
                name: 'Intermediate',
                isSelected:
                  selectedDifficulty.id === DIFFICULTIES[DifficultiesEnum.INTERMEDIATE].id,
                onClick: () => changeDifficulty(DifficultiesEnum.INTERMEDIATE),
              },
              {
                name: 'Expert',
                isSelected: selectedDifficulty.id === DIFFICULTIES[DifficultiesEnum.EXPERT].id,
                onClick: () => changeDifficulty(DifficultiesEnum.EXPERT),
              },
            ],
          },
        ]}
      />
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
};

export default MineSweeperGame;
