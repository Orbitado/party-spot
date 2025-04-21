import styles from './hero-section.module.scss';
import SearchField from '@/shared/components/search-field';
import { heroSectionByIconSelected } from '../data/hero-by-icon';
import { useState } from 'react';

function HeroSection() {
  const [state, setState] = useState({
    selectedIcon: heroSectionByIconSelected[0].icon,
    selectedHighlight: heroSectionByIconSelected[0].highlight,
    selectedText: heroSectionByIconSelected[0].text,
    selectedBackgroundUrl: heroSectionByIconSelected[0].backgroundUrl,
  });

  return (
    <section
      className={styles.section}
      id="hero-section"
      style={{ backgroundImage: `url(${state.selectedBackgroundUrl})` }}
    >
      <div className={styles.container}>
        <div className={styles['buttons-container']}>
          {heroSectionByIconSelected.map((item) => (
            <button
              key={item.id}
              type="button"
              className={styles.button}
              title={item.highlight}
              onClick={() =>
                setState({
                  ...state,
                  selectedIcon: item.icon,
                  selectedHighlight: item.highlight,
                  selectedText: item.text,
                  selectedBackgroundUrl: item.backgroundUrl,
                })
              }
            >
              <item.icon className={styles.icon} />
            </button>
          ))}
        </div>

        <h1 className={styles['title-container']}>
          <span className={styles.highlight}>{state.selectedHighlight}</span>
          <br />
          <span className={styles.text}>{state.selectedText}</span>
        </h1>

        {/* Search field */}
        <SearchField />
      </div>
    </section>
  );
}

export default HeroSection;
