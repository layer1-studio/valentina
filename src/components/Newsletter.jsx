const Newsletter = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        // Mock submit
    }

    return (
        <section className="newsletter">
            <div className="newsletter-content">
                <h2>Join the Inner Circle</h2>
                <p>Subscribe to receive updates on new collections, exclusive events, and jewellery care tips.</p>
                <form className="subscribe-form" onSubmit={handleSubmit}>
                    <input type="email" placeholder="Your Email Address" required />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </section>
    )
}

export default Newsletter
