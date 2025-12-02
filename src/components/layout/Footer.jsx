import React, { useState } from 'react';
import { 
  Facebook, Twitter, Instagram, Youtube, 
  ChevronDown, ChevronUp, ArrowRight, Smartphone, 
  MapPin, Mail, Phone, CreditCard 
} from 'lucide-react';

const FooterSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800 md:border-none last:border-none">
      <button 
        className="flex justify-between items-center w-full py-4 md:py-0 md:mb-4 text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="text-white font-bold text-base tracking-wide group-hover:text-indigo-400 transition-colors">
          {title}
        </h4>
        <div className="md:hidden text-gray-500">
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>
      
      {/* Mobile: Animated Collapse / Desktop: Always Visible */}
      <div className={`overflow-hidden transition-all duration-300 md:h-auto md:opacity-100 ${isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0 md:max-h-none'}`}>
        {children}
      </div>
    </div>
  );
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-gray-400 font-sans border-t border-gray-800">
      
      {/* 1. Back to Top Button */}
      <button 
        onClick={scrollToTop} 
        className="w-full bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold py-4 transition-colors flex justify-center items-center gap-2 tracking-widest uppercase border-b border-gray-800"
      >
        <ChevronUp className="w-3 h-3" /> Back to top
      </button>

      {/* 2. Main Footer Content */}
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Brand Column (Always Visible) */}
          <div className="space-y-6">
            <div>
              <span className="text-2xl font-black tracking-tighter text-white">
                EMATIX<span className="text-indigo-500">MARKET</span>
              </span>
              <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-xs">
                Your one-stop destination for premium electronics, fashion, and lifestyle products. Delivered with speed and care.
              </p>
            </div>
            
            <div className="flex gap-4">
               {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                 <a key={i} href="#" className="bg-gray-900 p-2.5 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-300 border border-gray-800 hover:border-indigo-500">
                   <Icon className="w-4 h-4" />
                 </a>
               ))}
            </div>
          </div>

          {/* Accordion Columns */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">
            <FooterSection title="Shop & Categories">
              <ul className="space-y-3 text-sm">
                {['Electronics', 'Fashion Trends', 'Home & Furniture', 'Grocery Essentials', 'New Arrivals', 'Best Sellers'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-indigo-400 hover:translate-x-1 transition-all inline-block">{item}</a>
                  </li>
                ))}
              </ul>
            </FooterSection>

            <FooterSection title="Customer Support">
              <ul className="space-y-3 text-sm">
                {['Track Order', 'Shipping Policy', 'Returns & Refunds', 'Help Centre', 'Terms of Service', 'Privacy Policy'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-indigo-400 hover:translate-x-1 transition-all inline-block">{item}</a>
                  </li>
                ))}
              </ul>
            </FooterSection>
          </div>

          {/* Newsletter Column (Always Visible) */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 tracking-wide">Stay Updated</h4>
            <p className="text-sm text-gray-500 mb-4">Subscribe to our newsletter for exclusive deals.</p>
            
            <div className="relative mb-8">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-gray-900 text-white border border-gray-800 rounded-lg py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-indigo-600 transition-colors"
              />
              <button className="absolute right-1 top-1 bg-indigo-600 hover:bg-indigo-500 text-white p-2 rounded-md transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <h5 className="text-white text-xs font-bold uppercase tracking-wider mb-3">Download App</h5>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 border border-gray-800 py-2 rounded-lg transition-colors group">
                <Smartphone className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                <div className="text-left">
                  <div className="text-[8px] text-gray-500 uppercase leading-none">Get it on</div>
                  <div className="text-[10px] font-bold text-white">Google Play</div>
                </div>
              </button>
              <button className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 border border-gray-800 py-2 rounded-lg transition-colors group">
                <Smartphone className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                <div className="text-left">
                  <div className="text-[8px] text-gray-500 uppercase leading-none">Download on</div>
                  <div className="text-[10px] font-bold text-white">App Store</div>
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Bottom Bar */}
      <div className="border-t border-gray-900 bg-black/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
            <p>&copy; 2025 NovaMarket Inc. All rights reserved.</p>
            
            <div className="flex items-center gap-4">
               <div className="flex items-center gap-2 opacity-60 grayscale hover:grayscale-0 transition-all">
                  <CreditCard className="w-5 h-5" />
                  <span className="font-semibold">Secure Payments</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;