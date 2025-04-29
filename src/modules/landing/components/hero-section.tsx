import { useRef, useEffect } from 'react';
import styles from './hero-section.module.scss';
import SearchField from '@/shared/components/search-field';
import { heroSectionByIconSelected } from '../data/hero-by-icon';
import { useAutoRotate } from '@/shared/hooks/use-auto-rotate';

function HeroSection() {
  const { selectedItem, currentIndex, selectItem, pause, resume } =
    useAutoRotate(heroSectionByIconSelected);
  const bgRef1 = useRef<HTMLDivElement>(null);
  const bgRef2 = useRef<HTMLDivElement>(null);

  const isIconSelected = (icon: React.ElementType) => {
    return selectedItem.icon === icon;
  };

  useEffect(() => {
    const bg1 = bgRef1.current;
    const bg2 = bgRef2.current;

    if (bg1 && bg2) {
      const activeBg = bg1.classList.contains(styles.active) ? bg1 : bg2;
      const inactiveBg = activeBg === bg1 ? bg2 : bg1;

      inactiveBg.style.backgroundImage = `url(${selectedItem.backgroundUrl})`;

      activeBg.classList.remove(styles.active);
      inactiveBg.classList.add(styles.active);
    }
  }, [currentIndex, selectedItem.backgroundUrl]);

  return (
    <section className={styles.section} id="hero-section">
      <div
        ref={bgRef1}
        className={`${styles.backgroundContainer} ${styles.active}`}
        style={{ backgroundImage: `url(${heroSectionByIconSelected[0].backgroundUrl})` }}
      />
      <div ref={bgRef2} className={styles.backgroundContainer} />

      <div className={styles.container}>
        <div className={styles.buttonsContainer} onMouseEnter={pause} onMouseLeave={resume}>
          {heroSectionByIconSelected.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={styles.button}
              title={item.highlight}
              onClick={() => selectItem(index)}
            >
              <item.icon
                className={isIconSelected(item.icon) ? styles.iconSelected : styles.icon}
              />
            </button>
          ))}
        </div>

        <h1 className={styles.titleContainer} key={selectedItem.id}>
          <span className={`${styles.highlight} ${styles.fadeIn}`}>{selectedItem.highlight}</span>
          <br />
          <span className={`${styles.text} ${styles.fadeIn}`}>{selectedItem.text}</span>
        </h1>

        {/* Search field */}
        <SearchField />
      </div>
    </section>
  );
}

export default HeroSection;
