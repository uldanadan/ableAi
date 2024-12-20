import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import comp1 from '@/assets/img/comp1.jpg';
import comp2 from '@/assets/img/comp2.jpg';
import comp3 from '@/assets/img/comp3.jpg';
import Card from './components/card/card';
import AnimationCard from './components/aminationCard/aminationCard';
import styles from './works.module.scss';

const Works: FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.works} id="works">
      <div className="container">
        <h2 className="title">{t('works.title')}</h2>
      </div>
      <div className={styles.works__block}>
        <div className={`${styles.works__container} container`}>
          <div className={styles.works__cards}>
            <AnimationCard
              number="1"
              title={t('works.cart1.title')}
              description={t('works.cart1.text')}
            />
            <Card number="2" title={t('works.cart2.title')} description={t('works.cart2.text')} />
          </div>
          <Image src={comp1} alt="comp1" />
          <div className={styles.works__cards}>
            <Card number="3" title={t('works.cart3.title')} description={t('works.cart3.text')} />
            <Card number="4" title={t('works.cart4.title')} description={t('works.cart4.text')} />
            <Card number="5" title={t('works.cart5.title')} description={t('works.cart5.text')} />
          </div>
          <Image src={comp2} alt="comp2" />
          <div className={styles.works__cards}>
            <Card number="6" title={t('works.cart6.title')} description={t('works.cart6.text')} />
            <Card number="7" title={t('works.cart7.title')} description={t('works.cart7.text')} />
          </div>
          <Image src={comp3} alt="comp3" />
        </div>
      </div>
    </div>
  );
};

export default Works;
