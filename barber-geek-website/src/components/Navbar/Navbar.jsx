import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = ({ openBookingForm }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // IsScrolled t-kon true ghir t-fout 10px dyal l-hbut
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu mobile logic
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          
          <div className={styles.logo} onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
            <img src="/logo.png" alt="Barber Geek" className={styles.logoImage} />
            <div className={styles.logoTextWrapper}>
              <span className={styles.logoMain}>BARBER</span>
              <span className={styles.logoSub}>GEEK</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className={styles.navLinks}>
            {['services', 'portfolio', 'team', 'about', 'contact'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item)} className={styles.navLink}>
                {item}
              </button>
            ))}
            <button onClick={openBookingForm} className={styles.bookButton}>RESERVE NOW</button>
          </div>

          {/* Burger Button */}
          <button 
            className={`${styles.burger} ${isMobileMenuOpen ? styles.active : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div className={`${styles.mobileOverlay} ${isMobileMenuOpen ? styles.overlayOpen : ''}`}>
        <div className={styles.mobileLinks}>
          {['services', 'portfolio', 'team', 'about', 'contact'].map((item) => (
            <button key={item} onClick={() => scrollToSection(item)} className={styles.mobileNavLink}>
              {item}
            </button>
          ))}
          <button onClick={() => { openBookingForm(); setIsMobileMenuOpen(false); }} className={styles.mobileBookBtn}>
            BOOK APPOINTMENT
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;