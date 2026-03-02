import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const isBookPath = location.pathname === '/book';

    return (
        <nav className={`navbar ${scrolled || isBookPath ? 'scrolled solid-bg' : ''}`}>
            <div className="container nav-content">
                <Link to="/" className="logo">
                    SAPPHIRE <span>SALON</span>
                </Link>

                {/* Desktop Menu */}
                <ul className="nav-links desktop">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>
                        <Link to="/book" className="btn-premium nav-btn">
                            Book Now
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu Toggle */}
                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Drawer */}
            <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
                <ul className="mobile-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>
                        <Link to="/book">
                            Book Appointment
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
