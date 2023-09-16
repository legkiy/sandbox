import classNames from 'classnames';
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
  memo,
} from 'react';
import style from './Button.module.scss';

type ButtonType = {
  children: ReactNode;
  // onClick: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonType> = (
  { children, className, onClick },
  props,
) => {
  return (
    <button
      className={classNames(style.button, className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
export default memo(Button);
