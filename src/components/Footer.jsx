import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer section">
            <div className="container grid-3">
                <div className="footer-brand">
                    <h3 className="logo">SAPPHIRE <span>SALON</span></h3>
                    <p>Where Elegance Meets Expertise. Premium grooming and beauty services in the heart of Patan.</p>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/book">Book Now</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Visit Us</h4>
                    <p><MapPin size={16} /> Krushnam Skyline, G-29/30/21, Patan - Chanasma Highway Rd, Patan, Gujarat 384266</p>
                    <p><Phone size={16} /> +91 [Insert Phone]</p>
                    <div className="social-icons">
                        <Instagram size={20} />
                        <Facebook size={20} />
                    </div>
                </div>
            </div>
            <div className="footer-bottom container">
                <p>&copy; {new Date().getFullYear()} Sapphire Salon. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
