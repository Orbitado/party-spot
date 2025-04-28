import { MapPin } from 'lucide-react';
import styles from './location-tag.module.scss';

interface LocationTagProps {
  name: string;
  details: string;
}

/**
 * A reusable component to display a location tag with an icon.
 * Used to highlight specific venues or areas, often overlayed on images.
 */
export const LocationTag = ({ name, details }: LocationTagProps) => {
  return (
    <div className={styles.locationTag}>
      {/* Map pin icon */}
      <MapPin size={16} className={styles.locationIcon} />
      <div className={styles.locationText}>
        {/* Main location name */}
        <span className={styles.locationName}>{name}</span>
        {/* Location details */}
        <span className={styles.locationDetails}>{details}</span>
      </div>
    </div>
  );
};
