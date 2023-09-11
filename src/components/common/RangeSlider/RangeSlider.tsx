import { memo } from 'react';
import style from './RangeSlider.module.scss';
import classNames from 'classnames';
interface IRangeSlider {}

const RangeSlider: React.FC<IRangeSlider> = ({}) => {
  return <div className={classNames(style['range-slider'])}>
    <div className={style.thumb}></div>
  </div>;
};
export default memo(RangeSlider);
