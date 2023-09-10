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

const Button: React.FC<ButtonType> = ({ children, className }, props) => {
  return (
    <button className={classNames(style.button, className)} {...props}>
      {children}
    </button>
  );
};
export default memo(Button);
