import { ChevronRight, Heart, MapPin, Share2, Star, Users } from 'lucide-react';
import { featuredSpots } from '../data/featured-spots';
import styles from './featured-spots.module.scss';
import { Link } from 'react-router';

export default function FeaturedSpots() {
  return (
    <section className={styles['featured-spots-section']}>
      <div className={styles['container']}>
        <div className={styles['section-header']}>
          <h2 className={styles['section-title']}>Lugares recomendados</h2>
          <Link to="/explorar-lugares" className={styles['view-all-link']}>
            Ver todos <ChevronRight size={24} />
          </Link>
        </div>

        <div className={styles['spots-container']}>
          {featuredSpots.map((spot) => (
            <div key={spot.id} className={styles['spot-card']}>
              <div className={styles['spot-image-container']}>
                <img src={spot.image} alt={spot.title} className={styles['spot-image']} />
                <div className={styles['image-overlay']}></div>

                <div className={styles['card-actions']}>
                  <button className={styles['action-button']} aria-label="Share spot">
                    <Share2 className={styles['action-icon']} size={24} />
                  </button>
                  <button className={styles['action-button']} aria-label="Favorite spot">
                    <Heart className={styles['action-icon']} size={24} />
                  </button>
                </div>

                <div className={styles['spot-content']}>
                  <h3 className={styles['spot-title']}>{spot.title}</h3>
                  <div className={styles['price-review-line']}>
                    <div className={styles['spot-price']}>
                      ${spot.price.toLocaleString()}
                      <span className={styles['price-period']}>/hora</span>
                    </div>
                    <div className={styles['spot-review']}>
                      <Star size={16} className={styles['review-star-icon']} />
                      <span className={styles['rating-value']}>{spot.rating.toFixed(2)}</span>
                      <span className={styles['review-count']}>({spot.reviewCount})</span>
                    </div>
                  </div>

                  <div className={styles['spot-metadata']}>
                    <div className={styles['metadata-item']}>
                      <MapPin size={16} className={styles['metadata-icon']} />
                      <span>{spot.location}</span>
                    </div>

                    <div className={styles['metadata-item']}>
                      <Users size={16} className={styles['metadata-icon']} />
                      <span>
                        {spot.amenities.find((a) => a.icon === Users)?.label ||
                          'Capacidad disponible'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
