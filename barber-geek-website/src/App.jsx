import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './animations.js';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Team from './components/Team/Team';
import BookingForm from './components/BookingForm/BookingForm';
import Contact from './components/Contact/Contact';
import styles from './App.module.css';

function App() {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      offset: 100
    });
  }, []);

  const openBookingForm = () => {
    setIsBookingFormOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeBookingForm = () => {
    setIsBookingFormOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className={styles.app}>
      <Navbar openBookingForm={openBookingForm} />
      <Hero openBookingForm={openBookingForm} />
      <Services />
      <Portfolio />
      <Team />
      <About />
      <Contact />
      
      {isBookingFormOpen && (
        <BookingForm closeBookingForm={closeBookingForm} />
      )}
    </div>
  );
}

export default App;
