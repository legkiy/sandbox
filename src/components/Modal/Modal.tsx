'use client';
import { ReactNode, memo, useRef } from 'react';
import { useClickOutside, useMounted } from '@/hooks';
import { Button } from '@/components';
import { createPortal } from 'react-dom';
import style from './Modal.module.scss';
import classNames from 'classnames';

interface IModal {
  opened: boolean;
  onClose: () => void;
  children: ReactNode;
}
const Modal = ({ opened, onClose, children }: IModal) => {
  const { mounted, expand } = useMounted(opened);
  const modalRef = useRef(null);

  useClickOutside(onClose, modalRef);

  if (!mounted) return null;

  return createPortal(
    <div
      className={classNames(style['modal-wrapper'], {
        [style['opened']]: expand,
        [style['closed']]: !opened,
      })}
      ref={modalRef}
    >
      <Button onClick={onClose}>Close</Button>
      <div>asddasdasdsa</div>
      {children}
    </div>,
    document.body
  );
};
export default memo(Modal);
