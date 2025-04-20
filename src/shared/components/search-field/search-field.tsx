import { Search } from 'lucide-react';
import styles from './search-field.module.scss';

function SearchField() {
  return (
    <form className={styles['search-bar']}>
      <select className={styles.select} title="¿Qué estás planeando?">
        <option>¿Qué estás planeando?</option>
        <option>Solo estoy viendo</option>
      </select>
      <input type="text" placeholder="Escribe un lugar" className={styles.input} />
      <input type="date" className={styles.input} title="Fecha" />
      <button type="submit" className={styles.button} title="Buscar">
        <Search />
      </button>
    </form>
  );
}

export default SearchField;
