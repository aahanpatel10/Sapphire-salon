import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const useBooking = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
    const [bookingData, setBookingData] = useState({
        service: '',
        date: '',
        time: '',
        name: '',
        phone: '',
        status: 'pending',
        createdAt: new Date()
    });

    const updateBooking = (newData) => {
        setBookingData(prev => ({ ...prev, ...newData }));
    };

    const resetBooking = () => {
        setBookingData({
            service: '',
            date: '',
            time: '',
            name: '',
            phone: '',
            status: 'pending',
            createdAt: new Date()
        });
    };

    return (
        <BookingContext.Provider value={{ bookingData, updateBooking, resetBooking }}>
            {children}
        </BookingContext.Provider>
    );
};
