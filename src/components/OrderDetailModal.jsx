import React from 'react';
import { useStore } from '../context/StoreContext';

const OrderDetailModal = () => {
    const {
        selectedOrder,
        isOrderModalOpen,
        setIsOrderModalOpen
    } = useStore();

    if (!isOrderModalOpen || !selectedOrder) return null;

    return (
        <div className="modal-overlay" onClick={() => setIsOrderModalOpen(false)}>
            <div className="order-detail-modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-modal" onClick={() => setIsOrderModalOpen(false)}>
                    <i className="fas fa-times"></i>
                </button>

                <div className="order-modal-inner">
                    <div className="order-modal-header">
                        <h2>Order Details</h2>
                        <span className="order-id">#{selectedOrder.id}</span>
                        <p className="order-date">Placed on {selectedOrder.date}</p>
                    </div>

                    <div className="order-items-list">
                        {selectedOrder.items.map((item, index) => (
                            <div key={index} className="order-item-row">
                                <div className="order-item-thumb">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="order-item-info">
                                    <h4>{item.name}</h4>
                                    <p>{item.quantity} x {item.price}</p>
                                </div>
                                <div className="order-item-subtotal">
                                    {((parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0) * item.quantity).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="order-modal-footer">
                        <div className="order-status-info">
                            <span>Status:</span>
                            <span className="status-badge">{selectedOrder.status}</span>
                        </div>
                        <div className="order-summary-total">
                            <span>Total Amount:</span>
                            <span className="total-price">${selectedOrder.total.toFixed(2)}</span>
                        </div>
                    </div>

                    <div className="order-help">
                        <p>Need help with this order? <a href="/valentina/support">Contact Client Services</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetailModal;
