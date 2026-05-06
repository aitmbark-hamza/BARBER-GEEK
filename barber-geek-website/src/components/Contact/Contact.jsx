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
    { title: 'Location', content: 'Angle Rue d’Anfa et Moulay Youssef, Casablanca 20000' },
    { title: 'Phone', content: '+212 522-201234' },
    { title: 'Hours', content: 'Mon-Sat: 09am-7pm\nSun: Closed' }
  ];

  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com/nexora.studio' },
    { name: 'WhatsApp', url: 'https://wa.me/212600000000' },
    { name: 'TikTok', url: 'https://tiktok.com/@nexora.studio' },
    { name: 'Facebook', url: 'https://facebook.com/nexorastudio' }
  ];

  return (
    <section id="contact" className={styles.contact}>
      {/* Top Section: Map & Floating Card */}
      <div className={styles.heroSection}>
        <div className={styles.mapBackground}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.51347083042!2d-7.635391224213198!3d33.59200467333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d29621375555%3A0x6c6e768f5a60e0a!2sMobiarchitects!5e0!3m2!1sen!2sma!4v1714950000000!5m2!1sen!2sma"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mobiarchitects Location"
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
            <h4 className={styles.colHeader}>WRITE US</h4>
            <p className={styles.colContent}>info@nexorastudio.com</p>
            <p className={styles.colContent}>support@nexorastudio.com</p>
          </div>

          <div className={styles.footerCol}>
            <h4 className={styles.colHeader}>FOLLOW US</h4>
            <div className={styles.socialList}>
              {socialLinks.map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noreferrer" className={styles.socialItem}>
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.footerCol}>
            <h4 className={styles.colHeader}>CALL US</h4>
            <p className={styles.colContent}>{contactInfo[1].content}</p>
            <p className={styles.colContent}>+212 611-111111</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;