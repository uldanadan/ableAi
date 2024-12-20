import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import styles from './questions.module.scss';

const Questions: FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.questions} id="contacts">
      <div className={`${styles.questions__container} container`}>
        <h2 className="title">{t('questions.title')}</h2>
        <div className={styles.questions__box}>
          <p className={styles.questions__box_title}>{t('questions.text')}</p>
          <div className={styles.questions__box_form}>
            <input className={styles.input} type="email" placeholder={t('questions.placeholder')} />
            <button className={styles.button}>{t('questions.button')}</button>
          </div>
          <p className={styles.questions__box_text}>{t('questions.textMini')}</p>
        </div>
      </div>
    </div>
  );
};

export default Questions;
