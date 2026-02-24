import { useState } from 'react'
import '../styles/Home.css'


export function Home() {
    const [role, setRole] = useState<'customer' | 'vendor'>('customer');

    return (
        <div className="home-container min-h-screen grid grid-rows-[auto_1fr_auto_auto] items-center text-white relative overflow-hidden">

            {/* ── HEADER ── */}
            {/* FIX: was mb-[1.2vw] — vw doesn't work in Tailwind arbitrary, now in .page-header CSS */}
            <header className="page-header">

                <div className="title-row grid grid-cols-[1fr_auto_1fr] items-center w-full">
                    <div className="w-full h-px bg-white/30" />

                    <div className="logo-wrapper flex-shrink-0">
                        <img
                            src="/Image/FreshBhoj.svg"
                            alt="FreshBhoj Logo"
                            className="logo-img w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
                        />
                    </div>

                    <div className="w-full h-px bg-white/30" />
                </div>

                <p className="home-description font-light tracking-[0.05em] text-center opacity-95 leading-relaxed">
                    Not delivered fast—delivered right.
                </p>

            </header>


            <main className="hero-dishes grid grid-cols-[1fr_1.5fr_1fr] items-center justify-items-center w-full relative overflow-visible">

                {/* Side — left */}
                <div className="plate-group-side aspect-square relative">
                    <img
                        src="/Image/download-removebg-preview 6.png"
                        className="rotating-bg"
                        alt=""
                        aria-hidden="true"
                    />
                    <img
                        src="/Image/download__17_-removebg-preview 2.png"
                        alt="Noodles"
                        className="absolute top-1/2 left-1/2 -translate-x-[32%] -translate-y-[29%] w-full h-full z-10 object-contain transition-transform duration-700"
                    />
                </div>

                {/* Main — center */}
                {/* FIX: no margin class here — CSS margin was fighting justify-items-center */}
                <div className="plate-group-main aspect-square relative">
                    <img
                        src="/Image/download-removebg-preview 6.png"
                        className="rotating-bg"
                        alt=""
                        aria-hidden="true"
                    />
                    <img
                        src="/Image/download__15_-removebg-preview 1.png"
                        alt="Thali"
                        className="absolute top-1/2 left-1/2 -translate-x-[33%] -translate-y-[36%] w-full h-full z-10 object-contain transition-transform duration-700"
                    />
                </div>

                {/* Side — right */}
                <div className="plate-group-side aspect-square relative">
                    <img
                        src="/Image/download-removebg-preview 6.png"
                        className="rotating-bg"
                        alt=""
                        aria-hidden="true"
                    />
                    <img
                        src="/Image/White_sause_pasta___-removebg-preview 1.png"
                        alt="Pasta"
                        className="absolute top-1/2 left-1/2 -translate-x-[42%] -translate-y-[27%] w-full h-full z-10 scale-115 object-contain transition-transform duration-700"
                    />
                </div>

            </main>


            <div className="action-bar flex justify-center w-full relative z-20">
                <div
                    className="segmented-control grid grid-cols-2 bg-white/95 backdrop-blur-lg relative border border-white/50"
                    data-active={role}
                >
                    {/* FIX: replaced text-primary-red (broken token) with .seg-btn.active/.inactive in CSS */}
                    <button
                        className={`seg-btn relative z-10 w-full h-full flex items-center justify-center font-normal tracking-[0.1em] cursor-pointer whitespace-nowrap border-none bg-transparent transition-colors duration-300 ${role === 'customer' ? 'active' : 'inactive'}`}
                        onClick={() => setRole('customer')}
                    >
                        Join as Customer
                    </button>
                    <button
                        className={`seg-btn relative z-10 w-full h-full flex items-center justify-center font-normal tracking-[0.1em] cursor-pointer whitespace-nowrap border-none bg-transparent transition-colors duration-300 ${role === 'vendor' ? 'active' : 'inactive'}`}
                        onClick={() => setRole('vendor')}
                    >
                        Register as Vendor
                    </button>
                </div>
            </div>

            {/* ── BOTTOM GHOST BUTTONS ── */}
            {/* position/gap/bottom/right all handled by .home-bottom-group in CSS */}
            <div className="home-bottom-group flex absolute z-20">
                <button
                    className="ghost-btn border-white/60 hover:border-white bg-white/5 hover:bg-white/15 text-white whitespace-nowrap flex items-center justify-center backdrop-blur-md transition-all font-normal tracking-[0.08em]"
                    onClick={() => document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    About Us
                </button>
                <button className="ghost-btn border-white/60 hover:border-white bg-white/5 hover:bg-white/15 text-white whitespace-nowrap flex items-center justify-center backdrop-blur-md transition-all font-normal tracking-[0.08em]">
                    Contact Us
                </button>
            </div>

        </div>
    )
}
