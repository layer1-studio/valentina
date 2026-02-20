import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Support = () => {
    const [activeTab, setActiveTab] = useState('shipping');

    useEffect(() => {
        window.scrollTo(0, 0);
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

        const animatedElements = document.querySelectorAll('.page-header, .support-tabs, .tab-pane, .footer-col');
        animatedElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const content = {
        shipping: {
            title: "Shipping & Returns",
            items: [
                { q: "What are your shipping rates?", a: "We offer complimentary express shipping on all orders over $500. For orders below this amount, a flat rate of $25 applies." },
                { q: "How long will delivery take?", a: "Express shipping typically takes 2-4 business days. Standard shipping takes 5-7 business days." },
                { q: "What is your return policy?", a: "We accept returns within 14 days of delivery for all items in original condition. Custom bespoke pieces are final sale." }
            ]
        },
        care: {
            title: "Care Instructions",
            items: [
                { q: "How should I clean my jewellery?", a: "Use a soft, lint-free cloth to gently wipe your pieces after each wear. Avoid harsh chemicals or ultrasonic cleaners for pearls and porous stones." },
                { q: "Where should I store my pieces?", a: "Store each piece individually in its original Valentina box or a soft pouch to prevent scratching." },
                { q: "When should I take off my jewellery?", a: "We recommend removing jewellery before swimming, showering, exercising, or applying lotions and perfumes." }
            ]
        },
        size: {
            title: "Size Guide",
            items: [
                { q: "How do I find my ring size?", a: "We recommend visiting a local jeweller for professional sizing. Alternatively, you can use our printable size guide available on request." },
                { q: "What are your standard necklace lengths?", a: "Our standard necklaces are 16, 18, and 20 inches. Custom lengths are available upon request." }
            ]
        }
    };

    return (
        <div className="support-page">
            <Navbar />
            <header className="page-header support-header">
                <div className="header-content">
                    <h1>Client Services</h1>
                    <p>How can we assist you today?</p>
                </div>
            </header>

            <section className="support-content">
                <div className="container">
                    <div className="support-tabs">
                        <button
                            className={activeTab === 'shipping' ? 'active' : ''}
                            onClick={() => setActiveTab('shipping')}
                        >
                            Shipping & Returns
                        </button>
                        <button
                            className={activeTab === 'care' ? 'active' : ''}
                            onClick={() => setActiveTab('care')}
                        >
                            Care Instructions
                        </button>
                        <button
                            className={activeTab === 'size' ? 'active' : ''}
                            onClick={() => setActiveTab('size')}
                        >
                            Size Guide
                        </button>
                    </div>

                    <div className="tab-pane">
                        <h2>{content[activeTab].title}</h2>
                        <div className="faq-list">
                            {content[activeTab].items.map((item, index) => (
                                <div key={index} className="faq-item">
                                    <h4>{item.q}</h4>
                                    <p>{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Support;
