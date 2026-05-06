import { useEffect, useRef } from 'react';
import { Scissors, Eraser, SprayCan, Wind } from 'lucide-react'; // Pro minimalist icons
import styles from './Services.module.css';

const Services = () => {
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

  const services = [
    { id: 1, title: 'FADE HAIRCUT', price: '50 MAD', icon: <Scissors size={42} strokeWidth={1.2} />, desc: 'Modern fades with clean transitions and sharp finishing.' },
    { id: 2, title: 'CLASSIC HAIRCUT', price: '50 MAD', icon: <Scissors size={42} strokeWidth={1.2} />, desc: 'Timeless styles adapted to your face and personality.' },
    { id: 3, title: 'BEARD TRIM & SHAPING', price: '20 MAD', icon: <Eraser size={42} strokeWidth={1.2} />, desc: 'Clean lines, perfect symmetry, professional finish.' },
    { id: 4, title: 'FULL GROOMING PACKAGE', price: '80 MAD', icon: <SprayCan size={42} strokeWidth={1.2} />, desc: 'Haircut + beard + styling for a complete fresh look.' },
    { id: 5, title: 'STYLING & FINISH', price: '10 MAD', icon: <Wind size={42} strokeWidth={1.2} />, desc: 'Professional touch with premium products.' },
  ];

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Barbershop <span className={styles.accent}>services</span></h2>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (scrollRef.current[index] = el)}
              className={styles.serviceItem}
              style={{ transitionDelay: `${index * 100}ms` }} // Staggered entrance
            >
              <div className={styles.iconWrapper}>
                <div className={styles.iconCircle}></div>
                <div className={styles.iconInner}>{service.icon}</div>
              </div>
              
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDesc}>{service.desc}</p>
              
              <div className={styles.bottomSection}>
                <span className={styles.startingAt}>Starting from {service.price}</span>
                <button className={styles.bookBtn}>REQUEST AN APPOINTMENT <span>→</span></button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footerNote}>
           <div className={styles.mustacheIcon}></div>
           <p>We're dedicated to empowering men to look and feel fantastic.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;