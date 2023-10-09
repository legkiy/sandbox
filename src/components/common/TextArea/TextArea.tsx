import classNames from 'classnames';
import { DetailedHTMLProps, FC, TextareaHTMLAttributes, memo } from 'react';
import style from './TextArea.module.scss';

type ITextArea = { title?: string } & DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;
const TextArea: FC<ITextArea> = props => {
  const { title } = props;
  return (
    <label style={{ display: 'grid' }}>
      {title}
      <textarea
        className={classNames(style.textarea, props.className)}
        {...props}
      />
    </label>
  );
};
export default memo(TextArea);
