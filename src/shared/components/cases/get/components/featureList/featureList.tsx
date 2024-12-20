import { FC } from 'react';
import styles from './featureList.module.scss';

export interface Feature {
  number: string;
  title: string;
  description: string;
}

const FeatureList: FC<Feature> = ({ number, title, description }) => {
  return (
    <div className={styles.feature__item}>
      <div className={styles.feature__number}>{number}</div>
      <div className={styles.feature__title}>{title}</div>
      <div className={styles.feature__description}>{description}</div>
    </div>
  );
};

export default FeatureList;
