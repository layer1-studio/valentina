import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="about">
            <div className="footer-container">
                <div className="footer-col">
                    <h3>Valentina</h3>
                    <p>Exquisite jewellery for those who appreciate the finer things in life.</p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                    </div>
                </div>
                <div className="footer-col">
                    <h4>Explore</h4>
                    <ul>
                        <li><Link to="/collections">Shop</Link></li>
                        <li><Link to="/collections">New Arrivals</Link></li>
                        <li><Link to="/collections">Gifts</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Support</h4>
                    <ul>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/support">Shipping & Returns</Link></li>
                        <li><Link to="/support">Size Guide</Link></li>
                        <li><Link to="/support">Care Instructions</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Visit Us</h4>
                    <p>45 Galle Road,<br />Colombo 03, Sri Lanka</p>
                    <p>+94 11 234 5678</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Valentina Jewellers. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
