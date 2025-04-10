import { paths } from '@/config/paths';
import { Link } from 'react-router';
import styles from './not-found.module.css';

const NotFoundRoute = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.title}>404 - Not Found</h1>
      <p className={styles.message}>Sorry, the page you are looking for does not exist.</p>
      <Link to={paths.home.getHref()} replace className={styles.homeLink}>
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundRoute;
