import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const collectionData = {
    'Eternal Diamonds': {
        subtitle: 'Timeless Brilliance',
        description: 'Our Eternal Diamonds collection is a testament to enduring elegance. Each piece is crafted with the finest conflict-free diamonds, hand-selected for their exceptional cut, clarity, and brilliance. These heirloom-quality creations are designed to be worn, loved, and passed down through generations.',
        image: `${import.meta.env.BASE_URL}images/058A0430.jpg`,
        highlights: [
            'Conflict-free diamonds, GIA certified',
            'Available in White Gold & Platinum settings',
            'Ring sizes 4-12, custom sizing available',
            'Complimentary engraving on select pieces',
        ],
        pieces: [
            { name: 'Solitaire Pendant', price: '$950.00', image: `${import.meta.env.BASE_URL}images/058A0409-Edit.jpg` },
            { name: 'Diamond Studs', price: '$2,200.00', image: `${import.meta.env.BASE_URL}images/058A0404.jpg` },
            { name: 'Sapphire Halo Ring', price: '$1,250.00', image: `${import.meta.env.BASE_URL}images/058A0402.jpg` },
        ],
        category: 'Necklaces',
    },
    'Royal Gold': {
        subtitle: 'Opulence Redefined',
        description: 'The Royal Gold collection draws inspiration from centuries of royal jewellery traditions. Our master artisans work exclusively with 18k and 22k gold, employing techniques passed down through hundreds of years of craftsmanship. Each piece is a wearable work of art that commands attention and exudes confidence.',
        image: `${import.meta.env.BASE_URL}images/058A0404.jpg`,
        highlights: [
            '18k & 22k gold, hallmarked and certified',
            'Hand-finished by master artisans in Colombo',
            'Yellow Gold, Rose Gold, and White Gold available',
            'Lifetime refinishing service included',
        ],
        pieces: [
            { name: 'Gold Link Bracelet', price: '$2,100.00', image: `${import.meta.env.BASE_URL}images/058A0661-Edit.jpg` },
            { name: 'Sterling Cuff', price: '$450.00', image: `${import.meta.env.BASE_URL}images/058A0658-Edit.jpg` },
            { name: 'Pearl Drop Necklace', price: '$890.00', image: `${import.meta.env.BASE_URL}images/058A0411-Edit.jpg` },
        ],
        category: 'Bracelets',
    },
    'Vivid Gemstones': {
        subtitle: 'Nature\'s Finest Colours',
        description: 'Celebrating the extraordinary beauty of the natural world, our Vivid Gemstones collection features rare rubies, sapphires, emeralds, and other exceptional stones. Sourced ethically from the finest mines across the globe, each gemstone is chosen for its depth of colour, luminosity, and character.',
        image: `${import.meta.env.BASE_URL}images/058A0638-Edit.jpg`,
        highlights: [
            'Ethically sourced coloured gemstones',
            'Includes sapphires, rubies, emeralds & more',
            'Each stone accompanied by a certificate of origin',
            'Bespoke colour combinations available on request',
        ],
        pieces: [
            { name: 'Emerald Drop Earrings', price: '$3,400.00', image: `${import.meta.env.BASE_URL}images/058A0417-Edit.jpg` },
            { name: 'Sapphire Halo Ring', price: '$1,250.00', image: `${import.meta.env.BASE_URL}images/058A0402.jpg` },
            { name: 'Vintage Rose Ring', price: '$1,800.00', image: `${import.meta.env.BASE_URL}images/058A0416-Edit.jpg` },
        ],
        category: 'Earrings',
    },
    'Bridal Series': {
        subtitle: 'For Your Most Precious Day',
        description: 'The Valentina Bridal Series is a curated suite of jewellery designed to complement the most important moment of your life. From the engagement ring to the wedding band, the earrings to the bracelet — every piece is chosen to work in perfect harmony, creating a look of effortless, radiant beauty on your wedding day.',
        image: `${import.meta.env.BASE_URL}images/058A0642-Edit.jpg`,
        highlights: [
            'Complete bridal suites and individual pieces',
            'Complimentary styling consultation in-boutique',
            'Rush service available for upcoming weddings',
            'Custom ring resizing within 6 months of purchase',
        ],
        pieces: [
            { name: 'Royal Bridal Set', price: '$5,600.00', image: `${import.meta.env.BASE_URL}images/058A0642-Edit.jpg` },
            { name: 'Diamond Studs', price: '$2,200.00', image: `${import.meta.env.BASE_URL}images/058A0404.jpg` },
            { name: 'Sterling Cuff', price: '$450.00', image: `${import.meta.env.BASE_URL}images/058A0658-Edit.jpg` },
        ],
        category: 'Bridal',
    },
};

const CollectionDetailModal = ({ collection, onClose }) => {
    const navigate = useNavigate();
    const data = collectionData[collection];

    useEffect(() => {
        if (collection) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [collection]);

    if (!collection || !data) return null;

    const handleShopCollection = () => {
        onClose();
        navigate('/collections');
    };

    return (
        <div className="collection-modal-overlay" onClick={onClose}>
            <div className="collection-modal" onClick={e => e.stopPropagation()}>
                <button className="collection-modal-close" onClick={onClose}>
                    <i className="fas fa-times"></i>
                </button>

                <div className="collection-modal-hero">
                    <img src={data.image} alt={collection} />
                    <div className="collection-modal-hero-overlay">
                        <span className="collection-modal-subtitle">{data.subtitle}</span>
                        <h2 className="collection-modal-title">{collection}</h2>
                    </div>
                </div>

                <div className="collection-modal-body">
                    <div className="collection-modal-description">
                        <p>{data.description}</p>
                    </div>

                    <div className="collection-modal-highlights">
                        <h4>Collection Highlights</h4>
                        <ul>
                            {data.highlights.map((h, i) => (
                                <li key={i}>
                                    <i className="fas fa-diamond"></i>
                                    <span>{h}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="collection-modal-pieces">
                        <h4>Featured Pieces</h4>
                        <div className="collection-modal-pieces-grid">
                            {data.pieces.map((piece, i) => (
                                <div key={i} className="collection-modal-piece">
                                    <div className="collection-modal-piece-img">
                                        <img src={piece.image} alt={piece.name} />
                                    </div>
                                    <p className="piece-name">{piece.name}</p>
                                    <p className="piece-price">{piece.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="collection-modal-actions">
                        <button className="btn-primary" onClick={handleShopCollection}>
                            Shop This Collection
                        </button>
                        <button className="btn-secondary" onClick={onClose}>
                            Continue Browsing
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollectionDetailModal;
