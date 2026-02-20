import React from 'react';

const About = () => {
    return (
        <section id="about-brand" className="about-brand">
            <div className="container">
                <div className="about-grid">
                    <div className="about-image">
                        <img src="/valentina/images/058A0413-Edit.jpg" alt="Our Atelier" />
                    </div>
                    <div className="about-text">
                        <span className="subtitle">Our Story</span>
                        <h2>A Legacy of Elegance</h2>
                        <p>Founded with a passion for exquisite craftsmanship and timeless design, Valentina has been creating heirloom-quality jewellery for over three decades.</p>
                        <p>Our journey began in a small atelier in Colombo, where every stone was selected for its unique soul and every setting was crafted by hand. Today, we continue this tradition, blending traditional techniques with modern innovation to create pieces that tell your unique story.</p>
                        <div className="about-stats">
                            <div className="stat">
                                <span>30+</span>
                                <p>Years of Heritage</p>
                            </div>
                            <div className="stat">
                                <span>15k+</span>
                                <p>Happy Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
