import React, { useState, useEffect } from 'react';

const Loader = ({ duration = 2500 }) => {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHidden(true);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    if (hidden) return null;

    return (
        <div id="loader" style={{ opacity: 1, visibility: 'visible' }}>
            <div className="loader-content">
                <svg className="loader-logo" viewBox="0 0 100 100">
                    <path d="M50 10 L90 50 L50 90 L10 50 Z" stroke="#d4af37" fill="none" strokeWidth="2" />
                    <text x="50" y="55" textAnchor="middle" fill="#d4af37" fontFamily="Cinzel" fontSize="24">V</text>
                </svg>
                <div className="loading-bar">
                    <div className="progress"></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
