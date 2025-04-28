import Navbar from '@/shared/components/navbar';
import HeroSection from '@/modules/landing/components/hero-section';
import FeaturedSpots from '@/modules/landing/components/featured-spots';
import NextParty from '@/modules/landing/components/next-party';
import styles from './landing.module.scss';

function Landing() {
  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <main className={styles.mainContent}>
        <HeroSection />
        <FeaturedSpots />
        <NextParty />
      </main>
    </div>
  );
}

export default Landing;
