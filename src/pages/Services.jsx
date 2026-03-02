import React from 'react';
import { Link } from 'react-router-dom';

const serviceCategories = [
    {
        category: "Hair Artistry",
        services: [
            { name: "Signature Haircut & Style", price: "₹800+", duration: "60 MINS", description: "Expert consultation and precision cut." },
            { name: "Advanced Hair Coloring", price: "₹2500+", duration: "120 MINS", description: "Premium ammonia-free global colors." },
            { name: "Keratin Ritual", price: "₹4000+", duration: "180 MINS", description: "Ultimate silkiness and long-lasting shine." }
        ]
    },
    {
        category: "Skin & Spa",
        services: [
            { name: "Glow Radiance Facial", price: "₹1500+", duration: "45 MINS", description: "Deep hydration and immediate luminosity." },
            { name: "De-Tan Therapy", price: "₹800+", duration: "30 MINS", description: "Remove sun tan and restore natural glow." },
            { name: "Deep Conditioning Ritual", price: "₹1200+", duration: "45 MINS", description: "Intense nourishment for healthy, shiny hair." },
            { name: "Luxury Manicure / Pedicure", price: "₹1000+", duration: "60 MINS", description: "Complete restoration for hands and feet." }
        ]
    },
    {
        category: "Bridal & Special Occasions",
        services: [
            { name: "The Sapphire Bride", price: "Custom", duration: "240 MINS", description: "Comprehensive bridal transformation." },
            { name: "Airbrush Occasion Makeup", price: "₹3500+", duration: "90 MINS", description: "High-definition look for your special events." },
            { name: "Celebrity Occasion Styling", price: "₹1500+", duration: "60 MINS", description: "Perfect styling for any special occasion." },
            { name: "Pre-Bridal Glow Ritual", price: "₹2500+", duration: "120 MINS", description: "Essential skin prep for your big day." }
        ]
    }
];

const Services = () => {
    return (
        <div className="services-page">
            <section className="page-header" style={{ backgroundImage: "url('/assets/sapphire_salon_hero.png')" }}>
                <div className="container">
                    <h1>Sculpting Your <br /><span>Unique Elegance.</span></h1>
                    <p>Explore our curated menu of premium beauty and grooming rituals.</p>
                </div>
            </section>

            <section className="services-content section">
                <div className="container">
                    {serviceCategories.map((cat, idx) => (
                        <div key={idx} className="service-category-block">
                            <h2 className="category-title text-center">{cat.category}</h2>
                            <div className="service-items-list-v2">
                                {cat.services.map((s, sIdx) => (
                                    <div key={sIdx} className="service-row-v2">
                                        <div className="service-info-v2">
                                            <h3 className="s-name">{s.name}</h3>
                                            <p className="s-description">{s.description}</p>
                                        </div>
                                        <div className="s-pricing-v2">
                                            <span className="s-price">{s.price}</span>
                                            <span className="s-duration">{s.duration}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="cat-cta-center">
                                <Link to="/book" className="btn-v2">BOOK THIS CATEGORY</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="cta-banner section flex-center">
                <div className="container text-center">
                    <h2 className="section-title">Ready for Your Transformation?</h2>
                    <p>Secure your slot for the ultimate luxury experience in Patan.</p>
                    <Link to="/book" className="btn-premium">Book Appointment Now</Link>
                </div>
            </section>
        </div>
    );
};

export default Services;
