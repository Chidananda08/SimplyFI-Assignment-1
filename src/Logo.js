// src/Logo.js
import React from 'react';
import './Logo.css';

const Logo = () => {
    return (
        <div className="logo-container">
            <div className="kite">
                <div className="kite-shape">
                    <div className="top-left"></div>
                    <div className="top-right"></div>
                    <div className="bottom-left"></div>
                    <div className="bottom-right"></div>
                </div>
                <div className="logo-text">
                    <span>HTML & CSS</span>
                    <p>design and build websites</p>
                </div>
            </div>
        </div>
    );
}

export default Logo;
