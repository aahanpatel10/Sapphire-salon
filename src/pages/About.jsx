import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about-page">
            <section className="page-header secondary" style={{ backgroundImage: "url('/assets/sapphire_salon_hero.png')" }}>
                <div className="container">
                    <h1>Our Legacy.</h1>
                    <p>The story of passion, precision, and the pursuit of perfection.</p>
                </div>
            </section>

            <section className="about-story section">
                <div className="container grid-2 align-center">
                    <div className="about-image">
                        <img src="/assets/sapphire_salon_hero.png" alt="Salon Legacy" className="premium-img" />
                    </div>
                    <div className="about-text">
                        <span className="section-subtitle">Since 2024</span>
                        <h2 className="section-title">Crafting Confidence with Artistry.</h2>
                        <p>
                            Sapphire Salon was founded with a single vision: to redefine beauty standards in Patan. We believe that luxury is not just a price point, but an experience rooted in expertise and premium care.
                        </p>
                        <p>
                            Our Master Stylists are dedicated to providing unisex grooming services that blend international trends with personalized artistry. Every client who walks through our doors is treated to a sanctuary of calm and sophistication.
                        </p>
                        <div className="about-stats">
                            <div className="stat-small">
                                <strong>Since</strong>
                                <span>2024</span>
                            </div>
                            <div className="stat-small">
                                <strong>15+</strong>
                                <span>Master Artists</span>
                            </div>
                        </div>
                        <Link to="/services" className="btn-premium">Explore Our Craft</Link>
                    </div>
                </div>
            </section>

            <section className="mission-values section">
                <div className="container grid-3">
                    <div className="value-card">
                        <h3>Vision</h3>
                        <p>To be the premier destination for holistic beauty and luxury grooming in the region.</p>
                    </div>
                    <div className="value-card">
                        <h3>Mission</h3>
                        <p>To reveal every individual's most sophisticated self through passion, precision, and premium care.</p>
                    </div>
                    <div className="value-card">
                        <h3>Values</h3>
                        <p>Excellence, Hygiene, Innovation, and Personalized Attention to Detail.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
