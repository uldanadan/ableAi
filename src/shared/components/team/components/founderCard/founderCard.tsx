import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './founderCard.module.scss';

interface FounderCardProps {
  name: string;
  role: string;
  imageSrc: string | StaticImageData;
  description: string[];
  additionalInfo: string;
}

const FounderCard: FC<FounderCardProps> = ({
  name,
  role,
  imageSrc,
  description,
  additionalInfo,
}) => (
  <div className={styles['founder']}>
    <div className={styles['founder-card']}>
      <Image src={imageSrc} alt={name} height={207.5} unoptimized />
      <div>
        <h3 className={styles['founder-card__name']}>
          {name}
          <span className={styles['founder-card__role']}>{role}</span>
        </h3>
        <ul className={styles['founder-card__description']}>
          {description.map((text, i) => (
            <li key={i}>{text}</li>
          ))}
        </ul>
      </div>
    </div>
    <p className={styles['founder-card__additional-info']}>{additionalInfo}</p>
  </div>
);

export default FounderCard;
