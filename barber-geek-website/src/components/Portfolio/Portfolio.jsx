import { useState } from 'react';
import { FaInstagram } from 'react-icons/fa';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('haircut');
  const [selectedImg, setSelectedImg] = useState(null);

  const portfolioItems = [
    { id: 1, category: 'haircut', title: 'Clean fade transformation', image: 'image1.png' },
     { id: 2, category: 'haircut', title: 'Clean fade transformation', image: 'image2.png' },
      { id: 3, category: 'haircut', title: 'Clean fade transformation', image: 'image3.png' },
    { id: 4, category: 'haircut', title: 'Modern taper style', image: 'image4.png' },
        { id: 4, category: 'haircut', title: 'Modern taper style', image: 'image5.png' },
          { id: 4, category: 'haircut', title: 'Modern taper style', image: 'image6.png' },
              { id: 4, category: 'haircut', title: 'Modern taper style', image: 'image7.png' },
                  { id: 4, category: 'haircut', title: 'Modern taper style', image: 'image8.png' },
                      { id: 4, category: 'haircut', title: 'Modern taper style', image: 'image9.png' },
    { id: 7, category: 'video', title: 'Video 1', image: 'video1.mp4', isVideo: true, videoUrl: 'https://www.instagram.com/reel/DXnPDHYoKzD/?igsh=N2ozM3BlN3M4eTB4' },
    { id: 8, category: 'video', title: 'Video 2', image: 'video2.mp4', isVideo: true, videoUrl: '#' },
    { id: 9, category: 'video', title: 'Video 3', image: 'video3.mp4', isVideo: true, videoUrl: '#' },
    { id: 10, category: 'video', title: 'Video 4', image: 'video4.mp4', isVideo: true, videoUrl: '#' },
    { id: 11, category: 'video', title: 'Video 5', image: 'video5.mp4', isVideo: true, videoUrl: '#' },
    { id: 12, category: 'video', title: 'Video 6', image: 'video6.mp4', isVideo: true, videoUrl: '#' },
    { id: 13, category: 'video', title: 'Video 7', image: 'video7.mp4', isVideo: true, videoUrl: '#' },
    { id: 14, category: 'video', title: 'Video 8', image: 'video8.mp4', isVideo: true, videoUrl: '#' },
    { id: 15, category: 'video', title: 'Video 9', image: 'video9.mp4', isVideo: true, videoUrl: '#' },
  ];

  const filters = ['haircut', 'video'];

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
                {item.isVideo ? (
                  <video src={item.image} className={styles.img} muted loop playsInline preload="metadata" autoPlay />
                ) : (
                  <img src={item.image} alt={item.title} className={styles.img} />
                )}
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
            href="https://www.instagram.com/barber_geek0?igsh=MXZpZm5mbGpmcXp0bg=="
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instaButton}
          >
            <FaInstagram className={styles.instaIcon} />
            <span className={styles.buttonText}>FOLLOW ON INSTAGRAM</span>
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