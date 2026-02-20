import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useStore } from '../context/StoreContext';

const Account = () => {
    const { user, login, logout, orders, setIsOrderModalOpen, setSelectedOrder } = useStore();
    const [activeTab, setActiveTab] = useState('orders');

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

        const animatedElements = document.querySelectorAll('.page-header, .account-tabs, .tab-pane, .login-container, .footer-col');
        animatedElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    // Mock Login if no user
    if (!user) {
        return (
            <div className="account-page">
                <Navbar />
                <section className="login-section">
                    <div className="login-container">
                        <h2>Sign In</h2>
                        <form className="login-form" onSubmit={(e) => {
                            e.preventDefault();
                            login({ name: 'Rachel Cooray', email: e.target[0].value || 'test123@valentina.com' });
                        }}>
                            <div className="form-group">
                                <input type="email" placeholder="Email Address" required defaultValue="test123@valentina.com" />
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="Password" required defaultValue="password123" />
                            </div>
                            <button type="submit" className="btn primary-btn">Sign In</button>
                            <p className="form-note">Test Credentials: <strong>test@valentina.com</strong> / <strong>password123</strong></p>
                            <p className="form-note">Don't have an account? <a href="#">Create one</a></p>
                        </form>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }

    return (
        <div className="account-page">
            <Navbar />
            <header className="page-header account-header">
                <div className="header-content">
                    <h1>My Account</h1>
                    <p>Welcome back, {user.name}</p>
                </div>
            </header>

            <section className="account-content">
                <div className="container">
                    <div className="account-tabs">
                        <button className={activeTab === 'orders' ? 'active' : ''} onClick={() => setActiveTab('orders')}>Orders</button>
                        <button className={activeTab === 'profile' ? 'active' : ''} onClick={() => setActiveTab('profile')}>Profile</button>
                        <button onClick={logout}>Sign Out</button>
                    </div>

                    <div className="tab-pane">
                        {activeTab === 'orders' ? (
                            <div className="orders-list">
                                {orders && orders.length > 0 ? (
                                    <div className="orders-table-container">
                                        <table className="orders-table">
                                            <thead>
                                                <tr>
                                                    <th>Order ID</th>
                                                    <th>Date</th>
                                                    <th>Status</th>
                                                    <th>Total</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {orders.map(order => (
                                                    <tr key={order.id}>
                                                        <td>#{order.id}</td>
                                                        <td>{order.date}</td>
                                                        <td><span className="status-badge">{order.status}</span></td>
                                                        <td>${order.total.toFixed(2)}</td>
                                                        <td><button className="view-order" onClick={() => {
                                                            setSelectedOrder(order);
                                                            setIsOrderModalOpen(true);
                                                        }}>View</button></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    <div className="no-orders">
                                        <p>You haven't placed any orders yet.</p>
                                        <button className="btn secondary-btn">Start Shopping</button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="profile-details">
                                <div className="info-row">
                                    <span>Full Name:</span>
                                    <span>{user.name}</span>
                                </div>
                                <div className="info-row">
                                    <span>Email:</span>
                                    <span>{user.email}</span>
                                </div>
                                <button className="btn secondary-btn">Edit Profile</button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Account;
