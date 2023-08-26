'use client';
import { ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import style from './Modal.module.scss';

const useModal = (children?: ReactNode, className?: string) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const handleBackdropClick = (target: HTMLDivElement) => {
    if (
      target.classList.contains(style['modal-wrapper']) ||
      target.className === `.${style['modal-wrapper']}`
    ) {
      setModalIsOpen(false);
    }
  };

  const modal = createPortal(
    <div
      className={style['modal-wrapper']}
      onClick={(e) => handleBackdropClick(e.target as HTMLDivElement)}
    >
      <div className={classNames(style.modal, className)}>{children}</div>
    </div>,
    document.body
  );
  return { modal, modalIsOpen, setModalIsOpen };
};
export default useModal;
