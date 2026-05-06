import { useState } from 'react';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImg, setSelectedImg] = useState(null);

  const portfolioItems = [
    { id: 1, category: 'haircut', title: 'Clean fade transformation', image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1000' },
    { id: 2, category: 'beard', title: 'Sharp beard line-up', image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000' },
    { id: 3, category: 'style', title: 'Precision haircut finish', image: 'https://images.unsplash.com/photo-1599351431247-f509403971c7?q=80&w=1000' },
    { id: 4, category: 'haircut', title: 'Modern taper style', image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1000' },
    { id: 5, category: 'beard', title: 'Before / after grooming result', image: 'https://images.unsplash.com/photo-1622286330961-a345bc7846cf?q=80&w=1000' },
    { id: 6, category: 'style', title: 'Fresh and clean look', image: 'https://images.unsplash.com/photo-1471466054146-e71bcc0d2bb2?q=80&w=1000' },
  ];

  const filters = ['all', 'haircut', 'beard', 'style'];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className={styles.portfolio}>
      {/* Background Texture Overlay */}
      <div className={styles.sectionBgOverlay}></div>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.topLabel}>OUR WORK</span>
          <h2 className={styles.title}>THE <span className={styles.accent}>GALLERY</span></h2>
        </div>

        <div className={styles.filterBar}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`${styles.filterBtn} ${activeFilter === f ? styles.active : ''}`}
            >
              {f.toUpperCase()}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredItems.map((item) => (
            <div key={item.id} className={styles.item} onClick={() => setSelectedImg(item.image)}>
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={item.title} className={styles.img} />
                <div className={styles.overlay}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <div className={styles.viewBtn}>VIEW IMAGE</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>WANT TO SEE MORE TRANSFORMATIONS?</p>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.instaButton}
          >
            <span className={styles.instaIcon}>📸</span> FOLLOW ON INSTAGRAM
          </a>
        </div>
      </div>

      {selectedImg && (
        <div className={styles.lightbox} onClick={() => setSelectedImg(null)}>
          <img src={selectedImg} className={styles.bigImg} alt="Enlarged" />
          <span className={styles.close}>CLOSE ×</span>
        </div>
      )}
    </section>
  );
};

export default Portfolio;