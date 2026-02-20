import React, { useState } from 'react';
import CollectionDetailModal from './CollectionDetailModal';

const Collections = () => {
    const [activeCollection, setActiveCollection] = useState(null);

    return (
        <>
            <section id="collections" className="collections">
                <div className="section-header">
                    <span className="subtitle">Discover</span>
                    <h2>Our Collections</h2>
                    <div className="line"></div>
                </div>

                <div className="collection-grid">
                    <div className="collection-item large">
                        <div className="img-container">
                            <img src={`${import.meta.env.BASE_URL}images/058A0430.jpg`} alt="Diamond Necklace" />
                        </div>
                        <div className="content">
                            <h3>Eternal Diamonds</h3>
                            <button className="link-btn" onClick={() => setActiveCollection('Eternal Diamonds')}>View Collection</button>
                        </div>
                    </div>
                    <div className="collection-item">
                        <div className="img-container">
                            <img src={`${import.meta.env.BASE_URL}images/058A0404.jpg`} alt="Gold Rings" />
                        </div>
                        <div className="content">
                            <h3>Royal Gold</h3>
                            <button className="link-btn" onClick={() => setActiveCollection('Royal Gold')}>View Collection</button>
                        </div>
                    </div>
                    <div className="collection-item">
                        <div className="img-container">
                            <img src={`${import.meta.env.BASE_URL}images/058A0638-Edit.jpg`} alt="Gemstone Earrings" />
                        </div>
                        <div className="content">
                            <h3>Vivid Gemstones</h3>
                            <button className="link-btn" onClick={() => setActiveCollection('Vivid Gemstones')}>View Collection</button>
                        </div>
                    </div>
                    <div className="collection-item">
                        <div className="img-container">
                            <img src={`${import.meta.env.BASE_URL}images/058A0642-Edit.jpg`} alt="Bridal Set" />
                        </div>
                        <div className="content">
                            <h3>Bridal Series</h3>
                            <button className="link-btn" onClick={() => setActiveCollection('Bridal Series')}>View Collection</button>
                        </div>
                    </div>
                </div>
            </section>

            <CollectionDetailModal
                collection={activeCollection}
                onClose={() => setActiveCollection(null)}
            />
        </>
    );
};

export default Collections;

