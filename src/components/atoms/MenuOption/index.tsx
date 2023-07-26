import classNames from 'classnames';

import styles from './styles.module.scss';

type Props = {
  text: string;
  onClick?: () => void;
  isPressed?: boolean;
  isInternalMenu?: boolean;
};

const MenuOption = ({ text, isPressed, isInternalMenu, onClick }: Props) => {
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
      <div className={styles.capital}>{String(textArray[0])}</div>
      <div>{textArray.slice(1).join('')}</div>
    </div>
  );
};

export default MenuOption;
