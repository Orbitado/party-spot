import { ChevronRight, Heart, MapPin, Share2, Star, Users } from 'lucide-react';
import { featuredSpots } from '../data/featured-spots';
import styles from './featured-spots.module.scss';
import { Link } from 'react-router';

export default function FeaturedSpots() {
  return (
    <section className={styles.featuredSpotsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Lugares recomendados</h2>
          <Link to="/explorar-lugares" className={styles.viewAllLink}>
            Ver todos <ChevronRight size={24} />
          </Link>
        </div>

        <div className={styles.spotsContainer}>
          {featuredSpots.map((spot) => (
            <div key={spot.id} className={styles.spotCard}>
              <div className={styles.spotImageContainer}>
                <img src={spot.image} alt={spot.title} className={styles.spotImage} />
                <div className={styles.imageOverlay}></div>

                <div className={styles.cardActions}>
                  <button className={styles.actionButton} aria-label="Share spot">
                    <Share2 className={styles.actionIcon} size={24} />
                  </button>
                  <button className={styles.actionButton} aria-label="Favorite spot">
                    <Heart className={styles.actionIcon} size={24} />
                  </button>
                </div>

                <div className={styles.spotContent}>
                  <h3 className={styles.spotTitle}>{spot.title}</h3>
                  <div className={styles.priceReviewLine}>
                    <div className={styles.spotPrice}>
                      ${spot.price.toLocaleString()}
                      <span className={styles.pricePeriod}>/hora</span>
                    </div>
                    <div className={styles.spotReview}>
                      <Star size={16} className={styles.reviewStarIcon} />
                      <span className={styles.ratingValue}>{spot.rating.toFixed(2)}</span>
                      <span className={styles.reviewCount}>({spot.reviewCount})</span>
                    </div>
                  </div>

                  <div className={styles.spotMetadata}>
                    <div className={styles.metadataItem}>
                      <MapPin size={16} className={styles.metadataIcon} />
                      <span>{spot.location}</span>
                    </div>

                    <div className={styles.metadataItem}>
                      <Users size={16} className={styles.metadataIcon} />
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
