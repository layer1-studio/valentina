import React from 'react';
import { useStore } from '../context/StoreContext';

const WishlistOverlay = () => {
    const { wishlist, toggleWishlist, addToCart, isWishlistOpen, setIsWishlistOpen } = useStore();

    if (!isWishlistOpen) return null;

    return (
        <div className="cart-overlay" onClick={() => setIsWishlistOpen(false)}>
            <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
                <div className="cart-header">
                    <h2>Your Collection ({wishlist.length})</h2>
                    <button className="close-cart" onClick={() => setIsWishlistOpen(false)}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <div className="cart-content">
                    {wishlist.length === 0 ? (
                        <div className="empty-cart">
                            <p>Your collection is currently empty.</p>
                            <button className="btn secondary-btn" onClick={() => setIsWishlistOpen(false)}>
                                Back to Boutique
                            </button>
                        </div>
                    ) : (
                        <div className="cart-items">
                            {wishlist.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <div className="cart-item-img">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className="cart-item-info">
                                        <h4>{item.name}</h4>
                                        <p className="price">{item.price}</p>
                                        <div className="item-actions">
                                            <button
                                                className="btn primary-btn small-btn"
                                                onClick={() => { addToCart(item); toggleWishlist(item); }}
                                            >
                                                Add to Bag
                                            </button>
                                            <button className="remove-item" onClick={() => toggleWishlist(item)}>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WishlistOverlay;
