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
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchField}>
        <label htmlFor="planning-select" className={styles.searchLabel}>
          ¿Qué estás planeando?
        </label>
        <div className={styles.searchSelectContainer}>
          <select id="planning-select" className={styles.searchSelect} defaultValue="default">
            <option className={styles.searchSelectOption} value="default" disabled>
              Solo estoy viendo
            </option>
            {options.map((option) => (
              <option className={styles.searchSelectOption} key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown size={16} className={styles.searchIcon} />
        </div>
      </div>

      <div className={styles.searchDivider}></div>

      <div className={styles.searchField}>
        <label htmlFor="location-input" className={styles.searchLabel}>
          ¿Dónde?
        </label>
        <div className={styles.inputWithIcon}>
          <input
            id="location-input"
            type="text"
            defaultValue="En cualquier lugar"
            placeholder="Ingresa una ubicación"
            className={styles.searchInput}
          />
          <MapPin size={16} className={styles.searchIcon} />
        </div>
      </div>

      <div className={styles.searchDivider}></div>

      <div className={styles.searchField}>
        <label htmlFor="date-input" className={styles.searchLabel}>
          ¿Cuándo?
        </label>
        <div className={styles.inputWithIcon}>
          <input
            id="date-input"
            type="date"
            min={today}
            value={date}
            onChange={handleDateChange}
            placeholder="Selecciona una fecha"
            className={styles.searchInput}
            lang="es-AR"
          />
          <Calendar size={16} className={styles.searchIcon} />
        </div>
      </div>

      <button type="submit" className={styles.searchButton}>
        <Search size={18} className={styles.buttonIcon} />
        <span>Buscar</span>
      </button>
    </form>
  );
}

export default SearchField;
