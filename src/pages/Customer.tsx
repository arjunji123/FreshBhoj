import React, { useState, useEffect } from 'react';
import '../styles/customer.css';
import { motion } from 'framer-motion';

const baseFeatures = [
    "Watch local food videos before you order",
    "Discover trending local food",
    "Early access & rewards",
    "Connect directly with local food vendors",
    "Visual-first ordering experience",
    "Authentic taste, nearby location",
    "Real-time food prep updates",
    "Exclusive deals on traditional thalis",
    "Hand-picked local culinary experts",
    "Seamless ordering and fast pickup"
];

// Create a larger array for infinite cyclic feel
const features = [...baseFeatures, ...baseFeatures, ...baseFeatures];
const startIndex = baseFeatures.length; // Start in the middle set

const cardVariants = {
    active: {
        scale: 1.18,
        backgroundColor: "#ffffff",
        borderColor: "#ffffff",
        opacity: 1,
        boxShadow: "0px 20px 50px rgba(0, 0, 0, 0.25)",
        zIndex: 10,
        transition: { duration: 0.8, ease: "circOut" as const }
    },
    inactive: {
        scale: 0.85,
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        borderColor: "rgba(255, 255, 255, 0.1)",
        opacity: 0.4,
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.05)",
        zIndex: 1,
        transition: { duration: 0.8, ease: "circOut" as const }
    }
};

const textVariants = {
    active: {
        color: "#D02123",
        fontWeight: 700,
        scale: 1.05,
        transition: { duration: 0.8, ease: "circOut" as const }
    },
    inactive: {
        color: "rgba(255, 255, 255, 0.8)",
        fontWeight: 500,
        scale: 1,
        transition: { duration: 0.8, ease: "circOut" as const }
    }
};

export function Customer() {
    const [activeIndex, setActiveIndex] = useState(startIndex);
    const [isTransitioning, setIsTransitioning] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setActiveIndex((prev) => prev + 1);
        }, 4000); // Wait for 4s then slide

        return () => clearInterval(interval);
    }, []);

    // Handle Infinite Jump
    useEffect(() => {
        if (activeIndex >= baseFeatures.length * 2) {
            // Wait for transition to finish, then jump back to middle set silently
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setActiveIndex(startIndex);
            }, 800); // Match transition duration
            return () => clearTimeout(timer);
        }
    }, [activeIndex]);

    return (
        <div className="customer-container">
            <div className="customer-main">
                <div className="customer-content">
                    <motion.h1
                        className="customer-title"
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        Food<br />
                        You Can See Before You<br />
                        Order
                    </motion.h1>

                    <motion.button
                        className="join-btn"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        Join Early – Get Benefits
                    </motion.button>
                </div>

                <div className="customer-image-slot">
                    <img
                        src="/Image/user_image_label.png"
                        alt="Customer Order Experience"
                        className="customer-illustration"
                    />
                </div>
            </div>

            <div className="customer-slider-section">
                <div className="feature-slider-track">
                    <motion.div
                        className="slider-content flex gap-12"
                        animate={{
                            x: `calc(50vw - (${activeIndex} * (38 * var(--vw) + 48px)) - (19 * var(--vw)))`
                        }}
                        transition={isTransitioning ? { duration: 0.8, ease: "circOut" } : { duration: 0 }}
                    >
                        {features.map((text, index) => (
                            <motion.div
                                key={index}
                                className="feature-text-card"
                                initial="inactive"
                                animate={index === activeIndex ? "active" : "inactive"}
                                variants={cardVariants}
                            >
                                <motion.div
                                    className="feature-text-inner"
                                    variants={textVariants}
                                >
                                    {text}
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}


