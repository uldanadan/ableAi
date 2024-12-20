import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import styles from './intro.module.scss';

const Intro: FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.intro}>
      <div className={`${styles.intro__container} container`}>
        <div className={styles.intro__titles}>
          <h2 className={`${styles.intro__title} title`}>{t('intro.accessible')}</h2>
          <div className={`${styles.intro__animated_developer} title`}>
            <h2 className={styles.intro__animated_titles}>
              <span className={styles.price}>{t('intro.price')}</span>
              <span className={styles.communication}>{t('intro.communication')}</span>
              <span className={styles.immigration}>{t('intro.immigration')}</span>
            </h2>
          </div>
        </div>
        <p className={styles.intro__text}>{t('intro.description')}</p>
      </div>
    </div>
  );
};

export default Intro;
