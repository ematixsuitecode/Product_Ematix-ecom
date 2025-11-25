import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                    <h4 className="text-white text-lg font-bold mb-4">EMATIX<span className="text-indigo-500">MARKET</span>.</h4>
                    <p className="text-sm leading-relaxed">The ultimate shopping experience combining speed, style, and savings. Your daily needs, fulfilled in minutes.</p>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4">Shop</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white transition">Electronics</a></li>
                        <li><a href="#" className="hover:text-white transition">Fashion</a></li>
                        <li><a href="#" className="hover:text-white transition">Home & Living</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4">Customer Care</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white transition">Track Order</a></li>
                        <li><a href="#" className="hover:text-white transition">Returns</a></li>
                        <li><a href="#" className="hover:text-white transition">FAQs</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4">Stay Connected</h4>
                    <div className="flex gap-2 mb-4">
                        <input type="email" placeholder="Enter your email" className="bg-gray-800 border-none rounded px-3 py-2 text-sm w-full" />
                        <button className="bg-indigo-600 text-white px-3 rounded hover:bg-indigo-500">Go</button>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
                <p>&copy; 2025 Ematix Inc. All rights reserved.</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <span className="hover:text-white cursor-pointer">Privacy Policy</span>
                    <span className="hover:text-white cursor-pointer">Terms of Service</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;