import React, { useState } from 'react';
import '../styles/AboutUs.css';
import VendorForm from './VendorForm';

interface RegistrationFormProps {
    initialRole?: 'customer' | 'vendor';
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ initialRole = 'customer' }) => {
    const [role, setRole] = useState(initialRole);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted for:', role);
    };

    return (
        <div className="flex flex-col items-center w-full">
            <h2 className="form-title">REGISTRATION FORM</h2>
            <p className="form-subtitle">Join early and help us build the best local food discovery.</p>

            <div className="form-tabs w-full max-w-[500px]">
                <button
                    className={`tab-btn ${role === 'customer' ? 'active' : ''}`}
                    onClick={() => setRole('customer')}
                >
                    Join as Customer
                </button>
                <button
                    className={`tab-btn ${role === 'vendor' ? 'active' : ''}`}
                    onClick={() => setRole('vendor')}
                >
                    Register as Vendor
                </button>
            </div>

            {role === 'customer' ? (
                <div className="registration-form-card">
                    <form onSubmit={handleSubmit} className="form-grid">
                        <input type="text" placeholder="Full Name" className="input-field" required />
                        <input type="tel" placeholder="Mobile Number" className="input-field" required />
                        <input type="email" placeholder="Email ID" className="input-field" required />

                        <div className="form-row">
                            <input type="text" placeholder="State" className="input-field" required />
                            <input type="text" placeholder="City" className="input-field" required />
                        </div>

                        <input type="text" placeholder="Area/Pincode" className="input-field" required />

                        <div className="form-row">
                            <select className="input-field" required>
                                <option value="">User Type</option>
                                <option value="individual">Individual</option>
                                <option value="organization">Organization</option>
                            </select>
                            <select className="input-field" required>
                                <option value="">Food Preference</option>
                                <option value="veg">Veg</option>
                                <option value="non-veg">Non-Veg</option>
                                <option value="both">Both</option>
                            </select>
                        </div>

                        <div className="form-row">
                            <input type="text" placeholder="Looking For" className="input-field" />
                            <div className="flex items-center gap-2 bg-[#e9ecef] rounded-lg px-4 h-[45px]">
                                <input type="checkbox" id="terms" className="w-4 h-4" />
                                <label htmlFor="terms" className="text-sm text-gray-600">Checkbox</label>
                            </div>
                        </div>

                        <button type="submit" className="submit-btn">Submit</button>
                    </form>
                </div>
            ) : (
                <VendorForm />
            )}

            {role === 'customer' && (
                <img
                    src="/Image/girl_image_on_user_form.png"
                    alt="illustration"
                    className="girl-illustration"
                />
            )}
        </div>
    );
};
