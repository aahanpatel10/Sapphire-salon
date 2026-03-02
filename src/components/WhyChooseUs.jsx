import React from 'react';
import { Shield, Clock, Award, CheckCircle } from 'lucide-react';

const factors = [
    {
        icon: <Shield size={32} />,
        title: "Hygiene Focused",
        description: "We maintain the highest standards of cleanliness and sterilization for your safety."
    },
    {
        icon: <Award size={32} />,
        title: "Expert Stylists",
        description: "Our team consists of certified professionals with years of city-level experience."
    },
    {
        icon: <Clock size={32} />,
        title: "Premium Experience",
        description: "From the moment you walk in, enjoy a personalized, no-rush luxury treatment."
    }
];

const WhyChooseUs = () => {
    return (
        <section className="why-choose-us section">
            <div className="container">
                <div className="grid-2 align-center">
                    <div className="trust-content">
                        <span className="section-subtitle">The Sapphire Standard</span>
                        <h2 className="section-title">Why Patan Refines Its Style With Us</h2>
                        <p className="trust-main-desc">
                            We don't just provide services; we craft experiences. Sapphire Salon stands as a beacon of luxury, bringing world-class beauty standards to your doorstep.
                        </p>
                        <ul className="trust-list">
                            <li><CheckCircle size={20} /> Premium Global Products only</li>
                            <li><CheckCircle size={20} /> Personalized Style Consultations</li>
                            <li><CheckCircle size={20} /> State-of-the-Art Equipment</li>
                        </ul>
                    </div>
                    <div className="trust-grid grid-2">
                        {factors.map((f, i) => (
                            <div key={i} className="trust-card">
                                <div className="trust-icon">{f.icon}</div>
                                <h4>{f.title}</h4>
                                <p>{f.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
