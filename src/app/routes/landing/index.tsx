import Navbar from '@/shared/components/navbar';
import HeroSection from '@/modules/landing/components/hero-section';
import FeaturedSpots from '@/modules/landing/components/featured-spots';
import styles from './landing.module.scss';

function Landing() {
  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <main className={styles.mainContent}>
        <HeroSection />
        <FeaturedSpots />
      </main>
    </div>
  );
}

export default Landing;
