import { useState } from 'react'

export function Home() {
    const [role, setRole] = useState<'customer' | 'vendor'>('customer');

    return (
        <div className="home-container min-h-[85vh] lg:min-h-[90vh] flex flex-col items-center justify-center text-white relative overflow-hidden px-4 md:px-8 lg:px-16 py-8 md:py-16 bg-primary-red [background-image:radial-gradient(circle_at_50%_30%,_rgba(255,107,107,0.4)_0%,_transparent_70%),linear-gradient(135deg,_theme(colors.light-red)_0%,_theme(colors.primary-red)_63%),url('data:image/svg+xml,%3Csvg_viewBox=%220_0_200_200%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22noise%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%220.65%22_numOctaves=%223%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23noise)%22/%3E%3C/svg%3E')] [background-blend-mode:soft-light,normal,overlay]">

            <header className="page-header w-full flex flex-col items-center mb-6 md:mb-10">
                <div className="title-row flex items-center justify-center w-full max-w-[1400px] gap-6 md:gap-12 lg:gap-16 mb-4 md:mb-6 px-4 [font-family:'Cinzel_Decorative',cursive]">
                    <div className="header-line flex-1 h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent hidden sm:block"></div>
                    <img
                        src="/Image/FreshBhoj.svg"
                        alt="FreshBhoj Logo"
                        className="logo-img h-12 md:h-20 lg:h-28 object-contain filter drop-shadow-xl transition-transform duration-300 hover:scale-105"
                    />
                    <div className="header-line flex-1 h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent hidden sm:block"></div>
                </div>
                <p className="home-description text-sm md:text-base lg:text-2xl font-light tracking-[0.05em] text-center opacity-90 max-w-[800px]">
                    <pre>
                        W h e r e  f o o d  d i s c o v e r y  m e e t s  d e l i v e r y.
                    </pre>
                </p>
            </header>


            <main className="hero-dishes flex flex-row flex-nowrap justify-center items-center w-full max-w-[1440px] px-2 md:px-8 relative mt-6 mb-12 md:my-12 lg:my-16 before:content-[''] before:absolute before:inset-0 before:bg-white/5 before:backdrop-blur-sm before:rounded-[100px] before:-z-10 before:[mask-image:radial-gradient(circle,black,transparent_70%)] overflow-visible">
                {/* Side Left */}
                <div className="plate-group side-left w-20 h-20 md:w-44 md:h-44 lg:w-[320px] lg:h-[320px] aspect-square relative flex-shrink-0">
                    <img src="/Image/download-removebg-preview 6.png" className="rotating-bg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] opacity-40 pointer-events-none z-0 object-contain brightness-[1.1] animate-rotate-bg" />
                    <img src="/Image/download__17_-removebg-preview 2.png" alt="Noodles" className="plate absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-10 object-contain filter transition-transform duration-700 ml-12 mt-16" />
                </div>

                {/* Main Center */}
                <div className="plate-group main w-32 h-32 md:w-72 md:h-72 lg:w-[540px] lg:h-[540px] aspect-square relative mx-3 md:mx-12 lg:mx-20 flex-shrink-0">
                    <img src="/Image/download-removebg-preview 6.png" className="rotating-bg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] opacity-40 pointer-events-none z-0 object-contain brightness-[1.1] animate-rotate-bg" />
                    <img src="/Image/download__15_-removebg-preview 1.png" alt="Thali" className="plate absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-10 object-contain filter transition-transform duration-700 ml-23 mt-16" />
                </div>

                {/* Side Right */}
                <div className="plate-group side-right w-20 h-20 md:w-44 md:h-44 lg:w-[320px] lg:h-[320px] aspect-square relative flex-shrink-0">
                    <img src="/Image/download-removebg-preview 6.png" className="rotating-bg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] opacity-40 pointer-events-none z-0 object-contain brightness-[1.1] animate-rotate-bg" />
                    <img src="/Image/White_sause_pasta___-removebg-preview 1.png" alt="Pasta" className="plate absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-10 scale-115 object-contain filter transition-transform duration-700 ml-8 mt-16" />
                </div>
            </main>


            <div className="action-bar flex justify-center w-full mt-4 md:mt-8 mb-12 md:mb-20">
                <div className="segmented-control flex p-1 md:p-2 bg-white/95 backdrop-blur-lg rounded-full shadow-2xl relative border border-white/50 before:content-[''] before:absolute before:top-2 before:left-2 before:w-[calc(50%-8px)] before:h-[calc(100%-16px)] before:bg-gradient-to-br before:from-[#FF6C6C] before:via-[#FF6C6C] before:to-primary-red before:rounded-full before:transition-transform duration-350 before:ease-[cubic-bezier(0.4,0,0.2,1)] before:shadow-[0_4px_15px_rgba(208,33,35,0.4)] before:z-0 md:before:top-1 md:before:left-1 md:before:w-[calc(50%-4px)] md:before:h-[calc(100%-8px)]" data-active={role}>
                    <style>{`
                        .segmented-control[data-active="vendor"]::before {
                            transform: translateX(100%);
                        }
                    `}</style>
                    <button
                        className={`px-6 md:px-12 py-2.5 md:py-4 text-sm md:text-lg font-medium tracking-wide cursor-pointer transition-colors duration-300 rounded-full flex-1 whitespace-nowrap z-10 ${role === 'customer' ? 'text-white' : 'text-primary-red'}`}
                        onClick={() => setRole('customer')}
                    >
                        Join as Customer
                    </button>
                    <button
                        className={`px-6 md:px-12 py-2.5 md:py-4 text-sm md:text-lg font-medium tracking-wide cursor-pointer transition-colors duration-300 rounded-full flex-1 whitespace-nowrap z-10 ${role === 'vendor' ? 'text-white' : 'text-primary-red'}`}
                        onClick={() => setRole('vendor')}
                    >
                        Register as Vendor
                    </button>
                </div>
            </div>


            <div className="home-bottom-group absolute bottom-12 right-16 flex gap-4 md:gap-8 z-20 mt-8 md:mt-0">
                <button className="px-8 md:px-10 py-3 md:py-4 border-2 border-white/40 bg-white/10 hover:bg-white/30 hover:border-white rounded-full text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase transition-all backdrop-blur-lg shadow-xl text-white">About Us</button>
                <button className="px-8 md:px-10 py-3 md:py-4 border-2 border-white/40 bg-white/10 hover:bg-white/30 hover:border-white rounded-full text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase transition-all backdrop-blur-lg shadow-xl text-white">Contact Us</button>
            </div>
        </div>
    )
}
