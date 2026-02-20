import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
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

        const animatedElements = document.querySelectorAll('.page-header, .info-block, .contact-form-wrapper, .footer-col');
        animatedElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="contact-page">
            <Navbar />
            <header className="page-header contact-header">
                <div className="header-content">
                    <h1>Contact Us</h1>
                    <p>Refined assistance for your unique needs across the Indian Ocean.</p>
                </div>
            </header>

            <section className="contact-section">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <div className="info-block">
                                <h3>Our Flagship Studio</h3>
                                <p>45 Galle Road,<br />Colombo 03, Sri Lanka</p>
                            </div>
                            <div className="info-block">
                                <h3>Client Services</h3>
                                <p>T: +94 11 234 5678</p>
                                <p>E: hello@valentina.lk</p>
                            </div>
                            <div className="info-block">
                                <h3>Hours</h3>
                                <p>Monday - Friday: 9am - 6pm</p>
                                <p>Saturday: 10am - 4pm</p>
                            </div>
                        </div>

                        <div className="contact-form-wrapper">
                            <h3>General Inquiry</h3>
                            <form className="contact-form">
                                <div className="form-group">
                                    <input type="text" placeholder="Full Name" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" placeholder="Email Address" required />
                                </div>
                                <div className="form-group">
                                    <input type="tel" placeholder="Phone Number" required />
                                </div>
                                <div className="form-group">
                                    <select required>
                                        <option value="">Subject of Inquiry</option>
                                        <option value="bespoke">Bespoke Design</option>
                                        <option value="appointment">Showroom Appointment</option>
                                        <option value="collection">Collection Inquiry</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <textarea placeholder="Tell us more about your requirements..." rows="5" required></textarea>
                                </div>
                                <button type="submit" className="btn primary-btn">Submit Inquiry</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Contact;
