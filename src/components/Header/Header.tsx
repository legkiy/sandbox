'use client';
import { Fragment, memo, useEffect, useRef, useState } from 'react';
import { useClickOutside, useMounted } from '@/hooks';
import style from './Header.module.scss';
import Menu from './Menu';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface Props {}
const Header: React.FC<Props> = ({}: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState('en-US');
  const menuRef = useRef(null);

  useEffect(() => {
    const local = window.navigator.language;
    setLang(local);
  }, []);
  
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
    { component: <>lang: {lang}</> },
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
