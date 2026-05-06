import { useState } from 'react';
import styles from './BookingForm.module.css';

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
    setIsSubmitting(true);

    // Create WhatsApp message
    const message = `New Booking Request!%0A%0A` +
      `Name: ${formData.name}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Service: ${formData.service}%0A` +
      `Date: ${formData.date}%0A` +
      `Time: ${formData.time}%0A%0A` +
      `Please confirm this appointment.`;

    // Use environment variable for WhatsApp number
    const whatsappUrl = `https://wa.me/${process.env.REACT_APP_WHATSAPP_NUMBER}?text=${message}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');

    // Show success state
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
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
  };

  if (isSubmitted) {
    return (
      <div className={styles.modalOverlay}>
        <div className={`${styles.modal} ${styles.successModal}`}>
          <div className={styles.successContent}>
            <div className={styles.successIcon}>✅</div>
            <h3 className={styles.successTitle}>Booking Request Sent!</h3>
            <p className={styles.successText}>
              Your booking request has been sent via WhatsApp. We'll confirm your appointment shortly.
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
