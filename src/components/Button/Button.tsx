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
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({ children, className, ...props }: ButtonType) => {
  return (
    <button className={classNames(style.button, className)} {...props}>
      {children}
    </button>
  );
};
export default memo(Button);
