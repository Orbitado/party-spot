import { useState, useRef } from 'react';
import { NavLink } from 'react-router';
import { paths } from '@/config/paths';
import { Menu, X, User } from 'lucide-react';
import { useOutsideClick } from '@/shared/hooks/use-outside-click';
import styles from './navbar.module.scss';

const navLinks = [
  {
    to: paths.home.getHref(),
    label: 'Inicio',
  },
  {
    to: '/spots',
    label: 'Explorar lugares',
  },
  {
    to: '/add-spot',
    label: 'Publica tu lugar',
  },
  {
    to: '/about',
    label: 'Sobre Nosotros',
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  useOutsideClick(navRef, closeMenu, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar} ref={navRef}>
        <div className={styles['navbar__container']}>
          <NavLink to={paths.home.getHref()} className={styles.logo}>
            <img
              src="/brand/ps-logo.svg"
              alt="PartySpot Icon Logo"
              className={styles['logo__icon']}
            />
            <img
              src="/brand/party-spot.svg"
              alt="PartySpot Text Logo"
              className={styles['logo__image']}
            />
          </NavLink>

          {/* Mobile menu button */}
          <button
            type="button"
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? (
              <X className={styles['menuButton__icon']} />
            ) : (
              <Menu className={styles['menuButton__icon']} />
            )}
          </button>

          {/* Navigation links */}
          <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  isActive ? `${styles.navLink} ${styles['navLink--active']}` : styles.navLink
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}

            {/* User section in mobile menu */}
            <div className={styles['userSection--mobile']}>
              <div className={styles.avatar}>
                <User size={20} />
              </div>
            </div>
          </div>

          {/* Desktop user profile/avatar section */}
          <div className={styles.userSection}>
            <div className={styles.avatar}>
              <User size={20} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
