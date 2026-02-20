import React from 'react';
import ProductCard from './ProductCard';

const Featured = () => {
    const products = [
        {
            id: 1,
            name: "Sapphire Halo Ring",
            price: "$1,250.00",
            image: "/valentina/images/058A0402.jpg"
        },
        {
            id: 2,
            name: "Pearl Drop Necklace",
            price: "$890.00",
            image: "/valentina/images/058A0411-Edit.jpg"
        },
        {
            id: 3,
            name: "Gold Link Bracelet",
            price: "$2,100.00",
            image: "/valentina/images/058A0661-Edit.jpg"
        }
    ]

    return (
        <section className="featured">
            <div className="section-header">
                <span className="subtitle">Curated</span>
                <h2>New Arrivals</h2>
                <div className="line"></div>
            </div>
            <div className="product-carousel">
                {products.map(product => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </section>
    )
}

export default Featured
