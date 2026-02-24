import { motion } from 'framer-motion';

export function Vendor() {
    return (
        <div className="vendor-container bg-white flex justify-center items-start py-24 px-24">
            <div className="vendor-content w-full max-w-[1200px] flex items-center justify-between gap-24">
                <div className="vendor-image-container flex-1 flex justify-center w-full">
                    <img
                        src="/Image/vendor_image_label.png"
                        alt="Built for Local Food Vendors"
                        className="vendor-illustration w-full h-auto object-contain filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                    />
                </div>

                <div className="vendor-text-content flex-1 flex flex-col gap-8 text-left">
                    <motion.h1
                        className="vendor-title text-6xl font-bold leading-tight text-[#D02123]"
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        Built for Local<br />
                        <span className="text-[#D02123]">Food Vendors</span>
                    </motion.h1>

                    <motion.h2
                        className="vendor-subtitle text-2xl font-medium text-gray-600"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        Grow your food business by showcasing what you cook best.
                    </motion.h2>

                    <motion.p
                        className="vendor-description text-lg text-[#D32F2F] font-light leading-relaxed max-w-[600px] mx-0"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        FreshBhoj helps local food vendors reach nearby customers through short food videos.
                        Instead of relying on heavy marketing or complex systems, vendors can simply showcase their food,
                        attract attention, and connect with people who are actively looking for local meals.
                        The platform is designed to be simple, accessible, and focused on supporting real food businesses.
                    </motion.p>

                    <motion.button
                        className="register-btn self-start px-12 py-5 text-lg font-medium text-white rounded-full bg-gradient-to-br from-[#FF6C6C] to-[#D02123] shadow-[0_4px_15px_rgba(208,33,35,0.3)] hover:shadow-[0_6px_20px_rgba(208,33,35,0.4)] transition-all duration-300 hover:-translate-y-1"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        Register as a Vendor
                    </motion.button>
                </div>
            </div>
        </div>
    );
}