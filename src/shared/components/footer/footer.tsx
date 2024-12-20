import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.scss';
import icon from '@/assets/img/upp_arrow.svg';

const Footer: FC = () => {
  const { t } = useTranslation('common');

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.footer}>
      <div className={`${styles.footer__container} container`}>
        <p>{t('footer.copyright')}</p>
        <div className={styles.footer__menu}>
          <Link href="" className={styles.footer__menu_link}>
            {t('footer.disclaimer')}
          </Link>
          <Link href="" className={styles.footer__menu_link}>
            {t('footer.terms_of_use')}
          </Link>
          <Link href="" className={styles.footer__menu_link}>
            {t('footer.privacy_policy')}
          </Link>
          <Link href="" className={styles.footer__menu_link}>
            Whatsapp
          </Link>
        </div>
        <button className={styles.button} onClick={scrollToTop}>
          {t('footer.back_to_top')} <Image src={icon} alt="Icon" className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default Footer;
