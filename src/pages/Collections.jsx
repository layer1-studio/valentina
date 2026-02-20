import React, { useState, useEffect, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const Collections = () => {
    const [priceRange, setPriceRange] = useState(10000);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedMetals, setSelectedMetals] = useState([]);
    const [selectedGemstones, setSelectedGemstones] = useState([]);
    const [sortBy, setSortBy] = useState('featured');

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

        const animatedElements = document.querySelectorAll('.product-card, .sidebar, .page-header, .footer-col');
        animatedElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const products = [
        { id: 1, name: "Sapphire Halo Ring", price: 1250, displayPrice: "$1,250.00", image: `${import.meta.env.BASE_URL}images/058A0402.jpg`, category: "Rings", metal: "White Gold", gemstone: "Sapphire" },
        { id: 2, name: "Pearl Drop Necklace", price: 890, displayPrice: "$890.00", image: `${import.meta.env.BASE_URL}images/058A0411-Edit.jpg`, category: "Necklaces", metal: "Yellow Gold", gemstone: "Pearl" },
        { id: 3, name: "Gold Link Bracelet", price: 2100, displayPrice: "$2,100.00", image: `${import.meta.env.BASE_URL}images/058A0661-Edit.jpg`, category: "Bracelets", metal: "Yellow Gold", gemstone: "None" },
        { id: 4, name: "Emerald Drop Earrings", price: 3400, displayPrice: "$3,400.00", image: `${import.meta.env.BASE_URL}images/058A0417-Edit.jpg`, category: "Earrings", metal: "Platinum", gemstone: "Emerald" },
        { id: 5, name: "Royal Bridal Set", price: 5600, displayPrice: "$5,600.00", image: `${import.meta.env.BASE_URL}images/058A0642-Edit.jpg`, category: "Bridal", metal: "White Gold", gemstone: "Diamond" },
        { id: 6, name: "Vintage Rose Ring", price: 1800, displayPrice: "$1,800.00", image: `${import.meta.env.BASE_URL}images/058A0416-Edit.jpg`, category: "Rings", metal: "Rose Gold", gemstone: "Ruby" },
        { id: 7, name: "Solitaire Pendant", price: 950, displayPrice: "$950.00", image: `${import.meta.env.BASE_URL}images/058A0409-Edit.jpg`, category: "Necklaces", metal: "White Gold", gemstone: "Diamond" },
        { id: 8, name: "Diamond Studs", price: 2200, displayPrice: "$2,200.00", image: `${import.meta.env.BASE_URL}images/058A0404.jpg`, category: "Earrings", metal: "White Gold", gemstone: "Diamond" },
        { id: 9, name: "Sterling Cuff", price: 450, displayPrice: "$450.00", image: `${import.meta.env.BASE_URL}images/058A0658-Edit.jpg`, category: "Bracelets", metal: "White Gold", gemstone: "None" }
    ];

    const filteredProducts = useMemo(() => {
        return products
            .filter(p => {
                const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(p.category);
                const metalMatch = selectedMetals.length === 0 || selectedMetals.includes(p.metal);
                const gemstoneMatch = selectedGemstones.length === 0 || selectedGemstones.includes(p.gemstone);
                const priceMatch = p.price <= priceRange;
                return categoryMatch && metalMatch && gemstoneMatch && priceMatch;
            })
            .sort((a, b) => {
                if (sortBy === 'price-low') return a.price - b.price;
                if (sortBy === 'price-high') return b.price - a.price;
                if (sortBy === 'newest') return b.id - a.id;
                return 0; // Featured
            });
    }, [selectedCategories, selectedMetals, selectedGemstones, priceRange, sortBy]);

    const toggleFilter = (item, setter) => {
        setter(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
    };

    return (
        <div className="collections-page">
            <Navbar />

            <header className="page-header">
                <div className="header-content">
                    <h1>Our Collections</h1>
                    <p>Curated pieces defining elegance and luxury.</p>
                </div>
            </header>

            <section className="shop-section">
                <div className="shop-container">
                    <aside className="sidebar">
                        <div className="filter-group">
                            <h3>Category</h3>
                            <ul>
                                {["Rings", "Necklaces", "Earrings", "Bracelets", "Bridal"].map(cat => (
                                    <li key={cat}>
                                        <label>
                                            <input
                                                type="checkbox"
                                                checked={selectedCategories.includes(cat)}
                                                onChange={() => toggleFilter(cat, setSelectedCategories)}
                                            /> {cat}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="filter-group">
                            <h3>Metal</h3>
                            <ul>
                                {["Yellow Gold", "White Gold", "Rose Gold", "Platinum"].map(metal => (
                                    <li key={metal}>
                                        <label>
                                            <input
                                                type="checkbox"
                                                checked={selectedMetals.includes(metal)}
                                                onChange={() => toggleFilter(metal, setSelectedMetals)}
                                            /> {metal}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="filter-group">
                            <h3>Price Range</h3>
                            <div className="price-slider">
                                <input
                                    type="range"
                                    min="0"
                                    max="10000"
                                    step="500"
                                    value={priceRange}
                                    className="slider"
                                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
                                />
                                <p>Max Price: <span>${priceRange}</span></p>
                            </div>
                        </div>

                        <div className="filter-group">
                            <h3>Gemstone</h3>
                            <ul>
                                {["Diamond", "Sapphire", "Emerald", "Ruby", "Pearl"].map(stone => (
                                    <li key={stone}>
                                        <label>
                                            <input
                                                type="checkbox"
                                                checked={selectedGemstones.includes(stone)}
                                                onChange={() => toggleFilter(stone, setSelectedGemstones)}
                                            /> {stone}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    <div className="shop-grid">
                        <div className="shop-controls">
                            <p>Showing {filteredProducts.length} results</p>
                            <select className="sort-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                <option value="featured">Sort by: Featured</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="newest">Newest Arrivals</option>
                            </select>
                        </div>

                        <div className="products-container">
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map(product => (
                                    <ProductCard
                                        key={product.id}
                                        id={product.id}
                                        name={product.name}
                                        price={product.displayPrice}
                                        image={product.image}
                                    />
                                ))
                            ) : (
                                <div className="no-products">
                                    <p>No products match your filters.</p>
                                    <button className="btn secondary-btn" onClick={() => {
                                        setSelectedCategories([]);
                                        setSelectedMetals([]);
                                        setSelectedGemstones([]);
                                        setPriceRange(10000);
                                    }}>Clear All Filters</button>
                                </div>
                            )}
                        </div>

                        {filteredProducts.length > 0 && (
                            <div className="pagination">
                                <a href="#" className="active">1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#"><i className="fas fa-chevron-right"></i></a>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Collections;
