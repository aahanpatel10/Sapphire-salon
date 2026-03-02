import React from 'react';
import { Scissors, Sparkles, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        icon: <Scissors size={32} />,
        title: "Master Hair Styling",
        description: "Signature cuts and styling tailored to your unique personality. Precision meeting art.",
        price: "From ₹500",
        image: "/assets/service_hair_styling.png"
    },
    {
        icon: <Sparkles size={32} />,
        title: "Luxury Skincare",
        description: "Revitalize your glow with our premium facial treatments using world-class products.",
        price: "From ₹1200",
        image: "/assets/service_skincare.png"
    },
    {
        icon: <Heart size={32} />,
        title: "Bridal Artistry",
        description: "Where elegance meets your most special day. Expert bridal makeup that inspires confidence.",
        price: "Custom Quote",
        image: "/assets/service_bridal_makeup.png"
    }
];

const ServicesOverview = () => {
    return (
        <section className="services-overview section">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">Excellence in Every Detail</span>
                    <h2 className="section-title">Our Signature Services</h2>
                    <p>We provide a wide range of premium grooming and beauty treatments designed for the modern individual.</p>
                </div>

                <div className="grid-3">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-image-wrapper">
                                <img src={service.image} alt={service.title} className="service-card-img" />
                            </div>
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <span className="service-price">{service.price}</span>
                        </div>
                    ))}
                </div>

                <div className="flex-center" style={{ marginTop: '50px' }}>
                    <Link to="/services" className="btn-premium outline">View All Services</Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;
