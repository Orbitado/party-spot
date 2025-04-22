import { Search, MapPin, Calendar, ChevronDown } from 'lucide-react';
import styles from './search-field.module.scss';
import { options } from './data';
import { useState, FormEvent, ChangeEvent } from 'react';

function SearchField() {
  const today = new Date().toISOString().split('T')[0];
  const [date, setDate] = useState(today);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Search submitted with date:', date);
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  return (
    <form className={styles['search-container']} onSubmit={handleSubmit}>
      <div className={styles['search-field']}>
        <label htmlFor="planning-select" className={styles['search-label']}>
          ¿Qué estás planeando?
        </label>
        <div className={styles['search-select-container']}>
          <select id="planning-select" className={styles['search-select']} defaultValue="default">
            <option className={styles['search-select-option']} value="default" disabled>
              Solo estoy viendo
            </option>
            {options.map((option) => (
              <option
                className={styles['search-select-option']}
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown size={16} className={styles['search-icon']} />
        </div>
      </div>

      <div className={styles['search-divider']}></div>

      <div className={styles['search-field']}>
        <label htmlFor="location-input" className={styles['search-label']}>
          ¿Dónde?
        </label>
        <div className={styles['input-with-icon']}>
          <input
            id="location-input"
            type="text"
            defaultValue="En cualquier lugar"
            placeholder="Ingresa una ubicación"
            className={styles['search-input']}
          />
          <MapPin size={16} className={styles['search-icon']} />
        </div>
      </div>

      <div className={styles['search-divider']}></div>

      <div className={styles['search-field']}>
        <label htmlFor="date-input" className={styles['search-label']}>
          ¿Cuándo?
        </label>
        <div className={styles['input-with-icon']}>
          <input
            id="date-input"
            type="date"
            min={today}
            value={date}
            onChange={handleDateChange}
            placeholder="Selecciona una fecha"
            className={styles['search-input']}
            lang="es-AR"
          />
          <Calendar size={16} className={styles['search-icon']} />
        </div>
      </div>

      <button type="submit" className={styles['search-button']}>
        <Search size={18} className={styles['button-icon']} />
        <span>Buscar</span>
      </button>
    </form>
  );
}

export default SearchField;
