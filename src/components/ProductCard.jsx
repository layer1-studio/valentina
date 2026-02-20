import React from 'react';
import { useStore } from '../context/StoreContext';

const ProductCard = ({ id, name, price, image }) => {
    const { addToCart, toggleWishlist, wishlist, setIsProductModalOpen, setSelectedProduct } = useStore();

    const isWishlisted = wishlist.some(item => item.id === id);

    const handleProductClick = () => {
        setSelectedProduct({ id, name, price, image });
        setIsProductModalOpen(true);
    };

    return (
        <div className="product-card">
            <div className="product-img">
                <div
                    className="wishlist-btn"
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleWishlist({ id, name, price, image }); }}
                    title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                >
                    <i className={isWishlisted ? "fas fa-heart" : "far fa-heart"}></i>
                </div>
                <img src={image} alt={name} onClick={handleProductClick} style={{ cursor: 'pointer' }} />
                <div className="overlay">
                    <button onClick={(e) => { e.stopPropagation(); addToCart({ id, name, price, image }); }}>Add to Bag</button>
                </div>
            </div>
            <div className="product-info" onClick={handleProductClick} style={{ cursor: 'pointer' }}>
                <h4>{name}</h4>
                <p>{price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
