import classNames from 'classnames';
import { DetailedHTMLProps, FC, TextareaHTMLAttributes, memo } from 'react';
import style from './TextArea.module.scss';

type ITextArea = {} & DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;
const TextArea: FC<ITextArea> = props => {
  return (
    <textarea
      className={classNames(style.textarea, props.className)}
      {...props}
    />
  );
};
export default memo(TextArea);
