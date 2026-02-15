import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="hero-container pt-6 md:pt-10 pb-12 md:pb-24 flex justify-center items-start bg-white text-gray-900 px-4 md:px-8 lg:px-16 font-['Maven_Pro',_Arial,_Helvetica,_sans-serif]">
            <div className="hero-content w-full max-w-[1400px] flex flex-col gap-4 md:gap-6 lg:gap-8">
                <div className="hero-title-row flex items-center justify-center gap-6 md:gap-12 w-full">
                    <div className="hero-line flex-1 h-[2px] bg-gray-100 hidden md:block max-w-[120px]" />
                    <h1 className="hero-title text-2xl md:text-4xl lg:text-6xl font-normal flex items-center justify-center gap-3 md:gap-8 font-['Maven_Pro',_Arial,_Helvetica,_sans-serif] text-primary-red">
                        <span className="inline-block translate-y-[2px]">Why</span>
                        <img
                            src="/Image/FreshBhoj (1).png"
                            alt="FreshBhoj Logo"
                            className="logo-img-inline h-8 md:h-12 lg:h-16 object-contain filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-105"
                        />
                    </h1>
                    <div className="hero-line flex-1 h-[2px] bg-gray-100 hidden md:block max-w-[150px]" />
                </div>

                <motion.p
                    className="hero-description text-sm md:text-base lg:text-lg text-primary-red max-w-[900px] mx-auto text-center leading-relaxed md:leading-loose font-normal px-4 tracking-[0.05em] font-['Maven_Pro',_Arial,_Helvetica,_sans-serif]"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    In cities like Jaipur, great food already exists: home kitchens, tiffin services, cafés, and small vendors.
                    They just don't have a simple digital space to sell and grow.
                </motion.p>

                <div className="hero-main flex flex-col lg:flex-row gap-8 lg:gap-12 ">
                    <div className="hero-tabs-content flex-1 bg-primary-red px-6 py-8 md:p-10 lg:p-12 rounded-[16px] flex flex-col gap-8 md:gap-12 shadow-[0_8px_32px_rgba(0,0,0,0.15)] relative overflow-hidden [background-image:radial-gradient(circle_at_50%_30%,_rgba(255,107,107,0.4)_0%,_transparent_70%),linear-gradient(135deg,_theme(colors.light-red)_0%,_theme(colors.primary-red)_63%),url('data:image/svg+xml,%3Csvg_viewBox=%220_0_200_200%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22noise%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%220.65%22_numOctaves=%223%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23noise)%22/%3E%3C/svg%3E')] [background-blend-mode:soft-light,normal,overlay]">

                        <div className="hero-tabs flex bg-white/95 backdrop-blur-[10px] p-1.5 md:p-2 rounded-[10px] shadow-[0_4px_16px_rgba(0,0,0,0.1)] relative gap-0 before:content-[''] before:absolute before:top-2 before:left-2 before:w-[calc(50%-8px)] before:h-[calc(100%-16px)] before:bg-gradient-to-br before:from-[#FF6C6C] before:to-primary-red before:rounded-[10px] before:transition-transform before:duration-350 before:ease-[cubic-bezier(0.4,0,0.2,1)] before:shadow-[0_4px_15px_rgba(208,33,35,0.4)] before:z-0 md:before:top-1 md:before:left-1 md:before:w-[calc(50%-4px)] md:before:h-[calc(100%-8px)]" data-active={activeTab}>
                            <style>{`
                                .hero-tabs[data-active="users"]::before {
                                    transform: translateX(100%);
                                }
                            `}</style>
                            <button
                                className={`tab-button flex-1 px-4 md:px-8 py-2.5 md:py-4 text-sm md:text-lg font-medium rounded-full cursor-pointer transition-colors duration-300 relative z-10 whitespace-nowrap ${activeTab === 'vendors' ? 'text-white' : 'text-primary-red hover:bg-[#FF6B6B]/10'}`}
                                onClick={() => setActiveTab('vendors')}
                            >
                                For Vendors
                            </button>
                            <button
                                className={`tab-button flex-1 px-4 md:px-8 py-2.5 md:py-4 text-sm md:text-lg font-medium rounded-full cursor-pointer transition-colors duration-300 relative z-10 whitespace-nowrap ${activeTab === 'users' ? 'text-white' : 'text-primary-red hover:bg-[#FF6B6B]/10'}`}
                                onClick={() => setActiveTab('users')}
                            >
                                For Users
                            </button>
                        </div>

                        <div className="tab-content min-h-[160px] md:min-h-[200px] text-white font-['Maven_Pro',_Arial,_Helvetica,_sans-serif]">
                            {activeTab === 'vendors' ? (
                                <motion.p
                                    key="vendors"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-white text-sm md:text-lg lg:text-xl leading-relaxed md:leading-[1.8] font-light opacity-95"
                                >
                                    Local food vendors struggle to grow because they lack affordable marketing, face high commissions
                                    on large delivery platforms, and have no simple way to visually showcase their food. Without
                                    visibility and control, great local food often goes unnoticed, limiting reach, revenue, and long-term
                                    business growth.
                                </motion.p>
                            ) : (
                                <motion.p
                                    key="users"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-white text-sm md:text-lg lg:text-xl leading-relaxed md:leading-[1.8] font-light opacity-95"
                                >
                                    Users want authentic, home-cooked meals and local flavors but struggle to discover trusted vendors.
                                    Large platforms prioritize restaurants, leaving small kitchens and tiffin services hidden. Without
                                    a dedicated space for local food, users miss out on quality, affordability, and the unique taste
                                    of their city.
                                </motion.p>
                            )}
                        </div>
                    </div>

                    <div className="hero-image-slot flex-1 h-[450px] md:h-[550px] lg:h-[650px] lg:max-w-[650px] rounded-[16px] overflow-hidden bg-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative group">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentImageIndex}
                                src={CAROUSEL_IMAGES[currentImageIndex]}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.7, ease: "easeInOut" }}
                                className="hero-image w-full h-full object-cover"
                            />
                        </AnimatePresence>

                        {/* Carousel Indicators */}
                        <div className="absolute bottom-6 right-6 flex items-center gap-2 z-20">
                            {CAROUSEL_IMAGES.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`transition-all duration-300 bg-white ${currentImageIndex === index
                                        ? 'w-10 h-3 rounded-full opacity-100'
                                        : 'w-3 h-3 rounded-full opacity-60 hover:opacity-100 shadow-sm'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Subtle bottom overlay for indicator visibility */}
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>
                </div>
            </div>
        </div>
    )
}