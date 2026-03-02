import React from 'react';
import Hero from '../components/Hero';
import ServicesOverview from '../components/ServicesOverview';
import WhyChooseUs from '../components/WhyChooseUs';
import GalleryPreview from '../components/GalleryPreview';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <ServicesOverview />
            <WhyChooseUs />
            <GalleryPreview />
            <Testimonials />
        </div>
    );
};

export default Home;
