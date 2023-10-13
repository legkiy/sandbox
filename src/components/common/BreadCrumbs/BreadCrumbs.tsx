import { FC } from 'react';
import { useSelectedLayoutSegments } from 'next/navigation';
import Link from 'next/link';
import style from './BreadCrumbs.module.scss';

const BreadCrumbs: FC = () => {
  const segments = useSelectedLayoutSegments();

  return (
    <div className={style['bread-crumbs']}>
      <Link href="/">Home</Link>
      {segments.map(el => ' / ' + el)}
    </div>
  );
};
export default BreadCrumbs;
