import { Search, MapPin, Calendar, ChevronDown } from 'lucide-react';
import styles from './search-field.module.scss';
import { options } from './data';

function SearchField() {
  return (
    <form className={styles['search-container']}>
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
            value="En cualquier lugar"
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
            type="text"
            value="En cualquier momento"
            placeholder="Selecciona una fecha"
            className={styles['search-input']}
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
