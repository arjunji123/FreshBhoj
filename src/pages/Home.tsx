import { useState } from 'react'
import '../styles/Home.css'


export function Home() {
    const [role, setRole] = useState<'customer' | 'vendor'>('customer');

    return (
        <div className="home-container">

            <header className="page-header">
                <div className="title-row">
                    <div className="header-line"></div>
                    <img src="/Image/FreshBhoj.svg" alt="FreshBhoj Logo" className="logo-img" />
                    <div className="header-line"></div>
                </div>
                <p className="home-description">
                    Not delivered fast — delivered right.
                </p>
            </header>


            <main className="hero-dishes">
                <div className="plates-wrapper">
                    <div className="plate-inner">
                        <div className="plate-group side-left">
                            <img src="/Image/download-removebg-preview 6.png" className="rotating-bg" />
                            <img src="/Image/download__17_-removebg-preview 2.png" alt="Noodles" className="plate side-plate" />
                        </div>
                        <div className="plate-group main">
                            <img src="/Image/download-removebg-preview 6.png" className="rotating-bg" />
                            <img src="/Image/download__15_-removebg-preview 1.png" alt="Thali" className="plate main-plate" />
                        </div>
                        <div className="plate-group side-right">
                            <img src="/Image/download-removebg-preview 6.png" className="rotating-bg" />
                            <img src="/Image/White_sause_pasta___-removebg-preview 1.png" alt="Pasta" className="plate side-plate" />
                        </div>
                    </div>
                </div>
            </main>


            <div className="action-bar">
                <div className="segmented-control">
                    <button
                        className={`segment-btn ${role === 'customer' ? 'active' : 'inactive'}`}
                        onClick={() => setRole('customer')}
                    >
                        Join as Customer
                    </button>
                    <button
                        className={`segment-btn ${role === 'vendor' ? 'active' : 'inactive'}`}
                        onClick={() => setRole('vendor')}
                    >
                        Register as Vendor
                    </button>
                </div>
            </div>


            <div className="home-bottom-group">
                <button className="home-bottom-btn">About Us</button>
                <button className="home-bottom-btn">Contact Us</button>
            </div>
        </div>
    )
}
