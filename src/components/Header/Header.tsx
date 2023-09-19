'use client';
import { Fragment, memo, useEffect, useRef, useState } from 'react';
import { useClickOutside, useMounted } from '@/hooks';
import style from './Header.module.scss';
import Menu from './Menu';
import Link from 'next/link';

interface Props {}
const Header: React.FC<Props> = ({}: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const headerItems = [
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
    <header className={style['header-wrapper']}>
      <div className={style.header}>
        {headerItems.map((item, index) => (
          <div key={index} className={style.item}>
            {item.component}
          </div>
        ))}
      </div>
    </header>
  );
};

export default memo(Header);
