'use client';
import { memo, useState } from 'react';
import { Modal } from '@/components';
import style from './Header.module.scss';

interface Props {}
const Header = (props: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <header className={style.header}>
      <div
        className={style.button}
        onClick={() => {
          setOpen(true);
        }}
      ></div>
      <Modal opened={open} onClose={() => setOpen(false)}>
        asdadssad
      </Modal>
    </header>
  );
};

export default memo(Header);
