import { FC } from 'react';
import parse from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import FeatureList, { Feature } from './components/featureList/featureList';
import styles from './get.module.scss';

const Get: FC = () => {
  const { t } = useTranslation('common');

  const featuresData: Feature[] = [
    {
      number: '01',
      title: String(parse(t('get.feature1.title'))),
      description: t('get.feature1.description'),
    },
    {
      number: '02',
      title: String(parse(t('get.feature2.title'))),
      description: t('get.feature2.description'),
    },
    {
      number: '03',
      title: String(parse(t('get.feature3.title'))),
      description: t('get.feature3.description'),
    },
    {
      number: '04',
      title: String(parse(t('get.feature4.title'))),
      description: t('get.feature4.description'),
    },
  ];
  return (
    <div className={styles.get}>
      <div className={`${styles.get__container} container`}>
        <h2 className="title">{t('get.title')}</h2>
        {featuresData.map((feature, index) => (
          <FeatureList
            key={index}
            number={feature.number}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Get;
