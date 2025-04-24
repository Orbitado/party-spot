import { paths } from '@/config/paths';
import { Link } from 'react-router';
import styles from './not-found.module.scss';

const NotFoundRoute = () => {
  return (
    <div className={styles['not-found-container']}>
      <h1 className={styles.title}>404 - Not Found</h1>
      <p className={styles.message}>Sorry, the page you are looking for does not exist.</p>
      <Link to={paths.home.getHref()} replace className={styles['home-link']}>
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundRoute;
