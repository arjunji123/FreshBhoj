
import '../styles/vendor.css'

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
                    <h1 className="vendor-title">
                        Built for Local<br />
                        <span className="highlight-red">Food Vendors</span>
                    </h1>

                    <h2 className="vendor-subtitle">
                        Grow your food business by showcasing what you cook best.
                    </h2>

                    <p className="vendor-description">
                        FreshBhoj helps local food vendors reach nearby customers through short food videos.
                        Instead of relying on heavy marketing or complex systems, vendors can simply showcase their food,
                        attract attention, and connect with people who are actively looking for local meals.
                        The platform is designed to be simple, accessible, and focused on supporting real food businesses.
                    </p>

                    <button className="register-btn">
                        Register as a Vendor
                    </button>
                </div>
            </div>
        </div>
    )
}
