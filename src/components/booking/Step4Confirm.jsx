import React, { useState } from 'react';
import { useBooking } from '../../context/BookingContext';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { Check } from 'lucide-react';

const Step4Confirm = ({ onPrev }) => {
    const { bookingData } = useBooking();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleConfirm = async () => {
        setLoading(true);
        try {
            await addDoc(collection(db, 'bookings'), {
                ...bookingData,
                createdAt: new Date()
            });
            setSuccess(true);
        } catch (error) {
            console.error("Booking error: ", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="booking-success">
                <div className="success-icon"><Check size={48} /></div>
                <h3>Booking Requested!</h3>
                <p>Your appointment request for <strong>{bookingData.service}</strong> on <strong>{bookingData.date}</strong> at <strong>{bookingData.time}</strong> has been sent.</p>
                <p>We will contact you shortly on <strong>{bookingData.phone}</strong> for confirmation.</p>
                <a href="/" className="btn-premium">Back to Home</a>
            </div>
        );
    }

    return (
        <div className="booking-step">
            <h3>Review Your Appointment</h3>
            <div className="confirmation-details">
                <div className="detail-row">
                    <span>Service:</span>
                    <strong>{bookingData.service}</strong>
                </div>
                <div className="detail-row">
                    <span>Date:</span>
                    <strong>{bookingData.date}</strong>
                </div>
                <div className="detail-row">
                    <span>Time:</span>
                    <strong>{bookingData.time}</strong>
                </div>
                <div className="detail-row">
                    <span>Name:</span>
                    <strong>{bookingData.name}</strong>
                </div>
                <div className="detail-row">
                    <span>WhatsApp:</span>
                    <strong>{bookingData.phone}</strong>
                </div>
            </div>

            <div className="step-actions">
                <button className="btn-premium outline" onClick={onPrev} disabled={loading}>Back</button>
                <button
                    className="btn-premium"
                    onClick={handleConfirm}
                    disabled={loading}
                >
                    {loading ? 'Processing...' : 'Request Appointment'}
                </button>
            </div>
        </div>
    );
};

export default Step4Confirm;
