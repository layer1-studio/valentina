import React from 'react';
import { useStore } from '../context/StoreContext';

const ProductDetailModal = () => {
    const {
        selectedProduct,
        isProductModalOpen,
        setIsProductModalOpen,
        addToCart,
        toggleWishlist,
        wishlist
    } = useStore();

    if (!isProductModalOpen || !selectedProduct) return null;

    const isWishlisted = wishlist.some(item => item.id === selectedProduct.id);

    return (
        <div className="modal-overlay" onClick={() => setIsProductModalOpen(false)}>
            <div className="product-detail-modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-modal" onClick={() => setIsProductModalOpen(false)}>
                    <i className="fas fa-times"></i>
                </button>

                <div className="modal-inner">
                    <div className="product-gallery">
                        <img src={selectedProduct.image} alt={selectedProduct.name} />
                    </div>

                    <div className="product-info-detailed">
                        <span className="subtitle">{selectedProduct.category || "Exquisite Piece"}</span>
                        <h2>{selectedProduct.name}</h2>
                        <p className="modal-price">{selectedProduct.price}</p>

                        <div className="product-description">
                            <p>Handcrafted by our master artisans, this exceptional piece showcases the perfect harmony between timeless design and contemporary elegance.</p>
                            <ul>
                                <li>Materials: {selectedProduct.metal || "18k Premium Metal"}</li>
                                <li>Gemstone: {selectedProduct.gemstone || "Finest Quality Stones"}</li>
                                <li>Craftsmanship: Traditional Colombo Atelier techniques</li>
                                <li>Warranty: Lifetime Certification of Authenticity</li>
                            </ul>
                        </div>

                        <div className="modal-actions">
                            <button className="add-to-cart-btn" onClick={() => addToCart(selectedProduct)}>
                                Add to Bag
                            </button>
                            <button className="wishlist-btn-large" onClick={() => toggleWishlist(selectedProduct)}>
                                <i className={wishlist.some(item => item.id === selectedProduct.id) ? "fas fa-heart" : "far fa-heart"}></i>
                                {wishlist.some(item => item.id === selectedProduct.id) ? "Wishlisted" : "Add to Wishlist"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailModal;
