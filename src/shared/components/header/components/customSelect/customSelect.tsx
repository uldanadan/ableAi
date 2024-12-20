import { FC, useState } from 'react';
import { useTranslation } from 'next-i18next';
import styles from './customSelect.module.scss';

const CustomSelect: FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Eng');
  const [selectedValue, setSelectedValue] = useState('en');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value: string, label: string) => {
    setSelectedOption(label);
    setSelectedValue(value);
    i18n.changeLanguage(value);
    setIsOpen(false);
  };

  return (
    <div className={styles['custom-select']}>
      <button className={styles['custom-select__button']} onClick={toggleDropdown}>
        <span>{selectedOption}</span>
        <span
          className={styles['custom-select__arrow']}
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>

      {isOpen && (
        <ul className={styles['custom-select__options']}>
          <li
            className={`${styles['custom-select__option']} ${selectedValue === 'en' ? styles['selected'] : ''}`}
            onClick={() => handleSelect('en', 'Eng')}
            data-value="en"
          >
            Eng
          </li>
          <li
            className={`${styles['custom-select__option']} ${selectedValue === 'ru' ? styles['selected'] : ''}`}
            onClick={() => handleSelect('ru', 'Рус')}
            data-value="ru"
          >
            Рус
          </li>
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
