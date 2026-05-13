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
  const [bookingInitialService, setBookingInitialService] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      offset: 100
    });
  }, []);

  const openBookingForm = (serviceTitle = '') => {
    setBookingInitialService(typeof serviceTitle === 'string' ? serviceTitle : '');
    setIsBookingFormOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeBookingForm = () => {
    setIsBookingFormOpen(false);
    setBookingInitialService('');
    document.body.style.overflow = 'unset';
  };

  return (
    <div className={styles.app}>
      <Navbar openBookingForm={openBookingForm} />
      <Hero openBookingForm={openBookingForm} />
      <About />
      <Services openBookingForm={openBookingForm} />
      <Portfolio />
      <Team />
      <Contact />
      
      {isBookingFormOpen && (
        <BookingForm
          closeBookingForm={closeBookingForm}
          initialService={bookingInitialService}
        />
      )}
    </div>
  );
}

export default App;
