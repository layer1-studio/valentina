import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';

const CartDrawer = () => {
    const {
        cart,
        removeFromCart,
        updateQuantity,
        clearCart,
        addOrder,
        cartTotal,
        isCartOpen,
        setIsCartOpen
    } = useStore();

    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const [orderComplete, setOrderComplete] = useState(false);
    const [currentOrderNumber, setCurrentOrderNumber] = useState('');

    const handleCheckout = () => {
        setIsCheckingOut(true);
        const orderId = `VLTN-${Math.floor(1000 + Math.random() * 9000)}`;
        setCurrentOrderNumber(orderId);

        // Simulate API call
        setTimeout(() => {
            const newOrder = {
                id: orderId,
                date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
                items: [...cart],
                total: cartTotal,
                status: 'Processing'
            };

            addOrder(newOrder);
            setIsCheckingOut(false);
            setOrderComplete(true);

            setTimeout(() => {
                clearCart();
                setOrderComplete(false);
                setIsCartOpen(false);
            }, 4000);
        }, 1500);
    };

    if (!isCartOpen) return null;

    if (orderComplete) {
        return (
            <div className="cart-overlay">
                <div className="cart-drawer checkout-success">
                    <div className="success-content">
                        <div className="check-icon">
                            <i className="fas fa-check-circle"></i>
                        </div>
                        <h2>Order Confirmed</h2>
                        <p>Thank you for your purchase. A confirmation email has been sent to your inbox.</p>
                        <span className="order-number">Order #{currentOrderNumber}</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-overlay" onClick={() => setIsCartOpen(false)}>
            <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
                <div className="cart-header">
                    <h2>Shopping Bag ({cart.length})</h2>
                    <button className="close-cart" onClick={() => setIsCartOpen(false)}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <div className="cart-items">
                    {cart.length === 0 ? (
                        <div className="empty-cart">
                            <p>Your bag is empty.</p>
                            <button className="btn primary-btn" onClick={() => setIsCartOpen(false)}>
                                Continue Shopping
                            </button>
                        </div>
                    ) : (
                        cart.map(item => (
                            <div key={item.id} className="cart-item">
                                <div className="cart-item-img">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="cart-item-info">
                                    <h4>{item.name}</h4>
                                    <p className="price">{item.price}</p>
                                    <div className="quantity-controls">
                                        <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                    </div>
                                    <button className="remove-item" onClick={() => removeFromCart(item.id)}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="cart-footer">
                        <div className="total">
                            <span>Subtotal</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <button
                            className={`btn primary-btn checkout-btn ${isCheckingOut ? 'loading' : ''}`}
                            onClick={handleCheckout}
                            disabled={isCheckingOut}
                        >
                            {isCheckingOut ? 'Processing...' : 'Checkout'}
                        </button>
                        <p className="shipping-note">Taxes and shipping calculated at checkout</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartDrawer;
