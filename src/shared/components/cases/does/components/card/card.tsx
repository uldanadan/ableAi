import { FC } from 'react';
import styles from './card.module.scss';

interface CardProps {
  number: string;
  title: string;
  description: string;
}

const Card: FC<CardProps> = ({ number, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__number}>{number}</div>
      <h3 className={styles.card__title}>{title}</h3>
      <p className={styles.card__description}>{description}</p>
    </div>
  );
};

export default Card;
