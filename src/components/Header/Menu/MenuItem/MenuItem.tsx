import classNames from 'classnames';
import style from './MenuItem.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export interface IMenuItem {
  title: string;
  imgName: string;
  href: string;
}
const MenuItem: React.FC<IMenuItem> = ({ title, imgName, href }) => {
  return (
    <div className={classNames(style['menu-item'])}>
      <Link href={href}>
        <Image src={imgName} alt={title} className={style['icon']} />
        <h3>{title}</h3>
      </Link>
    </div>
  );
};
export default MenuItem;
