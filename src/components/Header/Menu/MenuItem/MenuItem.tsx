import classNames from 'classnames';
import style from './MenuItem.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export interface IMenuItem {
  title: string;
  href: string;
  onClick?: () => void;
}
const MenuItem: React.FC<IMenuItem> = ({ title, href, onClick }) => {
  return (
    <div className={classNames(style['menu-item'])} onClick={onClick}>
      <Link href={href}>
        <Image
          src={'/menuIcons/' + href + '.svg'}
          alt={title}
          className={style['icon']}
          quality={100}
          width={90}
          height={90}
          placeholder="blur"
          blurDataURL={'/menuIcons/' + href + '.svg'}
          onError={erorr => console.log('Menu Item Image ERROR: ', href, erorr)}
        />
        <h3 className={style.title}>{title}</h3>
      </Link>
    </div>
  );
};
export default MenuItem;
