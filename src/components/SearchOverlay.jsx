import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import ProductCard from './ProductCard';

const SearchOverlay = () => {
    const { isSearchOpen, setIsSearchOpen } = useStore();
    const [query, setQuery] = useState('');

    // Mock search results
    const allProducts = [
        { id: 1, name: "Sapphire Halo Ring", price: "$1,250.00", image: "/valentina/images/058A0402.jpg" },
        { id: 2, name: "Pearl Drop Necklace", price: "$890.00", image: "/valentina/images/058A0411-Edit.jpg" },
        { id: 3, name: "Gold Link Bracelet", price: "$2,100.00", image: "/valentina/images/058A0661-Edit.jpg" }
    ];

    const results = query
        ? allProducts.filter(p => p.name.toLowerCase().includes(query.toLowerCase()))
        : [];

    if (!isSearchOpen) return null;

    return (
        <div className="search-overlay">
            <button className="close-search" onClick={() => setIsSearchOpen(false)}>
                <i className="fas fa-times"></i>
            </button>
            <div className="search-container">
                <div className="search-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search our collections..."
                        autoFocus
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <i className="fas fa-search"></i>
                </div>

                <div className="search-results">
                    {query && results.length > 0 ? (
                        <div className="results-grid">
                            {results.map(product => (
                                <ProductCard key={product.id} {...product} />
                            ))}
                        </div>
                    ) : query ? (
                        <p className="no-results">No products found for "{query}"</p>
                    ) : (
                        <div className="suggested">
                            <h4>Suggested Searches</h4>
                            <ul>
                                <li onClick={() => setQuery('Ring')}>Rings</li>
                                <li onClick={() => setQuery('Necklace')}>Necklaces</li>
                                <li onClick={() => setQuery('Gold')}>Gold</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchOverlay;
