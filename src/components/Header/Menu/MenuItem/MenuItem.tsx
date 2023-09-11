import classNames from 'classnames';
import style from './MenuItem.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export interface IMenuItem {
  title: string;
  imgName: string;
  href: string;
  onClick?: () => void;
}
const MenuItem: React.FC<IMenuItem> = ({ title, imgName, href, onClick }) => {
  return (
    <div className={classNames(style['menu-item'])} onClick={onClick}>
      <Link href={href}>
        <Image src={imgName} alt={title} className={style['icon']} />
        <h3 className={style.title}>{title}</h3>
      </Link>
    </div>
  );
};
export default MenuItem;
