import { motion } from 'framer-motion';
import '../styles/vendor.css';

export function Vendor() {
    return (
        <div className="vendor-container">
            <div className="vendor-content">
                <div className="vendor-image-container">
                    <img
                        src="/Image/vendor_image_label.png"
                        alt="Built for Local Food Vendors"
                        className="vendor-illustration"
                    />
                </div>

                <div className="vendor-text-content">
                    <motion.h1
                        className="vendor-title"
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        Built for Local<br />
                        <span>Food Vendors</span>
                    </motion.h1>

                    <motion.h2
                        className="vendor-subtitle"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        Grow your food business by showcasing what you cook best.
                    </motion.h2>

                    <motion.p
                        className="vendor-description"
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
                        className="register-btn"
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
