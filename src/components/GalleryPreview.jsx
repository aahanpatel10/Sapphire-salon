import React from 'react';

const GalleryPreview = () => {
    return (
        <section className="gallery-preview section">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">Artistry in Motion</span>
                    <h2 className="section-title">Transformation Gallery</h2>
                    <p>Witness the master craftsmanship of our expert stylists and artists.</p>
                </div>

                <div className="gallery-grid">
                    <div className="gallery-item large">
                        <img src="/assets/gallery_1.png" alt="Hair Transformation" />
                        <div className="gallery-overlay">
                            <span>Hair Transformation</span>
                        </div>
                    </div>
                    <div className="gallery-item">
                        <img src="/assets/gallery_2.png" alt="Bridal Artistry" />
                        <div className="gallery-overlay">
                            <span>Bridal Artistry</span>
                        </div>
                    </div>
                    <div className="gallery-item">
                        <img src="/assets/service_skincare.png" alt="Skincare Glow" />
                        <div className="gallery-overlay">
                            <span>Luxury Skincare</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GalleryPreview;
