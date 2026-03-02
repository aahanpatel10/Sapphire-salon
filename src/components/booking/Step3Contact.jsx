import React from 'react';
import { useBooking } from '../../context/BookingContext';

const Step3Contact = ({ onNext, onPrev }) => {
    const { bookingData, updateBooking } = useBooking();

    const handleChange = (e) => {
        updateBooking({ [e.target.name]: e.target.value });
    };

    const canProceed = bookingData.name && bookingData.phone.length >= 10;

    return (
        <div className="booking-step">
            <h3>Your Information</h3>
            <div className="input-group">
                <label>Full Name</label>
                <input
                    type="text"
                    name="name"
                    value={bookingData.name}
                    placeholder="Enter your name"
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="input-group">
                <label>WhatsApp Number</label>
                <input
                    type="tel"
                    name="phone"
                    value={bookingData.phone}
                    placeholder="Enter your 10-digit number"
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="step-actions">
                <button className="btn-premium outline" onClick={onPrev}>Back</button>
                <button
                    className="btn-premium"
                    disabled={!canProceed}
                    onClick={onNext}
                >
                    Review & Confirm
                </button>
            </div>
        </div>
    );
};

export default Step3Contact;
