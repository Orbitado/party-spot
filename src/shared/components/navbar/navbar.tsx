import { useState, useRef } from 'react';
import { NavLink } from 'react-router';
import { paths } from '@/config/paths';
import { Menu, X, User } from 'lucide-react';
import { useOutsideClick } from '@/shared/hooks/use-outside-click';
import styles from './navbar.module.scss';

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
        <div className={styles['navbar-container']}>
          <NavLink to={paths.home.getHref()} className={styles.logo}>
            <img
              src="/brand/ps-logo.svg"
              alt="PartySpot Icon Logo"
              className={styles['logo-icon']}
            />
            <img
              src="/brand/party-spot.svg"
              alt="PartySpot Text Logo"
              className={styles['logo-image']}
            />
          </NavLink>

          {/* Mobile menu button */}
          <button
            type="button"
            className={styles['menu-button']}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? (
              <X className={styles['menu-icon']} />
            ) : (
              <Menu className={styles['menu-icon']} />
            )}
          </button>

          {/* Navigation links */}
          <div className={`${styles['nav-links']} ${isMenuOpen ? styles.active : ''}`}>
            <NavLink
              to={paths.home.getHref()}
              className={({ isActive }) =>
                isActive ? `${styles['nav-link']} ${styles['nav-link-active']}` : styles['nav-link']
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </NavLink>
            <NavLink
              to="/spots"
              className={({ isActive }) =>
                isActive ? `${styles['nav-link']} ${styles['nav-link-active']}` : styles['nav-link']
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Explorar lugares
            </NavLink>
            <NavLink
              to="/add-spot"
              className={({ isActive }) =>
                isActive ? `${styles['nav-link']} ${styles['nav-link-active']}` : styles['nav-link']
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Publica tu lugar
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `${styles['nav-link']} ${styles['nav-link-active']}` : styles['nav-link']
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Nosotros
            </NavLink>

            {/* User section in mobile menu */}
            <div className={styles['user-section-mobile']}>
              <div className={styles.avatar}>
                <User size={20} />
              </div>
            </div>
          </div>

          {/* Desktop user profile/avatar section */}
          <div className={styles['user-section']}>
            <div className={styles.avatar}>
              <User size={20} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
