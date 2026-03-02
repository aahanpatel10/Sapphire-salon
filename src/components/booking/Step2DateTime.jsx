import React from 'react';
import { useBooking } from '../../context/BookingContext';

const timeSlots = [
    "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM"
];

const Step2DateTime = ({ onNext, onPrev }) => {
    const { bookingData, updateBooking } = useBooking();

    const handleDateChange = (e) => {
        updateBooking({ date: e.target.value });
    };

    const handleTimeSelect = (time) => {
        updateBooking({ time });
    };

    const canProceed = bookingData.date && bookingData.time;

    return (
        <div className="booking-step">
            <h3>Select Date & Time</h3>
            <div className="date-picker-wrapper">
                <label>Pick a Date</label>
                <input
                    type="date"
                    value={bookingData.date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={handleDateChange}
                    className="date-input"
                />
            </div>

            <div className="time-slots-wrapper">
                <label>Available Slots (IST)</label>
                <div className="time-grid">
                    {timeSlots.map(t => (
                        <button
                            key={t}
                            className={`time-chip ${bookingData.time === t ? 'selected' : ''}`}
                            onClick={() => handleTimeSelect(t)}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </div>

            <div className="step-actions">
                <button className="btn-premium outline" onClick={onPrev}>Back</button>
                <button
                    className="btn-premium"
                    disabled={!canProceed}
                    onClick={onNext}
                >
                    Next Step
                </button>
            </div>
        </div>
    );
};

export default Step2DateTime;
