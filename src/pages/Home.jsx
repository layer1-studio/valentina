import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import Hero from '../components/Hero';
import Collections from '../components/Collections';
import Bespoke from '../components/Bespoke';
import Featured from '../components/Featured';
import About from '../components/About';
import Newsletter from '../components/Newsletter';

const Home = () => {
    useEffect(() => {
        // Handle hash scroll if present
        if (window.location.hash) {
            const id = window.location.hash.substring(1);
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }

        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll('.section-header, .collection-item, .bespoke-text, .product-card, .footer-col, .about-text, .about-image');
        animatedElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Loader />
            <Navbar />
            <Hero />
            <Collections />
            <Bespoke />
            <Featured />
            <About />
            <Newsletter />
            <Footer />
        </>
    );
};

export default Home;
