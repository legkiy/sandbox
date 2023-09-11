'use client';
import { Fragment, memo, useEffect, useRef, useState } from 'react';
import { Button } from '@/components/common';
import { useClickOutside, useMounted } from '@/hooks';
import style from './Header.module.scss';
import classNames from 'classnames';
import Menu from './Menu';
import Image from 'next/image';
import Link from 'next/link';

interface Props {}
const Header: React.FC<Props> = ({}: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const menuItems = [
    {
      component: (
        <>
          <Link href="/">Home</Link>
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
