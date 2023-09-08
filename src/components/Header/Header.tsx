'use client';
import { Fragment, memo } from 'react';
import style from './Header.module.scss';
import classNames from 'classnames';

interface Props {}
const Header: React.FC<Props> = ({}: Props) => {
  const test = <div className={style.test}></div>;
  const menuItems = [
    {
      component: <div>saasdasadadsasdsdd</div>,
    },
    { component: test },
    { component: test },
  ];

  return (
    <header className={style.header}>
      {menuItems.map((item, index) => (
        <div key={index} className={style.item}>
          {item.component}
        </div>
      ))}
    </header>
  );
};

export default memo(Header);
