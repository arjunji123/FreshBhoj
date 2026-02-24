
import { motion } from 'framer-motion';

const SHOWCASE_ITEMS = [
    {
        side: 'right',
        image: '/Image/phone_showcase_image.png',
        label: 'Food Reels Shopping',
        delay: 0
    },
    {
        side: 'left',
        image: '/Image/dish_showcase_image.png',
        label: 'Local Vendor-First Platform',
        delay: 0.1
    },
    {
        side: 'right',
        image: '/Image/Bustling Street Food 1.png',
        label: 'Fresh, Made-to-Order Food',
        delay: 0.2
    },
    {
        side: 'left',
        image: '/Image/balance_image.png',
        label: 'Fair & Sustainable Commission Model',
        delay: 0.3
    },
    {
        side: 'right',
        image: '/Image/location_image.png',
        label: 'Hyper-Local Food Discovery',
        delay: 0.4
    },
    {
        side: 'left',
        image: '/Image/selllers_image.png',
        label: 'Verified Local Sellers',
        delay: 0.5
    }
];

export function Showcase() {
    return (
        <section
            className="min-h-screen w-full flex flex-col items-center justify-start text-white relative overflow-hidden pt-[10vw] pb-[12vw] px-[4vw]"
            style={{
                backgroundColor: '#D02123',
                backgroundImage: `
                    radial-gradient(circle at 50% 30%, rgba(255, 107, 107, 0.4) 0%, transparent 70%),
                    linear-gradient(135deg, #FF6C6C 0%, #D02123 65%),
                    url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")
                `,
                backgroundBlendMode: 'soft-light, normal, overlay'
            }}
        >
            {/* Header */}
            <motion.header
                className="text-center max-w-[85vw] mb-[8vw] relative z-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h1 className="text-[4vw] font-bold mb-[1.5vw] tracking-tight">
                    What Makes FreshBhoj Different
                </h1>
                <p className="text-[1.35vw] opacity-95 max-w-[65vw] mx-auto leading-relaxed font-normal">
                    FreshBhoj is designed to highlight real local food and vendors, using visual discovery and fair systems
                    instead of mass-chain focused marketplaces.
                </p>
            </motion.header>

            {/* Timeline Container */}
            <div className="relative w-full max-w-[1400px] mx-auto flex flex-col gap-[3vw] md:gap-[5vw]">

                {/* ── CENTRAL SPINE ── */}
                {/* Styled to match Home page title lines: thin and semi-transparent */}
                {/* top-[8vw] and bottom-[8vw] provide equal gap from the scroll bounds */}
                <div className="absolute left-1/2 top-[8vw] bottom-[8vw] -translate-x-1/2 w-px bg-white/30 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#D02123] via-transparent to-[#D02123] opacity-50 pointer-events-none" />
                </div>

                {/* Alternating Items */}
                {SHOWCASE_ITEMS.map((item, index) => (
                    <div
                        key={index}
                        className={`flex w-full relative z-10 min-h-[15vw] items-center ${item.side === 'left' ? 'justify-end pr-[50%]' : 'justify-start pl-[50%]'
                            }`}
                    >
                        <motion.div
                            className={`flex flex-col items-center w-full max-w-[22vw] ${item.side === 'left' ? 'mr-[4vw]' : 'ml-[4vw]'
                                } transition-all duration-300`}
                            initial={{ opacity: 0, x: item.side === 'left' ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: item.delay }}
                            viewport={{ once: true }}
                        >
                            {/* Card Image Wrapper with uniform white border */}
                            <div className="w-full bg-white p-[0.6vw] rounded-[1.2vw] shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-[0.6vw] hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)]">
                                <div className="w-full aspect-[1.5] rounded-[0.8vw] overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.label}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Label */}
                            <h3 className="mt-[1.5vw] text-[1.2vw] font-medium text-center tracking-wide leading-snug">
                                {item.label}
                            </h3>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}
