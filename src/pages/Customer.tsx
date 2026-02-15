import '../styles/customer.css';
import { motion } from 'framer-motion';

const features = [
    "Watch local food videos before you order",
    "Discover hidden gems in your neighborhood",
    "Early access rewards for first 1000 users",
    "Connect directly with local food vendors",
    "Visual-first ordering experience",
    "Authentic taste, nearby location",
    "Real-time food prep updates",
    "Exclusive deals on traditional thalis",
    "Hand-picked local culinary experts",
    "Seamless ordering and fast pickup"
];

export function Customer() {
    return (
        <div className="customer-container min-h-[85vh] lg:min-h-screen flex flex-col items-center justify-center text-white relative overflow-hidden px-4 md:px-12 lg:px-24 py-12 md:py-20 lg:py-24">
            <div className="customer-main w-full max-w-[1400px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 mb-16 md:mb-24">
                <div className="customer-content flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-8 md:gap-12">
                    <motion.h1
                        className="customer-title text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] md:leading-[1.05] tracking-tight"
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        Food You Can<br className="hidden md:block" />
                        See Before You <br className="hidden md:block" />
                        Order
                    </motion.h1>

                    <motion.button
                        className="join-btn px-8 md:px-12 py-3.5 md:py-5 text-base md:text-lg font-medium border-2 border-white/40 bg-white/15 hover:bg-white hover:text-[#D02123] rounded-full transition-all duration-300 backdrop-blur-xl shadow-2xl"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        Join Early – Get Benefits
                    </motion.button>
                </div>

                <div className="customer-image-slot flex-1 flex justify-center w-full mt-10 lg:mt-0">
                    <img
                        src="/Image/user_image_label.png"
                        alt="Customer Order Experience"
                        className="customer-illustration w-full max-w-[380px] md:max-w-[480px] lg:max-w-none h-auto object-contain filter drop-shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
                    />
                </div>
            </div>

            <div className="customer-slider-section w-screen relative left-1/2 -translate-x-1/2 py-12 md:py-20 bg-white/5 backdrop-blur-md overflow-hidden flex justify-center border-y border-white/10">
                <div className="feature-slider-track w-full flex items-center">
                    <motion.div
                        className="slider-content flex gap-8 md:gap-12 px-6"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 35,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        {[...features, ...features].map((text, index) => (
                            <motion.div
                                key={index}
                                className="feature-text-card min-w-[280px] md:min-w-[400px] p-8 md:p-12 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[32px] flex items-center justify-center text-center transition-all duration-500 hover:bg-white/20 hover:border-white/40 group shadow-lg"
                                initial={{ scale: 0.85, opacity: 0.5 }}
                                whileInView={{ scale: 1.05, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ margin: "-30%" }}
                            >
                                <div className="feature-text-inner text-base md:text-xl lg:text-2xl font-semibold text-white leading-relaxed group-hover:scale-105 transition-transform duration-300">
                                    {text}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
