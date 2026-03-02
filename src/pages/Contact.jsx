import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
    const whatsappNumber = "910000000000"; // Placeholder
    const handleWhatsApp = () => {
        window.open(`https://wa.me/${whatsappNumber}?text=Hi Sapphire Salon, I'd like to book an appointment.`, '_blank');
    };

    return (
        <div className="contact-page">
            <section className="page-header secondary" style={{ backgroundImage: "url('/assets/sapphire_salon_hero.png')" }}>
                <div className="container">
                    <h1>Let's Connect.</h1>
                    <p>Visit us at our premium location in the heart of Patan.</p>
                </div>
            </section>

            <section className="contact-content section">
                <div className="container grid-2">
                    <div className="contact-info-panel">
                        <span className="section-subtitle">Get in Touch</span>
                        <h2 className="section-title">Visit Us.</h2>

                        <div className="contact-details">
                            <div className="contact-item">
                                <MapPin size={24} color="var(--secondary)" />
                                <div>
                                    <h4>Our Location</h4>
                                    <p>Krushnam Skyline, G-29/30/21, <br />Patan-Chanasma Highway, PATAN, Gujarat 384266</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <Phone size={24} color="var(--secondary)" />
                                <div>
                                    <h4>Call Us</h4>
                                    <p>+91 [Insert Phone]</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <Mail size={24} color="var(--secondary)" />
                                <div>
                                    <h4>Email Us</h4>
                                    <p>hello@sapphiresalon.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="business-hours">
                            <h4>Hours of Excellence</h4>
                            <p>Monday - Sunday: 10:00 AM - 08:30 PM</p>
                        </div>

                        <div className="contact-actions">
                            <button onClick={handleWhatsApp} className="btn-premium whatsapp-btn">
                                <MessageCircle size={20} /> Chat on WhatsApp
                            </button>
                            <a href="tel:+9100000000" className="btn-premium outline">Call Us</a>
                        </div>
                    </div>

                    <div className="contact-form-panel">
                        <div className="map-wrapper">
                            {/* Google Map Embed Placeholder */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.123456789!2d72.1210343!3d23.8356466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c7d87105d85ef%3A0x6b261ddb61cc7459!2sSapphire+The+Unisex+Salon!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
