import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

const Navbar = () => {
    const { cartCount, wishlist, setIsCartOpen, setIsSearchOpen, setIsWishlistOpen } = useStore();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isSubPage = location.pathname !== '/valentina/' && location.pathname !== '/valentina';
    const wishlistCount = wishlist.length;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav id="navbar" className={(scrolled || isSubPage) ? 'scrolled' : ''}>
            <div className="nav-container">
                <div className="logo">
                    <Link to="/" onClick={closeMobileMenu}>Valentina</Link>
                </div>
                <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                    <li>
                        <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li>
                        <Link to="/collections" className={location.pathname === '/collections' ? 'active' : ''} onClick={closeMobileMenu}>Collections</Link>
                    </li>
                    <li>
                        <Link to="/#about-brand" onClick={closeMobileMenu}>Our Story</Link>
                    </li>
                    <li>
                        <Link to="/collections" className={location.pathname === '/collections' ? 'active' : ''} onClick={closeMobileMenu}>Shop</Link>
                    </li>
                </ul>
                <div className="nav-icons">
                    <a href="#" onClick={(e) => { e.preventDefault(); setIsSearchOpen(true); }}><i className="fas fa-search"></i></a>
                    <Link to="/account"><i className="far fa-user"></i></Link>
                    <a href="#" className="wishlist-icon" onClick={(e) => { e.preventDefault(); setIsWishlistOpen(true); }}>
                        <i className="far fa-heart"></i>
                        {wishlistCount > 0 && <span className="cart-badge">{wishlistCount}</span>}
                    </a>
                    <a href="#" className="cart-icon" onClick={(e) => { e.preventDefault(); setIsCartOpen(true); }}>
                        <i className="fas fa-shopping-bag"></i>
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </a>
                </div>
                <div className={`hamburger ${mobileMenuOpen ? 'toggle' : ''}`} onClick={toggleMobileMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
