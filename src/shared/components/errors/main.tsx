import styles from './main.module.css';

function MainErrorBoundary({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>¡Error Inesperado!</h1>
      <p className={styles.message}>{error.message || 'Ha ocurrido un error en la aplicación.'}</p>
      <button onClick={resetErrorBoundary} className={styles.button}>
        Intentar nuevamente
      </button>
    </div>
  );
}

export default MainErrorBoundary;
