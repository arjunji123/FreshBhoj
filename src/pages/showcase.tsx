
import { motion } from 'framer-motion';

export function Showcase() {
    return (
        <div
            className="showcase-container bg-[#D02123] py-12 md:py-20 flex justify-center items-start text-white relative overflow-hidden px-4 md:px-12 lg:px-24"
            style={{
                backgroundImage: `
                    radial-gradient(circle at 50% 30%, rgba(255, 107, 107, 0.4) 0%, transparent 70%),
                    linear-gradient(135deg, #FF6C6C 0%, #D02123 65%),
                    url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")
                `,
                backgroundBlendMode: 'soft-light, normal, overlay'
            }}
        >
            <div className="showcase-content w-full max-w-[1000px] flex flex-col gap-12 md:gap-16 lg:gap-20">
                <motion.header
                    className="showcase-header text-center"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <h1 className="showcase-title text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6">
                        What Makes FreshBhoj Different
                    </h1>
                    <p className="text-sm md:text-base lg:text-lg opacity-90 max-w-[800px] mx-auto font-light leading-relaxed">
                        FreshBhoj is designed to highlight real local food and vendors, using visual discovery and fair systems
                        instead of mass-chain focused marketplaces.
                    </p>
                </motion.header>

                <div className="showcase-timeline flex flex-col gap-8 md:gap-12 relative min-h-[600px] py-8">
                    {/* Vertical line image */}
                    <img
                        src="/Image/Frame 26080079.png"
                        alt=""
                        className="timeline-center-line absolute left-1/2 top-0 h-full w-auto -translate-x-1/2 z-0 opacity-40 md:opacity-60 hidden md:block"
                    />

                    {/* Left Item 1 */}
                    <div className="timeline-item flex items-center justify-center md:justify-end md:pr-[50.5%] relative z-10 w-full">
                        <motion.div
                            className="timeline-card w-full max-w-[320px] md:max-w-[400px] flex flex-col items-center gap-3 transition-transform duration-300 hover:-translate-y-2 group"
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            viewport={{ once: true }}
                        >
                            <img src="/Image/phone_showcase_image.png" alt="Food Reels Shopping" className="timeline-image w-full aspect-[4/3] object-cover rounded-2xl bg-white/95 p-1.5 shadow-xl transition-shadow duration-500 group-hover:shadow-2xl" />
                            <h3 className="timeline-label text-sm md:text-base lg:text-lg font-semibold">Food Reels Shopping</h3>
                        </motion.div>
                    </div>

                    {/* Right Item 1 */}
                    <div className="timeline-item flex items-center justify-center md:justify-start md:pl-[50.5%] relative z-10 w-full">
                        <motion.div
                            className="timeline-card w-full max-w-[320px] md:max-w-[400px] flex flex-col items-center gap-3 transition-transform duration-300 hover:-translate-y-2 group"
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            viewport={{ once: true }}
                        >
                            <img src="/Image/dish_showcase_image.png" alt="Local Vendor-First Platform" className="timeline-image w-full aspect-[4/3] object-cover rounded-2xl bg-white/95 p-1.5 shadow-xl transition-shadow duration-500 group-hover:shadow-2xl" />
                            <h3 className="timeline-label text-sm md:text-base lg:text-lg font-semibold">Local Vendor-First Platform</h3>
                        </motion.div>
                    </div>

                    {/* Left Item 2 */}
                    <div className="timeline-item flex items-center justify-center md:justify-end md:pr-[50.5%] relative z-10 w-full">
                        <motion.div
                            className="timeline-card w-full max-w-[320px] md:max-w-[400px] flex flex-col items-center gap-3 transition-transform duration-300 hover:-translate-y-2 group"
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
                            viewport={{ once: true }}
                        >
                            <img src="/Image/Bustling Street Food 1.png" alt="Fresh, Made-to-Order Food" className="timeline-image w-full aspect-[4/3] object-cover rounded-2xl bg-white/95 p-1.5 shadow-xl transition-shadow duration-500 group-hover:shadow-2xl" />
                            <h3 className="timeline-label text-sm md:text-base lg:text-lg font-semibold">Fresh, Made-to-Order Food</h3>
                        </motion.div>
                    </div>

                    {/* Right Item 2 */}
                    <div className="timeline-item flex items-center justify-center md:justify-start md:pl-[50.5%] relative z-10 w-full">
                        <motion.div
                            className="timeline-card w-full max-w-[320px] md:max-w-[400px] flex flex-col items-center gap-3 transition-transform duration-300 hover:-translate-y-2 group"
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
                            viewport={{ once: true }}
                        >
                            <img src="/Image/balance_image.png" alt="Fair & Sustainable Commission Model" className="timeline-image w-full aspect-[4/3] object-cover rounded-2xl bg-white/95 p-1.5 shadow-xl transition-shadow duration-500 group-hover:shadow-2xl" />
                            <h3 className="timeline-label text-sm md:text-base lg:text-lg font-semibold">Fair & Sustainable Commission Model</h3>
                        </motion.div>
                    </div>

                    {/* Left Item 3 */}
                    <div className="timeline-item flex items-center justify-center md:justify-end md:pr-[50.5%] relative z-10 w-full">
                        <motion.div
                            className="timeline-card w-full max-w-[320px] md:max-w-[400px] flex flex-col items-center gap-3 transition-transform duration-300 hover:-translate-y-2 group"
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                            viewport={{ once: true }}
                        >
                            <img src="/Image/location_image.png" alt="Hyper-Local Food Discovery" className="timeline-image w-full aspect-[4/3] object-cover rounded-2xl bg-white/95 p-1.5 shadow-xl transition-shadow duration-500 group-hover:shadow-2xl" />
                            <h3 className="timeline-label text-sm md:text-base lg:text-lg font-semibold">Hyper-Local Food Discovery</h3>
                        </motion.div>
                    </div>

                    {/* Right Item 3 */}
                    <div className="timeline-item flex items-center justify-center md:justify-start md:pl-[50.5%] relative z-10 w-full">
                        <motion.div
                            className="timeline-card w-full max-w-[320px] md:max-w-[400px] flex flex-col items-center gap-3 transition-transform duration-300 hover:-translate-y-2 group"
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                            viewport={{ once: true }}
                        >
                            <img src="/Image/selllers_image.png" alt="Verified Local Sellers" className="timeline-image w-full aspect-[4/3] object-cover rounded-2xl bg-white/95 p-1.5 shadow-xl transition-shadow duration-500 group-hover:shadow-2xl" />
                            <h3 className="timeline-label text-sm md:text-base lg:text-lg font-semibold">Verified Local Sellers</h3>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
