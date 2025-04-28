import styles from './next-party.module.scss';
import { Button } from '@/shared/components/button';
import { useState } from 'react';
import { categories } from '../data/next-party';
import LocationTag from './location-tag';

function NextParty() {
  const [selectedCategory, setSelectedCategory] = useState<number>(1);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>¿Cuál será tu próxima fiesta?</h3>

        <article className={styles.card}>
          <h4 className={styles.subtitle}>Reserva un lugar único para cualquier evento.</h4>

          <div className={styles.categoriesContainer}>
            {categories.map(({ id, icon, label }) =>
              selectedCategory === id ? (
                <Button
                  className={styles.button}
                  variant="primary"
                  key={id}
                  onClick={() => setSelectedCategory(id)}
                >
                  {icon}
                  {label}
                </Button>
              ) : (
                <Button
                  className={styles.button__outline}
                  variant="outline"
                  key={id}
                  onClick={() => setSelectedCategory(id)}
                >
                  {icon}
                  {label}
                </Button>
              )
            )}
          </div>
        </article>
      </div>

      <div className={styles.imageContainer}>
        <img className={styles.image} src="/images/wedding.webp" alt="Wedding reception outdoors" />
        <LocationTag city="Cancun" country="Mexico" />
      </div>
    </section>
  );
}

export default NextParty;
