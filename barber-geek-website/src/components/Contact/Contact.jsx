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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.5!2d-7.6!3d33.573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBarber%20Geek!5e0!3m2!1sen!2sma!4v1620000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Barber Geek Location"
          ></iframe>
          
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
            <span className={styles.colLabel}>NEED A PRIVATE SPACE?</span>
            <h3 className={styles.colTitle}>RESERVE A TABLE? <br/>LET'S TALK US.</h3>
          </div>

          <div className={styles.footerCol}>
            <h4 className={styles.colHeader}>LOCATION</h4>
            <a 
              href="https://maps.app.goo.gl/ZFEjUFcVMJ66J8JH8" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.colContent}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              {contactInfo[0].content}
            </a>
            <a 
              href="https://maps.app.goo.gl/ZFEjUFcVMJ66J8JH8" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.colContent}
              style={{ textDecoration: 'none', color: 'inherit', fontSize: '0.85em', marginTop: '5px' }}
            >
              Get Directions →
            </a>
          </div>

          <div className={styles.footerCol}>
            <h4 className={styles.colHeader}>FOLLOW US</h4>
            <div className={styles.socialList}>
              {socialLinks.map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.footerCol}>
            <h4 className={styles.colHeader}>CALL US</h4>
            <a href="tel:+212663838127" className={styles.colContent} style={{ textDecoration: 'none', color: 'inherit' }}>
              {contactInfo[1].content}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;