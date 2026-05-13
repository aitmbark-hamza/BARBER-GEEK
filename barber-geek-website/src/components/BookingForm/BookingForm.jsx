import { useState, useEffect } from 'react';
import { BOOKING_SERVICES } from '../../constants/bookingServices';
import styles from './BookingForm.module.css';

const serviceOptions = BOOKING_SERVICES.map((s) => s.title);

const getWhatsAppBusinessDigits = () =>
  String(import.meta.env.VITE_WHATSAPP_BUSINESS_NUMBER || '212663838127').replace(/\D/g, '');

const buildWhatsAppBookingText = ({ name, phone, service, date, time }) => {
  const formattedDate = date ? new Date(`${date}T12:00:00`).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  }) : date;

  return `✨ *New Appointment Request* ✨%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Service:* ${service}%0A*Date:* ${formattedDate}%0A*Time:* ${time}%0A%0A_Please confirm availability._`;
};

const BookingForm = ({ closeBookingForm, initialService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: initialService && serviceOptions.includes(initialService) ? initialService : '',
    date: '',
    time: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle | submitting | success
  const [error, setError] = useState(null);

  const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const digits = getWhatsAppBusinessDigits();
    
    if (!digits) return setError('Configuration error.');

    setStatus('submitting');
    
    setTimeout(() => {
      const text = buildWhatsAppBookingText(formData);
      const url = `https://wa.me/${digits}?text=${text}`;
      window.open(url, '_blank', 'noopener,noreferrer');
      setStatus('success');
    }, 800);
  };

  if (status === 'success') {
    return (
      <div className={styles.modalOverlay} onClick={closeBookingForm}>
        <div className={`${styles.modal} ${styles.successModal}`} onClick={e => e.stopPropagation()}>
          <div className={styles.successIcon}>✓</div>
          <h3 className={styles.modalTitle}>Request Sent</h3>
          <p className={styles.successText}>We've opened WhatsApp to finalize your booking. Talk soon!</p>
          <button onClick={closeBookingForm} className={styles.submitButton}>Finish</button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.modalOverlay} onClick={closeBookingForm}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div>
            <h2 className={styles.modalTitle}>Book Appointment</h2>
            <p className={styles.modalSubtitle}>Secure your spot in seconds.</p>
          </div>
          <button className={styles.closeIconButton} onClick={closeBookingForm}>×</button>
        </div>

        <form className={styles.bookingForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Full Name</label>
            <input type="text" name="name" required placeholder="John Doe" onChange={handleChange} className={styles.formInput} />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Phone Number</label>
            <input type="tel" name="phone" required placeholder="+212 ..." onChange={handleChange} className={styles.formInput} />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Service</label>
            <select name="service" value={formData.service} required onChange={handleChange} className={styles.formSelect}>
              <option value="">Choose a service</option>
              {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Date</label>
              <input type="date" name="date" required min={new Date().toISOString().split('T')[0]} onChange={handleChange} className={styles.formInput} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Time</label>
              <select name="time" required onChange={handleChange} className={styles.formSelect}>
                <option value="">Select</option>
                {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>

          <button type="submit" className={styles.submitButton} disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Connecting...' : 'Confirm via WhatsApp'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;