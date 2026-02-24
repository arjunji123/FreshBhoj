import React from 'react';
import { RegistrationForm } from '../components/RegistrationForm';
import '../styles/AboutUs.css';

export const AboutUs: React.FC = () => {
    return (
        <div id="about-us" className="about-us-container">
            {/* ── TOP SECTION: ABOUT US & CARTS ── */}
            <section className="about-us-section">
                <header className="about-us-header">
                    <h2 className="about-us-title">About Us</h2>
                    <div className="carts-container">
                        <img src="/Image/cart_1.png" alt="Cart Left" className="cart-img" />
                        <img src="/Image/cart2.png" alt="Cart Right" className="cart-img" />
                    </div>
                    <div className="max-w-2xl mx-auto px-4">
                        <p className="about-us-description text-center">
                            To build India's most trusted hyper-local food discovery platform, where fresh local food is easy to find, understand, and access.
                        </p>
                    </div>
                </header>

                <div className="mission-statement">
                    <p className="max-w-4xl mx-auto">
                        FreshBhoj is built to strengthen local food ecosystems by connecting people with nearby vendors through simple, visual food discovery. We focus on freshness, trust, and accessibility—helping small food businesses grow while giving customers better visibility into what they order.
                    </p>
                </div>
            </section>

            {/* ── MIDDLE SECTION: LAUNCHING SOON & REGISTRATION ── */}
            <section className="launching-soon-section">
                <h2 className="launching-text">"Launching Soon"</h2>

                <img src="/Image/FreshBhoj (1).png" alt="FreshBhoj Logo" className="freshbhoj-logo-large" />
                <p className="logo-tagline underline decoration-1 underline-offset-4">Not delivered fast—delivered right.</p>

                <RegistrationForm />

                <p className="mt-12 text-sm opacity-80 max-w-lg">
                    FreshBhoj is currently in pre-launch. Vendor onboarding is subject to verification and quality checks.
                </p>
            </section>

            {/* ── FOOTER SECTION ── */}
            <footer className="footer-section">
                <div className="footer-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Contact: support@freshbhoj.com</a>
                </div>

                <div className="flex flex-col items-end">
                    <img src="/Image/FreshBhoj.png" alt="FreshBhoj Logo" className="footer-logo" />
                    <p className="text-[10px] text-gray-400 mt-2">© 2025 FreshBhoj. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default AboutUs;
