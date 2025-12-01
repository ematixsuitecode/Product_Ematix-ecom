import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
            <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                
                {/* Column 1: Brand Info */}
                <div className="flex flex-col items-start">
                    <h4 className="text-white text-lg font-bold mb-4 flex items-center gap-1">
                        EMATIX<span className="text-indigo-500">MARKET</span>.
                    </h4>
                    <p className="text-sm leading-relaxed mb-4 max-w-xs">
                        The ultimate shopping experience combining speed, style, and savings. Your daily needs, fulfilled in minutes.
                    </p>
                </div>

                {/* Column 2: Shop Links */}
                <div>
                    <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Shop</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/electronics" className="hover:text-white transition-colors duration-200">Electronics</a></li>
                        <li><a href="/fashion-trends" className="hover:text-white transition-colors duration-200">Fashion</a></li>
                        <li><a href="/homes-furniture" className="hover:text-white transition-colors duration-200">Home & Living</a></li>
                        <li><a href="/grocery" className="hover:text-white transition-colors duration-200">Grocery</a></li>
                    </ul>
                </div>

                {/* Column 3: Customer Care */}
                <div>
                    <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Customer Care</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/track-order" className="hover:text-white transition-colors duration-200">Track Order</a></li>
                        <li><a href="/returns" className="hover:text-white transition-colors duration-200">Returns & Refunds</a></li>
                        <li><a href="/shipping" className="hover:text-white transition-colors duration-200">Shipping Info</a></li>
                        <li><a href="/faqs" className="hover:text-white transition-colors duration-200">FAQs</a></li>
                    </ul>
                </div>

                {/* Column 4: Newsletter */}
                <div>
                    <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Stay Connected</h4>
                    <p className="text-xs mb-3">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                    <div className="flex gap-2">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="bg-gray-800 border border-gray-700 text-white rounded px-3 py-2 text-sm w-full focus:outline-none focus:border-indigo-500 transition-colors" 
                        />
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded font-bold hover:bg-indigo-500 transition-colors shadow-lg">
                            Go
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="container mx-auto px-4 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs gap-4">
                <p>&copy; 2025 NovaMarket Inc. All rights reserved.</p>
                <div className="flex gap-6">
                    <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                    <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
                    <span className="hover:text-white cursor-pointer transition-colors">Cookie Policy</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;