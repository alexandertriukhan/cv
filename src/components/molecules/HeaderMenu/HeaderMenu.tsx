import classNames from 'classnames';
import { useRef, useState } from 'react';
import { MenuOption } from '../../atoms';
import useOutsideClick from '../../../hooks/useOutsideClick';

import styles from './HeaderMenu.module.scss';

export type ItemMenuType = {
  name: string;
  isSelected?: boolean;
  isDisabled?: boolean;
  isLastInSection?: boolean;
  onClick?: () => void;
};

export type ItemType = {
  name: string;
  menuItems: ItemMenuType[];
};

export type Props = {
  items: ItemType[];
};

const HeaderMenu = ({ items }: Props) => {
  const menuRef = useRef(null);
  const [activeMenu, setActiveMenu] = useState('');

  const handleMenuOptionClick = (name: string) => {
    setActiveMenu(name);
  };

  const handleOutsideMenuClick = () => {
    setActiveMenu('');
  };

  useOutsideClick(menuRef, handleOutsideMenuClick);

  const handleInnerMenuClick = (onClick: (() => void) | undefined) => {
    setActiveMenu('');
    onClick && onClick();
  };

  return (
    <div className={styles.header}>
      {items.map(({ name, menuItems }) => (
        <div className={styles.menuItem} key={name}>
          <MenuOption
            text={name}
            onClick={() => handleMenuOptionClick(name)}
            isPressed={activeMenu === name}
          />
          {activeMenu === name && (
            <div ref={menuRef} className={classNames('window', styles.menu)}>
              {menuItems.map(({ name, onClick, isLastInSection }) => (
                <div key={name}>
                  <MenuOption
                    text={name}
                    onClick={() => handleInnerMenuClick(onClick)}
                    isInternalMenu
                  />
                  {isLastInSection && <div className={styles.separator} />}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HeaderMenu;
