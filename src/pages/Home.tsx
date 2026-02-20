import { useState } from 'react'

export function Home() {
    const [role, setRole] = useState<'customer' | 'vendor'>('customer');

    return (
        <div className="home-container min-h-screen grid grid-rows-[auto_1fr_auto_80px] items-center text-white relative overflow-hidden px-4 md:px-8 lg:px-16 pt-20 md:pt-32 pb-8 bg-primary-red [background-image:radial-gradient(circle_at_50%_30%,_rgba(255,107,107,0.4)_0%,_transparent_70%),linear-gradient(135deg,_theme(colors.light-red)_0%,_theme(colors.primary-red)_63%),url('data:image/svg+xml,%3Csvg_viewBox=%220_0_200_200%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22noise%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%220.65%22_numOctaves=%223%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23noise)%22/%3E%3C/svg%3E')] [background-blend-mode:soft-light,normal,overlay]">

            <header className="page-header w-full grid grid-cols-1 justify-items-center mb-6 md:mb-10 text-center">
                <div className="title-row grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center justify-items-center w-full max-w-[1400px] gap-4 md:gap-8 mb-4 md:mb-6 px-4 [font-family:'Cinzel_Decorative',cursive]">
                    <div className="header-line w-full h-[1px] bg-white/30 hidden sm:block translate-y-3 md:translate-y-10"></div>
                    <div className="logo-wrapper w-[clamp(140px,25vw,280px)] translate-y-3 md:translate-y-10">
                        <img
                            src="/Image/FreshBhoj.svg"
                            alt="FreshBhoj Logo"
                            className="logo-img w-full h-auto object-contain filter drop-shadow-xl transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                    <div className="header-line w-full h-[1px] bg-white/30 hidden sm:block translate-y-3 md:translate-y-10"></div>
                </div>
                <p className="home-description text-[clamp(1rem,2.5vw,1.75rem)] font-light tracking-[0.05em] text-center opacity-95 max-w-[800px] leading-relaxed translate-y-2 md:translate-y-7">
                    Not delivered fast—delivered right.
                </p>
            </header>

            <main className="hero-dishes grid grid-cols-[1fr_1.5fr_1fr] items-center justify-items-center w-full max-w-[1440px] px-2 md:px-8 relative my-8 before:content-[''] before:absolute before:inset-0 before:bg-white/5 before:backdrop-blur-sm before:rounded-[100px] before:-z-10 before:[mask-image:radial-gradient(circle,black,transparent_70%)] overflow-visible">
                {/* Side Left */}
                <div className="plate-group side-left w-full max-w-[280px] aspect-square relative">
                    <img src="/Image/download-removebg-preview 6.png" className="rotating-bg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] opacity-40 pointer-events-none z-0 object-contain brightness-[1.1] animate-rotate-bg" />
                    <img src="/Image/download__17_-removebg-preview 2.png" alt="Noodles" className="plate absolute top-1/2 left-1/2 -translate-x-[32%] -translate-y-[29%] w-full h-full z-10 object-contain filter transition-transform duration-700" />
                </div>

                {/* Main Center */}
                <div className="plate-group main w-full max-w-[480px] aspect-square relative mx-3 md:mx-12 lg:mx-20">
                    <img src="/Image/download-removebg-preview 6.png" className="rotating-bg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] opacity-40 pointer-events-none z-0 object-contain brightness-[1.1] animate-rotate-bg" />
                    <img src="/Image/download__15_-removebg-preview 1.png" alt="Thali" className="plate absolute top-1/2 left-1/2 -translate-x-[33%] -translate-y-[36%] w-full h-full z-10 object-contain filter transition-transform duration-700" />
                </div>

                {/* Side Right */}
                <div className="plate-group side-right w-full max-w-[280px] aspect-square relative">
                    <img src="/Image/download-removebg-preview 6.png" className="rotating-bg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] opacity-40 pointer-events-none z-0 object-contain brightness-[1.1] animate-rotate-bg" />
                    <img src="/Image/White_sause_pasta___-removebg-preview 1.png" alt="Pasta" className="plate absolute top-1/2 left-1/2 -translate-x-[42%] -translate-y-[27%] w-full h-full z-10 scale-115 object-contain filter transition-transform duration-700" />
                </div>
            </main>

            <div className="action-bar flex justify-center w-full -mt-2 md:-mt-6 mb-12 md:mb-20 px-4 relative z-20">
                <div
                    className="segmented-control grid grid-cols-2 bg-white/95 backdrop-blur-lg rounded-[50px] shadow-2xl relative border border-white/50 w-[clamp(280px,85vw,577px)] h-[clamp(54px,8vh,74px)] before:content-[''] before:absolute before:top-[clamp(4px,1vw,6px)] before:left-[5px] before:w-[calc(50%-5px)] before:h-[calc(100%-11px)] before:bg-gradient-to-br before:from-[#FF6C6C] before:via-[#FF6C6C] before:to-primary-red before:rounded-[50px] before:transition-transform duration-350 before:ease-[cubic-bezier(0.4,0,0.2,1)] before:shadow-[0_4px_15px_rgba(208,33,35,0.4)] before:z-0"
                    data-active={role}
                >
                    <style>{`
                        .segmented-control[data-active="vendor"]::before {
                            transform: translateX(100%);
                        }
                    `}</style>
                    <button
                        className={`relative z-10 w-full h-[calc(100%-11px)] mt-[clamp(4px,1vw,6px)] mx-auto flex items-center justify-center pt-2 translate-y-[2px] text-[clamp(10px,1.8vw,14px)] font-normal tracking-[0.1em] cursor-pointer transition-colors duration-300 rounded-[50px] whitespace-nowrap ${role === 'customer' ? 'text-white' : 'text-primary-red/80 hover:text-primary-red'}`}
                        onClick={() => setRole('customer')}
                    >
                        Join as Customer
                    </button>
                    <button
                        className={`relative z-10 w-full h-[calc(100%-11px)] mt-[clamp(4px,1vw,6px)] mx-auto flex items-center justify-center pt-2 translate-y-[2px] text-[clamp(10px,1.8vw,14px)] font-normal tracking-[0.1em] cursor-pointer transition-colors duration-300 rounded-[50px] whitespace-nowrap ${role === 'vendor' ? 'text-white' : 'text-primary-red/80 hover:text-primary-red'}`}
                        onClick={() => setRole('vendor')}
                    >
                        Register as Vendor
                    </button>
                </div>
            </div>


            <div className="home-bottom-group flex gap-3 md:gap-4 z-20 justify-center md:justify-end md:absolute md:bottom-8 md:right-10 mb-10 md:mb-0 px-4">
                <button className="w-[clamp(120px,12vw,157px)] h-[clamp(44px,5vh,55px)] border-[2px] md:border-[3px] border-white/60 hover:border-white bg-white/5 hover:bg-white/15 rounded-[50px] text-[clamp(0.6rem,1vw,0.9rem)] font-normal tracking-[0.08em] transition-all backdrop-blur-md shadow-xl text-white whitespace-nowrap flex items-center justify-center">About Us</button>
                <button className="w-[clamp(120px,12vw,157px)] h-[clamp(44px,5vh,55px)] border-[2px] md:border-[3px] border-white/60 hover:border-white bg-white/5 hover:bg-white/15 rounded-[50px] text-[clamp(0.6rem,1vw,0.9rem)] font-normal tracking-[0.08em] transition-all backdrop-blur-md shadow-xl text-white whitespace-nowrap flex items-center justify-center">Contact Us</button>
            </div>
        </div>
    )
}