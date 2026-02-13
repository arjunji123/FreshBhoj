import '../styles/showcase.css'

export function Showcase() {
    return (
        <div className="showcase-container">
            <div className="showcase-content">
                <header className="showcase-header">
                    <h1 className="showcase-title">What Makes FreshBhoj Different</h1>
                    <p className="showcase-subtitle">
                        FreshBhoj is designed to highlight real local food and vendors, using visual discovery and fair systems
                        instead of mass-chain focused marketplaces.
                    </p>
                </header>

                <div className="showcase-timeline">
                    {/* Vertical line image */}
                    <img src="/Image/Frame 26080079.png" alt="" className="timeline-center-line" />

                    {/* Left Item 1 */}
                    <div className="timeline-item left">
                        <div className="timeline-card">
                            <img src="/Image/phone_showcase_image.png" alt="Food Reels Shopping" className="timeline-image" />
                            <h3 className="timeline-label">Food Reels Shopping</h3>
                        </div>
                        <img src="/Image/Vector 1@2x.png" alt="" className="timeline-connector-img left-connector" />
                    </div>

                    {/* Right Item 1 */}
                    <div className="timeline-item right">
                        <img src="/Image/Vector 4.png" alt="" className="timeline-connector-img right-connector" />
                        <div className="timeline-card">
                            <img src="/Image/dish_showcase_image.png" alt="Local Vendor-First Platform" className="timeline-image" />
                            <h3 className="timeline-label">Local Vendor-First Platform</h3>
                        </div>
                    </div>

                    {/* Left Item 2 */}
                    <div className="timeline-item left">
                        <div className="timeline-card">
                            <img src="/Image/Bustling Street Food 1.png" alt="Fresh, Made-to-Order Food" className="timeline-image" />
                            <h3 className="timeline-label">Fresh, Made-to-Order Food</h3>
                        </div>
                        <img src="/Image/Vector 1@2x.png" alt="" className="timeline-connector-img left-connector" />
                    </div>

                    {/* Right Item 2 */}
                    <div className="timeline-item right">
                        <img src="/Image/Vector 4.png" alt="" className="timeline-connector-img right-connector" />
                        <div className="timeline-card">
                            <img src="/Image/balance_image.png" alt="Fair & Sustainable Commission Model" className="timeline-image" />
                            <h3 className="timeline-label">Fair & Sustainable Commission Model</h3>
                        </div>
                    </div>

                    {/* Left Item 3 */}
                    <div className="timeline-item left">
                        <div className="timeline-card">
                            <img src="/Image/location_image.png" alt="Hyper-Local Food Discovery" className="timeline-image" />
                            <h3 className="timeline-label">Hyper-Local Food Discovery</h3>
                        </div>
                        <img src="/Image/Vector 1@2x.png" alt="" className="timeline-connector-img left-connector" />
                    </div>

                    {/* Right Item 3 */}
                    <div className="timeline-item right">
                        <img src="/Image/Vector 4.png" alt="" className="timeline-connector-img right-connector" />
                        <div className="timeline-card">
                            <img src="/Image/selllers_image.png" alt="Verified Local Sellers" className="timeline-image" />
                            <h3 className="timeline-label">Verified Local Sellers</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
