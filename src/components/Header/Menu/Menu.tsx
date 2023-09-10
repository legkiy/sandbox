import { useRef, useState } from 'react';
import { useMounted, useClickOutside } from '@/hooks';
import classNames from 'classnames';
import style from './Menu.module.scss';

interface IProps {}
const Menu: React.FC<IProps> = ({}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const { expand, mounted } = useMounted(menuOpen);
  useClickOutside(() => setMenuOpen(false), menuRef);

  return (
    <>
      <div
        className={classNames(style['menu-btn'])}
        onClick={() => setMenuOpen(prev => !prev)}
        style={{ display: mounted ? 'none' : 'block' }}
      ></div>
      {mounted && (
        <>
          <div
            className={classNames(style['menu-back'], {
              [style['menu-back-open']]: expand,
            })}
          ></div>
          <div
            className={classNames(style.menu, {
              [style['menu-open']]: expand,
              [style['menu-close']]: !menuOpen,
            })}
            ref={menuRef}
          ></div>
        </>
      )}
    </>
  );
};
export default Menu;
