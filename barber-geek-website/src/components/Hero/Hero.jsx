import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

const Hero = ({ openBookingForm }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    'backgraondhero1.png',
    'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2000',
    'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2000',
 
  ];

  useEffect(() => {
    setIsVisible(true);

    // CHANGED: Interval set to 4000ms (4 seconds)
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <section className={styles.hero}>
      <div className={styles.sliderContainer}>
        {slides.map((image, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentSlide ? styles.activeSlide : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className={styles.vignetteOverlay}></div>
        <div className={styles.noiseOverlay}></div>
      </div>
      
      <div className="container">
        <div className={`${styles.heroContent} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.heroText}>
            <span className={styles.topLabel}>CASABLANCA • PREMIUM GROOMING</span>
            <h1 className={styles.heroTitle}>
              UPGRADE YOUR <br />
              <span className={styles.accentTitle}>LOOK AT BARBER GEEK</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Precision cuts, clean fades, and premium grooming experience in Casablanca.
            </p>
            
            <div className={styles.heroButtons}>
              <button onClick={openBookingForm} className={styles.primaryBtn}>
                BOOK APPOINTMENT
              </button>
              <button className={styles.secondaryBtn} onClick={() => document.getElementById('portfolio').scrollIntoView({behavior: 'smooth'})}>
                VIEW PORTFOLIO
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;