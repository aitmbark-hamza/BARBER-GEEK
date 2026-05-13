import { useEffect, useRef } from 'react';
import { Scissors, Eraser, SprayCan, Wind } from 'lucide-react'; // Pro minimalist icons
import { BOOKING_SERVICES } from '../../constants/bookingServices';
import styles from './Services.module.css';

const serviceIconsById = {
  1: Scissors,
  2: Scissors,
  3: Eraser,
  4: SprayCan,
  5: Wind
};

const Services = ({ openBookingForm }) => {
  const scrollRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.reveal);
          }
        });
      },
      { threshold: 0.1 }
    );

    scrollRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Barbershop <span className={styles.accent}>services</span></h2>
        </div>

        <div className={styles.grid}>
          {BOOKING_SERVICES.map((service, index) => {
            const Icon = serviceIconsById[service.id];
            return (
            <div
              key={service.id}
              ref={(el) => (scrollRef.current[index] = el)}
              className={styles.serviceItem}
              style={{ transitionDelay: `${index * 100}ms` }} // Staggered entrance
            >
              <div className={styles.iconWrapper}>
                <div className={styles.iconCircle}></div>
                <div className={styles.iconInner}>
                  {Icon ? <Icon size={42} strokeWidth={1.2} /> : null}
                </div>
              </div>
              
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDesc}>{service.desc}</p>
              
              <div className={styles.bottomSection}>
                <span className={styles.startingAt}>Starting from {service.price}</span>
                <button
                  type="button"
                  className={styles.bookBtn}
                  onClick={() => openBookingForm?.(service.title)}
                >
                  REQUEST AN APPOINTMENT <span>→</span>
                </button>
              </div>
            </div>
            );
          })}
        </div>

        <div className={styles.footerNote}>
           <img src="/logo.png" alt="Barber Geek Logo" className={styles.footerLogo} />
           <p>We're dedicated to empowering men to look and feel fantastic.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;