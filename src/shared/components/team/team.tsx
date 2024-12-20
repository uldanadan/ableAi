import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import teamImage from '@/assets/img/team.png';
import ablai from '@/assets/img/ablai.png';
import anel from '@/assets/img/anel.png';
import sergazy from '@/assets/img/sergazy.png';
import FounderCard from './components/founderCard/founderCard';
import styles from './team.module.scss';

const Team: FC = () => {
  const { t } = useTranslation('common');

  const founderData = [
    {
      name: 'Ablay Sarmantay',
      role: 'Co-Founder, CEO',
      imageSrc: ablai,
      description: [
        t('founders.ablay.description.0'),
        t('founders.ablay.description.1'),
        t('founders.ablay.description.2'),
        t('founders.ablay.description.3'),
      ],
      additionalInfo: t('founders.ablay.additionalInfo'),
    },
    {
      name: 'Anel Yessemgali',
      role: 'Co-Founder, CMO',
      imageSrc: anel,
      description: [
        t('founders.anel.description.0'),
        t('founders.anel.description.1'),
        t('founders.anel.description.2'),
      ],
      additionalInfo: t('founders.anel.additionalInfo'),
    },
    {
      name: 'Sergazy Nurbavliyev',
      role: 'Founding,\n Data Scientist',
      imageSrc: sergazy,
      description: [t('founders.sergazy.description.0'), t('founders.sergazy.description.1')],
      additionalInfo: t('founders.sergazy.additionalInfo'),
    },
  ];

  return (
    <div className={styles.team} id="team">
      <div className={`${styles.team__container} container`}>
        <h2 className="title">{t('team.title')}</h2>
        <div className={styles.team__box}>
          <p className={styles.team__box_text}>{t('team.text')}</p>
          <Image src={teamImage} alt="Team" unoptimized />
        </div>
      </div>
      <div className={`${styles.founder__container} container`}>
        {founderData.map((founder, index) => (
          <FounderCard
            key={index}
            name={founder.name}
            role={founder.role}
            imageSrc={founder.imageSrc}
            description={founder.description}
            additionalInfo={founder.additionalInfo}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
