import Navbar from '@/shared/components/navbar';
import HeroSection from '@/modules/landing/components/hero-section';
import styles from './landing.module.css';

function Landing() {
  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <main className={styles.mainContent}>
        <HeroSection />
      </main>
    </div>
  );
}

export default Landing;
