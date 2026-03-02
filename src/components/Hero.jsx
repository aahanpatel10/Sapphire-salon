import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="hero-subtitle">Premium Customer Experience</span>
                    <h1 className="hero-title">Where Elegance <br /><span>Meets Expertise.</span></h1>
                    <p className="hero-description">
                        Experience the ultimate luxury in Patan. Our master stylists blend modern techniques with premium care to reveal your most sophisticated self.
                    </p>
                    <div className="hero-actions">
                        <Link to="/book" className="btn-premium">Book Appointment</Link>
                        <Link to="/services" className="btn-premium outline">Our Services</Link>
                    </div>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-num">500+</span>
                            <span className="stat-label">Happy Clients</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-num">Since</span>
                            <span className="stat-label">2024</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
