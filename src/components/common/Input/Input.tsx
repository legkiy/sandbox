import { FC, DetailedHTMLProps, InputHTMLAttributes, memo } from 'react';

type IInput = {
  onPressEnter?: () => void;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input: FC<IInput> = props => {
  return <input {...props} />;
};
export default memo(Input);
