import { useEffect, useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contactInfo = [
    { title: 'Location', content: 'Barber Geek, Casablanca' },
    { title: 'Phone', content: '+212663838127' },
    { title: 'Hours', content: 'Mon-Sat: 09am-7pm\nSun: Closed' }
  ];

  const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/barber_geek0?igsh=MXZpZm5mbGpmcXp0bg==' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@barber.geek0?_r=1&_t=ZS-96CGQdPdWZW' },
    { name: 'WhatsApp', url: 'https://wa.me/212663838127' }
  ];

  return (
    <section id="contact" className={styles.contact}>
      {/* Top Section: Map & Floating Card */}
      <div className={styles.heroSection}>
        <div className={styles.mapBackground}>
          <iframe
  src="https://www.google.com/maps?q=BARBER+GEEK,+6+Avenue+Mohamed+Balafrej,+Casablanca,+Morocco&z=17&output=embed"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Barber Geek Location"
/>
          
          <div 
            className={styles.bgText}
            style={{ transform: `translateX(${scrollY * 0.05}px)` }}
          >
            Write here
          </div>
        </div>

        <div className={styles.floatingCard}>
          <h2 className={styles.cardTitle}>HOW WE CAN HELP <br/>YOUR STYLE?</h2>
          <form className={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Your name*" required />
              <span className={styles.inputIcon}>☺</span>
            </div>
            <div className={styles.inputGroup}>
              <input type="email" placeholder="Your email address*" required />
              <span className={styles.inputIcon}>✉</span>
            </div>
            <div className={styles.inputGroup}>
              <textarea placeholder="Your message" rows="3"></textarea>
              <span className={styles.inputIcon}>💬</span>
            </div>
            <button type="submit" className={styles.sendBtn}>SEND A MESSAGE</button>
          </form>
        </div>
      </div>

      {/* Bottom Section: Minimalist Footer */}
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerCol}>
            <span className={styles.colLabel}>READY FOR A FRESH LOOK?</span>
            <h3 className={styles.colTitle}>BOOK YOUR <br/>APPOINTMENT</h3>
          </div>

          <div className={styles.footerCol}>
            <h4 className={styles.colHeader}>LOCATION</h4>
            <a
              href="https://www.google.com/maps/search/?api=1&query=BARBER+GEEK,+6+Avenue+Mohamed+Balafrej,+Casablanca,+Morocco"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.colContent}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              {contactInfo[0].content}
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=BARBER+GEEK,+6+Avenue+Mohamed+Balafrej,+Casablanca,+Morocco"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.colContent}
              style={{ textDecoration: 'none', color: 'inherit', fontSize: '0.85em', marginTop: '5px' }}
            >
              Get Directions →
            </a>
          </div>

          <div className={styles.footerCol}>
            <h4 className={styles.colHeader}>HOURS</h4>
            <div className={styles.colContent} style={{ whiteSpace: 'pre-line' }}>
              {contactInfo[2].content}
            </div>
          </div>

          <div className={styles.footerCol}>
            <h4 className={styles.colHeader}>CALL US</h4>
            <a href="tel:+212663838127" className={styles.colContent} style={{ textDecoration: 'none', color: 'inherit' }}>
              {contactInfo[1].content}
            </a>
            <div className={styles.socialList} style={{ marginTop: '10px' }}>
              {socialLinks.map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;