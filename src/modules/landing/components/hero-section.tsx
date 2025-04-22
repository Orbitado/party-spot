import styles from './hero-section.module.scss';
import SearchField from '@/shared/components/search-field';
import { heroSectionByIconSelected } from '../data/hero-by-icon';
import { useAutoRotate } from '@/shared/hooks/use-auto-rotate';

function HeroSection() {
  const { selectedItem, selectItem, pause, resume } = useAutoRotate(heroSectionByIconSelected);

  const isIconSelected = (icon: React.ElementType) => {
    return selectedItem.icon === icon;
  };

  return (
    <section
      className={styles.section}
      id="hero-section"
      style={{ backgroundImage: `url(${selectedItem.backgroundUrl})` }}
    >
      <div className={styles.container}>
        <div className={styles['buttons-container']} onMouseEnter={pause} onMouseLeave={resume}>
          {heroSectionByIconSelected.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={styles.button}
              title={item.highlight}
              onClick={() => selectItem(index)}
            >
              <item.icon
                className={isIconSelected(item.icon) ? styles['icon-selected'] : styles.icon}
              />
            </button>
          ))}
        </div>

        <h1 className={styles['title-container']}>
          <span className={styles.highlight}>{selectedItem.highlight}</span>
          <br />
          <span className={styles.text}>{selectedItem.text}</span>
        </h1>

        {/* Search field */}
        <SearchField />
      </div>
    </section>
  );
}

export default HeroSection;
