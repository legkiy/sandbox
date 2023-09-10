import { ReactNode, useRef, useState } from 'react';
import { useMounted, useClickOutside } from '@/hooks';
import classNames from 'classnames';
import style from './Menu.module.scss';
import MenuItem, { IMenuItem } from './MenuItem/MenuItem';
import rangeIcon from '../../../../public/menuIIcons/slider-icon.svg';

interface IProps {}
const Menu: React.FC<IProps> = ({}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const { expand, mounted } = useMounted(menuOpen);
  useClickOutside(() => setMenuOpen(false), menuRef);

  const items: IMenuItem[] = [
    { title: 'range slider', imgName: rangeIcon, href: 'slider-demo' },
  ];
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
          >
            {expand &&
              items.map(props => <MenuItem {...props} key={props.href} />)}
          </div>
        </>
      )}
    </>
  );
};
export default Menu;
