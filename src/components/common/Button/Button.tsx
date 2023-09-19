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

const Button: React.FC<ButtonType> = props => {
  return (
    <button className={classNames(style.button, props.className)} {...props}>
      {props.children}
    </button>
  );
};
export default memo(Button);
