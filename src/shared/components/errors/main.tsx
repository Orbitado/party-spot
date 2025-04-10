import styles from './main.module.css';

interface MainErrorBoundaryProps {
  error: Error;
  resetErrorBoundary: () => void;
}

function MainErrorBoundary({ error, resetErrorBoundary }: MainErrorBoundaryProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>¡Error Inesperado!</h1>
      <p className={styles.message}>{error.message || 'Ha ocurrido un error en la aplicación.'}</p>
      <button type="button" onClick={resetErrorBoundary} className={styles.button}>
        Intentar nuevamente
      </button>
    </div>
  );
}

export default MainErrorBoundary;
