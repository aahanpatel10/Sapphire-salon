import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
    {
        name: "Priya Sharma",
        role: "Regular Client",
        text: "The best salon experience in Patan. The attention to detail and the premium atmosphere make every visit feel like a retreat.",
        rating: 5
    },
    {
        name: "Anjali Patel",
        role: "Bridal Client",
        text: "Sapphire Salon made my wedding day perfect. The bridal makeup was elegant and exactly what I dreamed of. Highly recommend!",
        rating: 5
    },
    {
        name: "Rajesh Kumar",
        role: "Business Professional",
        text: "Finally, a salon that understands modern grooming for men. Professional, clean, and top-notch service.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials section">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">Voices of Excellence</span>
                    <h2 className="section-title">What Our Clients Say</h2>
                    <p>Real stories from over 500+ satisfied clients who trust Sapphire for their beauty needs.</p>
                </div>

                <div className="grid-3">
                    {reviews.map((rev, i) => (
                        <div key={i} className="testimonial-card">
                            <div className="rating">
                                {[...Array(rev.rating)].map((_, idx) => (
                                    <Star key={idx} size={16} fill="var(--secondary)" color="var(--secondary)" />
                                ))}
                            </div>
                            <p className="testimonial-text">"{rev.text}"</p>
                            <div className="testimonial-user">
                                <h4>{rev.name}</h4>
                                <span>{rev.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
