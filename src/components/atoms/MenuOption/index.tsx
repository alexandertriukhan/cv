import classNames from 'classnames';

import styles from './styles.module.scss';

type Props = {
  text: string;
  onClick?: () => void;
  isPressed?: boolean;
  isInternalMenu?: boolean;
  isSelected?: boolean;
};

const MenuOption = ({ text, isPressed, isInternalMenu, onClick, isSelected }: Props) => {
  const textArray = Array.from(text);

  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <div
      className={classNames(
        styles.menuOption,
        isInternalMenu ? styles.menuOption__internal : styles.menuOption__main,
        isPressed && styles['menuOption--pressed'],
      )}
      onClick={handleClick}
    >
      {isSelected ? (
        <div className={styles.mark}>✓</div>
      ) : (
        isInternalMenu && <div className={styles.markPlace} />
      )}
      <div className={styles.capital}>{String(textArray[0])}</div>
      <div>{textArray.slice(1).join('')}</div>
    </div>
  );
};

export default MenuOption;
