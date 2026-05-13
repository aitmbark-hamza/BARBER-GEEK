import { useState } from 'react';
import styles from './BookingForm.module.css';

/** International digits only (no +); same default as Contact wa.me link */
const getWhatsAppBusinessDigits = () =>
  String(import.meta.env.VITE_WHATSAPP_BUSINESS_NUMBER || '212663838127').replace(/\D/g, '');

const buildWhatsAppBookingText = ({ name, phone, service, date, time }) => {
  let dateLine = date;
  if (date) {
    const d = new Date(`${date}T12:00:00`);
    if (!Number.isNaN(d.getTime())) {
      dateLine = d.toLocaleDateString(undefined, {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    }
  }
  return [
    'Hello! I would like to book an appointment.',
    '',
    'Booking details:',
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Service: ${service}`,
    `Date: ${dateLine}`,
    `Time: ${time}`
  ].join('\n');
};

const BookingForm = ({ closeBookingForm }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const services = [
    'Classic Fade',
    'Beard Trim & Shape',
    'Hot Towel Shave',
    'Modern Cut',
    "Kid's Cut",
    'Executive Package'
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
    '5:00 PM', '5:30 PM', '6:00 PM'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    const digits = getWhatsAppBusinessDigits();
    if (!digits) {
      setError('WhatsApp number is not configured.');
      return;
    }

    setIsSubmitting(true);
    const text = buildWhatsAppBookingText(formData);
    const url = `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;

    const opened = window.open(url, '_blank', 'noopener,noreferrer');
    if (!opened) {
      window.location.href = url;
    }

    setIsSubmitted(true);
    setIsSubmitting(false);

    setTimeout(() => {
      handleClose();
    }, 3000);
  };

  const handleClose = () => {
    if (!isSubmitting) {
      closeBookingForm();
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      service: '',
      date: '',
      time: ''
    });
    setIsSubmitted(false);
    setError(null);
  };

  if (isSubmitted) {
    return (
      <div className={styles.modalOverlay}>
        <div className={`${styles.modal} ${styles.successModal}`}>
          <div className={styles.successContent}>
            <div className={styles.successIcon}>✅</div>
            <h3 className={styles.successTitle}>Continue in WhatsApp</h3>
            <p className={styles.successText}>
              WhatsApp should have opened with your details filled in. Send the message there to confirm your request. If nothing opened, allow pop-ups for this site or try again.
            </p>
            <button 
              onClick={handleClose}
              className={`${styles.closeButton} btn btn-primary`}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Book Your Appointment</h2>
          <button 
            className={styles.closeButton}
            onClick={handleClose}
            disabled={isSubmitting}
          >
            ✕
          </button>
        </div>

        <form className={styles.bookingForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="name">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.formInput}
              required
              placeholder="Your full name"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="phone">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={styles.formInput}
              required
              placeholder="(555) 123-4567"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="service">
              Service *
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={styles.formSelect}
              required
            >
              <option value="">Select a service</option>
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div className={`${styles.formRow} grid grid-2`}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="date">
                Date *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className={styles.formInput}
                required
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="time">
                Time *
              </label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className={styles.formSelect}
                required
              >
                <option value="">Select time</option>
                {timeSlots.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {error && (
            <div className={styles.errorMessage}>
              {error}
            </div>
          )}

          <div className={styles.formActions}>
            <button
              type="button"
              onClick={handleClose}
              className={`${styles.cancelButton} btn btn-secondary`}
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`${styles.submitButton} btn btn-primary`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send via WhatsApp'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
