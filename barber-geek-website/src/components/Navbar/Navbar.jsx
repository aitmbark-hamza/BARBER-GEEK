import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = ({ openBookingForm }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          
          {/* LOGO AREA */}
          <div className={styles.logo} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <img src="/logo.png" alt="Barber Geek Logo" className={styles.logoImage} />
            <div className={styles.logoTextWrapper}>
                <span className={styles.logoMain}>BARBER</span>
                <span className={styles.logoSub}>GEEK</span>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <div className={styles.navLinks}>
            {['services', 'portfolio', 'team', 'about', 'contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className={styles.navLink}
              >
                {item}
              </button>
            ))}
            <button onClick={openBookingForm} className={styles.bookButton}>
              RESERVE NOW
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button className={styles.burger} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <div className={`${styles.line} ${isMobileMenuOpen ? styles.line1Active : ''}`}></div>
            <div className={`${styles.line} ${isMobileMenuOpen ? styles.line2Active : ''}`}></div>
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      <div className={`${styles.mobileOverlay} ${isMobileMenuOpen ? styles.overlayOpen : ''}`}>
        <div className={styles.mobileLinks}>
            {['services', 'portfolio', 'team', 'about', 'contact'].map((item) => (
                <button key={item} onClick={() => scrollToSection(item)} className={styles.mobileNavLink}>
                    {item}
                </button>
            ))}
            <button onClick={openBookingForm} className={styles.mobileBookBtn}>BOOK APPOINTMENT</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;