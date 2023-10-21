'use client';
import { Fragment, ReactNode, memo, useRef } from 'react';
import { useClickOutside, useMounted } from '@/hooks';
import { Button } from '@/components/common';
import { createPortal } from 'react-dom';
import style from './Modal.module.scss';
import classNames from 'classnames';

interface IModal {
  opened: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  wrapperClassName?: string;
  replaceModalBox?: boolean;
}
const Modal = ({
  opened,
  onClose,
  children,
  className,
  wrapperClassName,
  replaceModalBox = false,
}: IModal) => {
  const { mounted, expand } = useMounted(opened);
  const modalRef = useRef<HTMLDivElement>(null);

  useClickOutside(onClose, modalRef);

  if (!mounted) return null;

  return createPortal(
    <div
      className={classNames(
        style['modal-wrapper'],
        {
          [style['opened-wrapper']]: expand,
          [style['closed-wrapper']]: !opened,
        },
        wrapperClassName,
      )}
    >
      {replaceModalBox ? (
        <div ref={modalRef}>{children}</div>
      ) : (
        <div
          className={classNames(
            style.modal,
            {
              [style['opened-modal']]: expand,
              // [style['closed-modal']]: !opened,
            },
            className,
          )}
          ref={modalRef}
        >
          <Button onClick={onClose} className={style['close-btn']}>
            +
          </Button>
          {children}
        </div>
      )}
    </div>,
    document?.body,
  );
};
export default memo(Modal);
