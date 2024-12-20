import { FC } from 'react';
import Image from 'next/image';
import whiteArrow from '@/assets/img/white_arrow.svg';
import blueArrow from '@/assets/img/blue_arrow.svg';
import styles from './aminationCard.module.scss';

interface CardProps {
  number: string;
  title: string;
  description: string;
}

const AnimationCard: FC<CardProps> = ({ number, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__box}>
        <div className={styles.card__number}>{number}</div>
        <h3 className={styles.card__title}>{title}</h3>
        <p className={styles.card__text}>{description}</p>
      </div>
      <div className={styles.card__circle}>
        <Image src={whiteArrow} alt="whiteArrow" className={styles.card__arrowWhite} />
        <Image src={blueArrow} alt="blueArrow" className={styles.card__arrowBlue} />
      </div>
    </div>
  );
};

export default AnimationCard;
