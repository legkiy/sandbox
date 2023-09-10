'use client';
import { Fragment, memo, useEffect, useRef, useState } from 'react';
import { Button } from '@/components/common';
import style from './Header.module.scss';
import classNames from 'classnames';
import { useClickOutside, useMounted } from '@/hooks';
import Menu from './Menu';
import Image from 'next/image';

interface Props {}
const Header: React.FC<Props> = ({}: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const menuItems = [
    {
      component: (
        <>
          <Image src="/public/next.svg" alt="test" width={100} height={100} />
        </>
      ),
    },
    {
      component: <Menu />,
    },
    { component: <></> },
  ];
  const { expand, mounted } = useMounted(menuOpen);
  useClickOutside(() => setMenuOpen(false), menuRef);
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
