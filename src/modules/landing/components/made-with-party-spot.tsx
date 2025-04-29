import styles from './made-with-party-spot.module.scss';

// TODO: Replace these with actual image paths
const imageUrls = [
  'https://img.freepik.com/free-photo/group-friends-having-fun-music-festival_53876-94548.jpg',
  'https://img.freepik.com/free-photo/happy-friends-having-fun-night-club_329181-19697.jpg',
  'https://img.freepik.com/free-photo/medium-shot-people-dancing-club_23-2149043000.jpg',
  'https://img.freepik.com/free-photo/group-friends-having-fun-party_23-2149348342.jpg',
  'https://img.freepik.com/free-photo/group-friends-having-fun-party_23-2149348347.jpg',
  'https://img.freepik.com/free-photo/medium-shot-people-dancing-night-club_23-2149043010.jpg',
  'https://img.freepik.com/free-photo/group-friends-having-fun-party_23-2149348349.jpg',
  'https://img.freepik.com/free-photo/group-friends-having-fun-party_23-2149348350.jpg',
];

// Duplicate the array for a seamless loop
const doubledImageUrls = [...imageUrls, ...imageUrls];

function MadeWithPartySpot() {
  return (
    <section className={styles.madeWithPartySpot}>
      <h2 className={styles.title}>
        <span>Hecho con</span>
        <img className={styles.logo} src="/brand/ps-logo-text-flex.svg" alt="PartySpot" />
      </h2>
      <div className={styles.imageScroller}>
        <div className={styles.scrollerInner}>
          {doubledImageUrls.map((url, index) => (
            <img
              key={`${url}-${index}`}
              src={url}
              alt={`Event example ${index + 1}`}
              className={styles.scrollerImage}
              loading="lazy"
              aria-hidden="true"
            />
          ))}
        </div>
        <div className={styles.scrollerInnerReverse}>
          {doubledImageUrls.map((url, index) => (
            <img
              key={`${url}-${index}`}
              src={url}
              alt={`Event example ${index + 1}`}
              className={styles.scrollerImage}
              loading="lazy"
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MadeWithPartySpot;
