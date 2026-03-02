import React from 'react';
import { useBooking } from '../../context/BookingContext';
import { Scissors, Sparkles, Heart, Zap } from 'lucide-react';

const services = [
    { id: 'hair', title: 'Master Hair Styling', icon: <Scissors /> },
    { id: 'skincare', title: 'Luxury Skincare', icon: <Sparkles /> },
    { id: 'bridal', title: 'Bridal Artistry', icon: <Heart /> },
    { id: 'other', title: 'Other Services', icon: <Zap /> }
];

const Step1Service = ({ onNext }) => {
    const { bookingData, updateBooking } = useBooking();

    const handleSelect = (service) => {
        updateBooking({ service });
        onNext();
    };

    return (
        <div className="booking-step">
            <h3>Select a Service</h3>
            <div className="service-selection-grid">
                {services.map(s => (
                    <button
                        key={s.id}
                        className={`service-select-card ${bookingData.service === s.title ? 'selected' : ''}`}
                        onClick={() => handleSelect(s.title)}
                    >
                        <div className="s-icon">{s.icon}</div>
                        <span>{s.title}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Step1Service;
