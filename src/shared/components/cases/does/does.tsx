import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import Card from './components/card/card';
import styles from './does.module.scss';

const Does: FC = () => {
  const { t } = useTranslation('common');

  const cardsData = [
    {
      number: '01',
      title: t('does.card1.title'),
      description: t('does.card1.description'),
    },
    {
      number: '02',
      title: t('does.card2.title'),
      description: t('does.card2.description'),
    },
    {
      number: '03',
      title: t('does.card3.title'),
      description: t('does.card3.description'),
    },
    {
      number: '04',
      title: t('does.card4.title'),
      description: t('does.card4.description'),
    },
  ];

  return (
    <div className={styles.does}>
      <div className={`${styles.does__container} container`}>
        <h2 className="title">{t('does.title')}</h2>
        <div className={styles.does__card}>
          {cardsData.map((card, index) => (
            <Card
              key={index}
              number={card.number}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Does;
