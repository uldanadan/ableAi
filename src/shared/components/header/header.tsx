import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/img/logo.svg';
import CustomSelect from './components/customSelect/customSelect';
import styles from './header.module.scss';

const Header: FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.header}>
      <div className={`${styles.header__container} container`}>
        <Image src={logo} alt="Logo" />
        <nav className={styles.header__menu}>
          <Link href="#team" className={styles.header__menu_link}>
            {t('header.about')}
          </Link>
          <Link href="#works" className={styles.header__menu_link}>
            {t('header.how_it_works')}
          </Link>
          <Link href="#cases" className={styles.header__menu_link}>
            {t('header.cases')}
          </Link>
          <Link href="#contacts" className={styles.header__menu_link}>
            {t('header.contacts')}
          </Link>
        </nav>

        <div className={styles.header__cta}>
          <CustomSelect />
          <button className={styles.button}>{t('header.try_free')}</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
