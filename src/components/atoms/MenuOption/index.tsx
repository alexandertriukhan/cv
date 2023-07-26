import classNames from 'classnames';

import styles from './styles.module.scss';

type Props = {
  text: string;
  onClick: () => void;
  isPressed?: boolean;
};

const MenuOption = ({ text, isPressed, onClick }: Props) => {
  const textArray = Array.from(text);

  return (
    <div
      className={classNames(styles.menuOption, isPressed && styles['menuOption--pressed'])}
      onClick={onClick}
    >
      <div className={styles.capital}>{String(textArray[0])}</div>
      <div>{textArray.slice(1).join('')}</div>
    </div>
  );
};

export default MenuOption;
