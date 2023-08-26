'use client';
import { memo } from 'react';
import style from './Header.module.scss';
import { useModal } from '@/hooks';

interface Props {}
const Header = (props: Props) => {
  const { modal, modalIsOpen, setModalIsOpen } = useModal();
  return (
    <header className={style.header}>
      <div
        className={style.button}
        onClick={() => setModalIsOpen((prev) => !prev)}
      ></div>
      {modalIsOpen && modal}
    </header>
  );
};

export default memo(Header);
