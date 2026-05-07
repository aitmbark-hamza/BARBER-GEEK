import { useState } from 'react';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImg, setSelectedImg] = useState(null);

  const portfolioItems = [
    { id: 1, category: 'haircut', title: 'Clean fade transformation', image: 'image1.png' },
    { id: 2, category: 'beard', title: 'Sharp beard line-up', image: 'imag2.png' },
    { id: 3, category: 'style', title: 'Precision haircut finish', image: 'imag3.png' },
    { id: 4, category: 'haircut', title: 'Modern taper style', image: 'imag4.png' },
    { id: 5, category: 'beard', title: 'Before / after grooming result', image: 'imag5.png' },
    { id: 6, category: 'style', title: 'Fresh and clean look', image: 'imag6.png' },
    { 
      id: 7, 
      category: 'video', 
      title: 'Featured Transformation', 
      image: 'image1.png', // Thumbnail image
      isVideo: true,
      videoUrl: 'https://www.instagram.com/reel/DXnPDHYoKzD/?igsh=N2ozM3BlN3M4eTB4'
    },
  ];

  const filters = ['all', 'haircut', 'beard', 'style', 'video'];

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
            <div key={item.id} className={styles.item} onClick={() => item.isVideo ? window.open(item.videoUrl, '_blank') : setSelectedImg(item.image)}>
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={item.title} className={styles.img} />
                {item.isVideo && (
                  <div className={styles.videoBadge}>
                    <span className={styles.playIcon}>▶</span>
                  </div>
                )}
                <div className={styles.overlay}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <div className={styles.viewBtn}>{item.isVideo ? 'WATCH VIDEO' : 'VIEW IMAGE'}</div>
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