import React, { useState } from 'react';
import { useBooking, BookingProvider } from '../context/BookingContext';
import Step1Service from '../components/booking/Step1Service';
import Step2DateTime from '../components/booking/Step2DateTime';
import Step3Contact from '../components/booking/Step3Contact';
import Step4Confirm from '../components/booking/Step4Confirm';

const BookingFlow = () => {
    const [step, setStep] = useState(1);
    const { bookingData } = useBooking();

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    return (
        <div className="booking-container section">
            <div className="container mini-container">
                <div className="booking-progress">
                    {[1, 2, 3, 4].map(s => (
                        <div key={s} className={`progress-step ${step >= s ? 'active' : ''}`}>
                            {s}
                        </div>
                    ))}
                </div>

                <div className="booking-card">
                    {step === 1 && <Step1Service onNext={nextStep} />}
                    {step === 2 && <Step2DateTime onNext={nextStep} onPrev={prevStep} />}
                    {step === 3 && <Step3Contact onNext={nextStep} onPrev={prevStep} />}
                    {step === 4 && <Step4Confirm onPrev={prevStep} />}
                </div>
            </div>
        </div>
    );
};

const Booking = () => (
    <BookingProvider>
        <BookingFlow />
    </BookingProvider>
);

export default Booking;
