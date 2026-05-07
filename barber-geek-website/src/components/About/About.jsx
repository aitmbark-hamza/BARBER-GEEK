import { useEffect, useState, useRef } from 'react';
import styles from './About.module.css';

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      // Logic: Stop video when scrolling down or up
      if (isPlaying && videoRef.current) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add(styles.reveal);
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(`.${styles.animate}`).forEach(el => observer.observe(el));
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isPlaying]);

  const toggleVideo = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        
        {/* Parallax Background Year */}
        <div 
          className={styles.bgNumber} 
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >
          2026
        </div>

        <div className={styles.contentGrid}>
          {/* Text Content Area */}
          <div className={`${styles.textContent} ${styles.animate}`}>
            <h2 className={styles.mainTitle}>
              Premium <br />
              <span className={styles.blueStroke}>Barber Geek.</span>
            </h2>
            <p className={styles.description}>
              Barber Geek is a modern barber shop based in Casablanca, delivering high-quality grooming services with precision and attention to detail. 
              With a 5.0 rating and strong client satisfaction, the shop focuses on clean work, professional tools, and a smooth experience for every client.
            </p>
            <div className={styles.btnGroup}>
              <button className={styles.primaryBtn}>EXPLORE SERVICES</button>
              <button className={styles.secondaryBtn}>OUR BARBERS →</button>
            </div>
          </div>

          {/* Layered Image Complex (Fully Visible) */}
          <div className={`${styles.imageComplex} ${styles.animate}`}>
            <div className={styles.sinceBox}>
               <span className={styles.sinceText}>since</span>
               <h3 className={styles.sinceYear}>1998</h3>
            </div>
            
            <div className={styles.mainImgWrapper}>
              <img 
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000" 
                alt="Master Barber" 
                className={styles.displayImg} 
              />
            </div>
            
            <div 
              className={styles.floatingImgWrapper}
              style={{ transform: `translateY(-${scrollY * 0.05}px)` }}
            >
              <img 
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1000" 
                alt="Detail Work" 
                className={styles.displayImg} 
              />
            </div>
          </div>
        </div>

        {/* Video Integration at Bottom */}
        <div className={`${styles.videoSection} ${styles.animate}`}>
          <div className={styles.videoWrapper} onClick={toggleVideo}>
            <video 
              ref={videoRef}
              className={styles.mainVideo}
              poster="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2000"
            >
              <source src="/mainVideo.mp4" type="video/mp4" />
            </video>
            
            {!isPlaying && (
              <div className={styles.playOverlay}>
                <div className={styles.playCircle}>
                  <span className={styles.playText}>PLAY</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;