import classNames from 'classnames';

import MineImg from '../../../../../assets/icons/mine.png';
import NoMineImg from '../../../../../assets/icons/noMine.png';
import { FIELDS_SIZE } from '../../constants';
import classes from './styles.module.scss';

type Props = {
  hasMine?: boolean;
  value?: number;
  onClick: (hasMine: boolean) => void;
  onMarkMine: () => void;
  uncovered: boolean;
  marked?: boolean;
  noMine?: boolean;
};

// TODO: move to separate component
type MineSweeperTileValueProps = {
  value?: number;
  hasMine?: boolean;
  noMine?: boolean;
};

function MineSweeperTileValue({ value, hasMine, noMine }: MineSweeperTileValueProps) {
  if (noMine) {
    return <img src={NoMineImg} alt="" />;
  }

  if (hasMine) {
    return <img src={MineImg} alt="" />;
  }

  let color;
  switch (value) {
    case 2:
      color = 'blue';
      break;
    case 3:
      color = 'red';
      break;
    case 4:
      color = 'darkblue';
      break;
    case 5:
      color = 'darkred';
      break;
    case 6:
      color = 'darkgreen';
      break;
    default:
      color = 'green';
  }
  return value ? <span style={{ color: color }}>{value}</span> : null;
}

function MineSweeperTile({
  hasMine = false,
  value,
  onClick,
  onMarkMine,
  uncovered,
  marked,
  noMine,
}: Props) {
  const isGuessedMine = marked && !noMine && uncovered;

  const handleClick = (e: any) => {
    if (!marked) {
      onClick(hasMine);
    }
  };

  const handleRightClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (!uncovered) {
      onMarkMine();
    }
  };

  return (
    <div
      className={classNames(
        (!uncovered || isGuessedMine) && 'window',
        classes.mineSweeperTile,
        uncovered && classes['mineSweeperTile--uncovered'],
        isGuessedMine && classes['mineSweeperTile--guessed'],
      )}
      onClick={handleClick}
      onContextMenu={handleRightClick}
      style={{ width: FIELDS_SIZE, height: FIELDS_SIZE }}
    >
      <div className={classes.value}>
        <MineSweeperTileValue value={value} hasMine={hasMine} noMine={noMine} />
      </div>
      {marked && !noMine && <div className={classes.flag}>🚩</div>}
    </div>
  );
}

export default MineSweeperTile;
