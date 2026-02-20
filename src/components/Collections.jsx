const Collections = () => {
    return (
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
                        <a href="#" className="link-btn">View Collection</a>
                    </div>
                </div>
                <div className="collection-item">
                    <div className="img-container">
                        <img src={`${import.meta.env.BASE_URL}images/058A0404.jpg`} alt="Gold Rings" />
                    </div>
                    <div className="content">
                        <h3>Royal Gold</h3>
                        <a href="#" className="link-btn">View Collection</a>
                    </div>
                </div>
                <div className="collection-item">
                    <div className="img-container">
                        <img src={`${import.meta.env.BASE_URL}images/058A0638-Edit.jpg`} alt="Gemstone Earrings" />
                    </div>
                    <div className="content">
                        <h3>Vivid Gemstones</h3>
                        <a href="#" className="link-btn">View Collection</a>
                    </div>
                </div>
                <div className="collection-item">
                    <div className="img-container">
                        <img src={`${import.meta.env.BASE_URL}images/058A0642-Edit.jpg`} alt="Bridal Set" />
                    </div>
                    <div className="content">
                        <h3>Bridal Series</h3>
                        <a href="#" className="link-btn">View Collection</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Collections
