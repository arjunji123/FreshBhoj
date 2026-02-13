
import '../styles/customer.css'

export function Customer() {
    return (
        <div className="customer-container">
            <div className="customer-main">
                <div className="customer-content">
                    <h1 className="customer-title">
                        Food You Can<br />
                        See Before You <br />
                        Order
                    </h1>

                    <button className="join-btn">
                        Join Early – Get Benefits
                    </button>
                </div>

                <div className="customer-image-slot">
                    <img
                        src="/Image/user_image_label.png"
                        alt="Customer Order Experience"
                        className="customer-illustration"
                    />
                </div>
            </div>

            <div className="customer-features">
                <div className="feature-card delay-1">
                    Early access & rewards
                </div>
                <div className="feature-card active delay-2">
                    Discover trending local food
                </div>
                <div className="feature-card delay-3">
                    Watch before you buy
                </div>
            </div>
        </div>
    )
}
