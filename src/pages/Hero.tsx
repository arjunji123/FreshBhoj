import { useState } from 'react'
import '../styles/Hero.css'

export function Hero() {
    const [activeTab, setActiveTab] = useState<'vendors' | 'users'>('vendors');

    return (
        <div className="hero-container">
            <div className="hero-content">
                <h1 className="hero-title">Why
                    <img src="\Image\FreshBhoj (1).png" alt="FreshBhoj Logo" className="logo-img-inline" />
                </h1>


                <p className="hero-description">
                    In cities like Jaipur, great food already exists: home kitchens, tiffin services, cafés, and small vendors.
                    They just don't have a simple digital space to sell and grow.
                </p>

                <div className="hero-main">
                    <div className="hero-tabs-content">
                        <div className="hero-tabs">
                            <button
                                className={`tab-button ${activeTab === 'vendors' ? 'active' : ''}`}
                                onClick={() => setActiveTab('vendors')}
                            >
                                For Vendors
                            </button>
                            <button
                                className={`tab-button ${activeTab === 'users' ? 'active' : ''}`}
                                onClick={() => setActiveTab('users')}
                            >
                                For Users
                            </button>
                        </div>

                        <div className="tab-content">
                            {activeTab === 'vendors' ? (
                                <p>
                                    Local food vendors struggle to grow because they lack affordable marketing, face high commissions
                                    on large delivery platforms, and have no simple way to visually showcase their food. Without
                                    visibility and control, great local food often goes unnoticed, limiting reach, revenue, and long-term
                                    business growth.
                                </p>
                            ) : (
                                <p>
                                    Users want authentic, home-cooked meals and local flavors but struggle to discover trusted vendors.
                                    Large platforms prioritize restaurants, leaving small kitchens and tiffin services hidden. Without
                                    a dedicated space for local food, users miss out on quality, affordability, and the unique taste
                                    of their city.
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="hero-image-slot">
                        {/* Image slot - Replace with your actual image */}
                        <img
                            src="\Image\Bustling Street Food 1.png"
                            alt="Fresh food being prepared"
                            className="hero-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}