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
        <div className="customer-container min-h-screen flex flex-col items-center justify-center text-white relative overflow-hidden px-24 py-24">
            <div className="customer-main w-full max-w-[1400px] flex items-center justify-between gap-24 mb-24">
                <div className="customer-content flex-1 flex flex-col items-start text-left gap-12">
                    <motion.h1
                        className="customer-title text-6xl font-bold leading-[1.05] tracking-tight"
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        Food You Can<br className="block" />
                        See Before You <br className="block" />
                        Order
                    </motion.h1>

                    <motion.button
                        className="join-btn px-12 py-5 text-lg font-medium border-2 border-white/40 bg-white/15 hover:bg-white hover:text-[#D02123] rounded-full transition-all duration-300 backdrop-blur-xl shadow-2xl"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        Join Early – Get Benefits
                    </motion.button>
                </div>

                <div className="customer-image-slot flex-1 flex justify-center w-full mt-0">
                    <img
                        src="/Image/user_image_label.png"
                        alt="Customer Order Experience"
                        className="customer-illustration w-full h-auto object-contain filter drop-shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
                    />
                </div>
            </div>

            <div className="customer-slider-section w-screen relative left-1/2 -translate-x-1/2 py-20 bg-white/5 backdrop-blur-md overflow-hidden flex justify-center border-y border-white/10">
                <div className="feature-slider-track w-full flex items-center">
                    <motion.div
                        className="slider-content flex gap-12 px-6"
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
                                className="feature-text-card min-w-[400px] p-12 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[32px] flex items-center justify-center text-center transition-all duration-500 hover:bg-white/20 hover:border-white/40 group shadow-lg"
                                initial={{ scale: 0.85, opacity: 0.5 }}
                                whileInView={{ scale: 1.05, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ margin: "-30%" }}
                            >
                                <div className="feature-text-inner text-2xl font-semibold text-white leading-relaxed group-hover:scale-105 transition-transform duration-300">
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