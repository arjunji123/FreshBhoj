import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Hero.css';

const CAROUSEL_IMAGES = [
    '/Image/Bustling Street Food 1.png',
    '/Image/dish_showcase_image.png',
    '/Image/phone_showcase_image.png',
    '/Image/selllers_image.png',
    '/Image/location_image.png'
];

export function Hero() {
    const [activeTab, setActiveTab] = useState<'vendors' | 'users'>('vendors');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
        }, 3500);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="hero-page">
            <div className="hero-content-wrapper">

                {/* ── HEADER SECTION ── */}
                <div className="grid grid-cols-[1fr_auto_1fr] items-center w-full gap-4 md:gap-8">
                    <div className="w-full h-px bg-gray-200" />

                    <h1 className="hero-title-text">
                        <span>Why</span>
                        <img
                            src="/Image/FreshBhoj (1).png"
                            alt="FreshBhoj"
                            className="hero-logo-inline"
                        />
                    </h1>

                    <div className="w-full h-px bg-gray-200" />
                </div>

                <motion.p
                    className="hero-description"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    In cities like Jaipur, great food already exists: home kitchens, tiffin services, cafés, and small vendors.
                    They just don't have a simple digital space to sell and grow.
                </motion.p>

                {/* ── MAIN CONTENT (TABS + IMAGE) ── */}
                <div className="hero-main-layout">

                    {/* LEFT SIDE: RED CARD WITH TABS */}
                    <div className="hero-tabs-card">

                        <div className="hero-segmented-control" data-active={activeTab}>
                            <button
                                className={`hero-tab-btn ${activeTab === 'vendors' ? 'active' : ''}`}
                                onClick={() => setActiveTab('vendors')}
                            >
                                For Vendors
                            </button>
                            <button
                                className={`hero-tab-btn ${activeTab === 'users' ? 'active' : ''}`}
                                onClick={() => setActiveTab('users')}
                            >
                                For Users
                            </button>
                        </div>

                        <div className="tab-text-content">
                            <AnimatePresence mode="wait">
                                {activeTab === 'vendors' ? (
                                    <motion.p
                                        key="vendors"
                                        initial={{ opacity: 0, x: -15 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 15 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        Local food vendors struggle to grow because they lack affordable marketing, face high commissions
                                        on large delivery platforms, and have no simple way to visually showcase their food. Without
                                        visibility and control, great local food often goes unnoticed, limiting reach, revenue, and long-term
                                        business growth.
                                    </motion.p>
                                ) : (
                                    <motion.p
                                        key="users"
                                        initial={{ opacity: 0, x: -15 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 15 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        Users want authentic, home-cooked meals and local flavors but struggle to discover trusted vendors.
                                        Large platforms prioritize restaurants, leaving small kitchens and tiffin services hidden. Without
                                        a dedicated space for local food, users miss out on quality, affordability, and the unique taste
                                        of their city.
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* RIGHT SIDE: IMAGE CAROUSEL */}
                    <div className="hero-carousel-slot">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentImageIndex}
                                src={CAROUSEL_IMAGES[currentImageIndex]}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className="carousel-img"
                                alt="FreshBhoj Showcase"
                            />
                        </AnimatePresence>

                        <div className="carousel-indicators">
                            {CAROUSEL_IMAGES.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`indicator-dot ${currentImageIndex === index ? 'active' : ''}`}
                                    aria-label={`Slide ${index + 1}`}
                                />
                            ))}
                        </div>
                        <div className="carousel-overlay" />
                    </div>

                </div>
            </div>
        </section>
    );
}
