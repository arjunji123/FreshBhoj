import React from 'react';
import '../styles/vendor.css';

export const VendorForm: React.FC = () => {
    return (
        <div className="vendor-form-container">
            <h2 className="vendor-form-header">LIST YOUR KITCHEN ON FRESHBHOJ</h2>

            <div className="vendor-input-group">
                <input type="text" placeholder="Vendor Name (Kitchen / Tiffin Center / Restaurant)" className="vendor-input" />
                <input type="text" placeholder="Owner Name" className="vendor-input" />
                <input type="tel" placeholder="Mobile Number" className="vendor-input" />
                <input type="email" placeholder="Email ID" className="vendor-input" />
                <input type="text" placeholder="City" className="vendor-input" />
                <div className="vendor-select-container">
                    <label className="vendor-label">Vendor Type</label>
                    <select className="vendor-select">
                        <option>Home Kitchen</option>
                        <option>Tiffin Service</option>
                        <option>Restaurant</option>
                        <option>Café</option>
                    </select>
                </div>
            </div>

            <h3 className="form-section-title">FOOD & OPERATIONS</h3>
            <div className="vendor-input-group">
                <div className="vendor-row">
                    <div className="vendor-select-container">
                        <label className="vendor-label">Food Type</label>
                        <select className="vendor-select">
                            <option>Veg / Non-Veg / Both</option>
                            <option>Veg</option>
                            <option>Non-Veg</option>
                            <option>Both</option>
                        </select>
                    </div>
                    <div className="vendor-select-container">
                        <label className="vendor-label">What do you provide?</label>
                        <input type="text" placeholder="Fast Food" className="vendor-input" />
                    </div>
                </div>

                <div className="vendor-row">
                    <div className="vendor-select-container">
                        <label className="vendor-label">Average Price Range</label>
                        <input type="text" placeholder="100-200" className="vendor-input" />
                    </div>
                    <div className="vendor-select-container">
                        <label className="vendor-label">Do you offer subscriptions?</label>
                        <select className="vendor-select">
                            <option>Yes / No / Planning</option>
                            <option>Yes</option>
                            <option>No</option>
                            <option>Planning</option>
                        </select>
                    </div>
                </div>
            </div>

            <h3 className="form-section-title">HELP US UNDERSTAND YOUR SETUP</h3>
            <h4 className="form-section-subtitle">LEGAL & HYGIENE</h4>
            <div className="vendor-input-group">
                <div className="vendor-select-container">
                    <label className="vendor-label">FSSAI Registration</label>
                    <select className="vendor-select">
                        <option>Yes / Applied / Not yet</option>
                        <option>Yes</option>
                        <option>Applied</option>
                        <option>Not yet</option>
                    </select>
                </div>
                <input type="text" placeholder="FSSAI Number (Optional field)" className="vendor-input" />

                <div className="vendor-row">
                    <div className="vendor-select-container">
                        <label className="vendor-label">Local Municipal / Shop License</label>
                        <select className="vendor-select">
                            <option>Yes / No</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>
                    <div className="vendor-select-container">
                        <label className="vendor-label">GST Registration</label>
                        <select className="vendor-select">
                            <option>Yes / No</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>
                </div>

                <div className="vendor-select-container">
                    <label className="vendor-label">Kitchen Hygiene Status</label>
                    <input type="text" placeholder="Manual Entry" className="vendor-input" />
                </div>
            </div>

            <h3 className="form-section-title">DELIVERY & AVAILABILITY</h3>
            <div className="vendor-input-group">
                <div className="vendor-row">
                    <div className="vendor-select-container">
                        <label className="vendor-label">Delivery Method</label>
                        <select className="vendor-select">
                            <option>Self delivery</option>
                            <option>Partner delivery</option>
                            <option>Both</option>
                        </select>
                    </div>
                    <div className="vendor-select-container">
                        <label className="vendor-label">Service Timings</label>
                        <select className="vendor-select">
                            <option>Breakfast / Lunch / Dinner</option>
                            <option>Breakfast</option>
                            <option>Lunch</option>
                            <option>Dinner</option>
                            <option>All Day</option>
                        </select>
                    </div>
                </div>
                <div className="vendor-select-container">
                    <label className="vendor-label">How soon can you start after approval?</label>
                    <input type="text" placeholder="Immediately" className="vendor-input" />
                </div>
            </div>

            <h3 className="form-section-title">CONTENT & APP INTEREST</h3>
            <div className="vendor-input-group">
                <div className="vendor-select-container">
                    <label className="vendor-label">Are you interested in posting food videos/reels?</label>
                    <select className="vendor-select">
                        <option>Yes / No</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>
                <div className="vendor-select-container">
                    <label className="vendor-label">Do you have a smartphone to record food videos?</label>
                    <select className="vendor-select">
                        <option>Yes / No</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>
                <div className="vendor-select-container">
                    <label className="vendor-label">Why do you want to join FreshBhoj?</label>
                    <textarea placeholder="Message" className="vendor-textarea"></textarea>
                </div>
            </div>

            <button className="vendor-submit-btn">Submit</button>

            <img
                src="/Image/food_image_on_vendor_form.png"
                alt="Food Illustration"
                className="vendor-form-footer-img"
            />
        </div>
    );
};

export default VendorForm;
