import { MapPin } from 'lucide-react';
import styles from './location-tag.module.scss';

interface LocationTagProps {
  city: string;
  country: string;
  className?: string;
}

/**
 * A small tag component to display a location, typically overlaid on an image.
 */
export default function LocationTag({ city, country, className }: LocationTagProps) {
  return (
    <div className={`${styles.tag} ${className || ''}`}>
      <MapPin size={16} className={styles.icon} aria-hidden="true" />
      <span className={styles.text}>
        {city}, {country}
      </span>
    </div>
  );
}
