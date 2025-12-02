import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, ShoppingCart, User, MapPin, 
  Zap, Heart, Menu, ChevronDown, X 
} from 'lucide-react';

const CATEGORY_LINKS = [
  { name: "Electronics", path: "/electronics" },
  { name: "Fashion & Trends", path: "/fashion-trends" },
  { name: "Homes & Furniture", path: "/homes-furniture" },
  { name: "Tv's & Appliances", path: "/tvs-appliances" },
  { name: "Grocery", path: "/grocery" }
];

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white font-sans shadow-md transition-all duration-300">
      
      {/* 1. TOP STRIP (Hidden on small mobile for cleaner look, visible on md+) */}
      <div className="hidden md:flex bg-gray-50 text-gray-600 text-[11px] font-medium py-1.5 px-4 justify-between items-center border-b border-gray-200">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-indigo-700 font-bold bg-indigo-50 px-2 py-0.5 rounded-sm">
            <Zap className="w-3 h-3 fill-current" /> Brand Week
          </span>
          <span className="hidden lg:inline text-gray-500">
            Get extra 10% off on HDFC Cards • Ends in 12h 15m
          </span>
        </div>
        <div className="flex gap-5">
         <Link to="/sell" className="hover:text-indigo-600 transition-colors duration-200">Sell</Link>
         <Link to="/app" className="hover:text-indigo-600 transition-colors duration-200">Download App</Link>
         <Link to="/Help" className="hover:text-indigo-600 transition-colors duration-200">Help Center</Link> {/* UPDATED */}
       </div>
      </div>

      {/* 2. MAIN HEADER */}
      <div className="bg-white py-3 px-4 md:px-8 flex flex-wrap items-center justify-between gap-4 relative z-30">
        
        {/* Left: Mobile Menu Toggle & Logo */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2 cursor-pointer min-w-max group">
            <div className="bg-indigo-600 text-white p-1.5 rounded-lg shadow-md group-hover:bg-indigo-700 transition-colors">
              <Zap className="w-5 h-5 fill-current" />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tighter text-gray-900 group-hover:text-indigo-900 transition-colors">
              EMATIX<span className="text-indigo-500">MARKET</span>
            </span>
          </Link>
        </div>

        {/* Location Context (Tablet/Desktop Only) */}
        <div className="hidden md:flex flex-col leading-tight cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-all duration-200 group border border-transparent hover:border-gray-100 min-w-[140px]">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider group-hover:text-indigo-600 transition-colors">
            Delivering to
          </span>
          <div className="flex items-center gap-1 text-gray-700 font-bold text-sm truncate">
            <MapPin className="w-3.5 h-3.5 text-indigo-500 group-hover:animate-bounce shrink-0" />
            <span className="group-hover:text-gray-900 transition-colors truncate">Chennai, 600028</span>
            <ChevronDown className="w-3 h-3 text-gray-400 group-hover:text-gray-600 shrink-0" />
          </div>
        </div>

        {/* Search Engine (Full width on mobile, flexible on desktop) */}
        <div className="order-last md:order-none w-full md:flex-1 md:w-auto max-w-2xl relative z-20 mt-2 md:mt-0">
          <div className="relative group">
            <input 
              type="text" 
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search for products..." 
              className="w-full border-2 border-gray-100 bg-gray-50 py-2.5 pl-5 pr-12 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white focus:shadow-lg focus:shadow-indigo-500/10 transition-all duration-300 text-gray-700 font-medium placeholder-gray-400 text-sm md:text-base"
              aria-label="Search"
            />
            <button 
              className="absolute right-2 top-1.5 bg-indigo-50 text-indigo-600 p-1.5 rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 active:scale-95"
              aria-label="Submit Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Action Icons (Right Side) */}
        <div className="flex items-center gap-2 md:gap-4 lg:gap-6 text-gray-600">
          
          {/* Profile (Hidden on Mobile, shown in Drawer) */}
          <Link to="/profile" className="hidden md:flex flex-col items-center gap-0.5 cursor-pointer group hover:text-indigo-600 transition-colors p-2 rounded-lg hover:bg-indigo-50">
            <User className="w-6 h-6 stroke-[1.5]" />
            <span className="text-[10px] font-bold">Profile</span>
          </Link>

          {/* Wishlist */}
          <Link to="/wishlist" className="flex flex-col items-center gap-0.5 cursor-pointer group hover:text-rose-500 transition-colors p-2 rounded-lg hover:bg-rose-50 relative">
            <Heart className="w-6 h-6 stroke-[1.5]" />
            <span className="text-[10px] font-bold hidden md:block">Saved</span>
            {/* Notification Dot */}
            <span className="absolute top-1.5 right-1.5 md:top-2 md:right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
          </Link>

          {/* Cart - Always Visible */}
          <Link to="/cart" className="flex flex-col items-center gap-0.5 cursor-pointer group text-gray-900 transition-colors p-2 rounded-lg hover:bg-gray-100 relative">
            <ShoppingCart className="w-6 h-6 stroke-[1.5] group-hover:fill-gray-900 transition-colors" />
            <span className="text-[10px] font-bold hidden md:block">Cart</span>
            <span className="absolute -top-0.5 right-0.5 md:-top-0.5 md:right-0.5 bg-yellow-400 text-indigo-900 text-[10px] font-extrabold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm transform group-hover:scale-110 transition-transform">
              2
            </span>
          </Link>
        </div>
      </div>

      {/* 3. SUB-NAVBAR (Desktop/Tablet Only) */}
      <div className="hidden lg:block bg-indigo-900 text-white shadow-inner relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1 overflow-x-auto hide-scrollbar text-sm font-medium">
            
            {/* 'All Product' Dropdown Trigger */}
            <Link to="/products" className="flex items-center gap-2 py-3 px-3 mr-4 cursor-pointer hover:bg-white/10 transition-colors border-r border-indigo-800 pr-6 min-w-max group text-indigo-100 hover:text-white">
                <Menu className="w-5 h-5" />
                <span className="font-bold tracking-wide">All Categories</span>
                <ChevronDown className="w-3 h-3 text-indigo-300 group-hover:text-white transition-colors" />
            </Link>

            {/* Middle Quick Links */}
            <div className="flex items-center gap-1">
              {CATEGORY_LINKS.map((link, index) => (
                  <Link 
                    key={index} 
                    to={link.path} 
                    className="py-3 px-4 whitespace-nowrap text-indigo-100 hover:bg-white/10 hover:text-white transition-all rounded-md active:scale-95"
                  >
                      {link.name}
                  </Link>
              ))}
            </div>

            {/* 'Today's Special' Highlight */}
            <Link 
              to="/todays-special" 
              className="ml-auto py-3 px-4 whitespace-nowrap text-yellow-300 font-bold hover:bg-white/10 hover:text-yellow-200 transition-colors flex items-center gap-2 tracking-wide"
            >
                <Zap className="w-4 h-4 fill-current animate-pulse" />
                Today's Special
            </Link>

          </div>
        </div>
      </div>

      {/* --- MOBILE SIDE DRAWER (Overlay) --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          {/* Drawer Content */}
          <div className="absolute top-0 left-0 w-[80%] max-w-[300px] h-full bg-white shadow-2xl flex flex-col animate-slide-in-left">
            {/* Drawer Header */}
            <div className="bg-indigo-900 text-white p-4 flex justify-between items-center">
              <span className="font-bold text-lg flex items-center gap-2">
                <User className="w-5 h-5" /> Hello, Sign in
              </span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Drawer Links */}
            <div className="flex-1 overflow-y-auto py-2">
              <div className="px-4 py-2 border-b border-gray-100">
                <h4 className="font-bold text-gray-900 mb-2">Shop By Category</h4>
                <div className="space-y-1">
                  {CATEGORY_LINKS.map((link, idx) => (
                    <Link 
                      key={idx} 
                      to={link.path} 
                      className="block py-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 px-2 rounded-md transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="px-4 py-2 border-b border-gray-100">
                <h4 className="font-bold text-gray-900 mb-2">My Account</h4>
                <div className="space-y-1">
                  <Link to="/profile" className="block py-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 px-2 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>Your Profile</Link>
                  <Link to="/profile/orders" className="block py-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 px-2 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>Your Orders</Link>
                  <Link to="/wishlist" className="block py-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 px-2 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>Your Wishlist</Link>
                </div>
              </div>

              <div className="px-4 py-2">
                <h4 className="font-bold text-gray-900 mb-2">Help & Settings</h4>
                <div className="space-y-1">
                  <Link to="/Help" className="block py-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 px-2 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>Customer Service</Link>
                  <Link to="/sell" className="block py-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 px-2 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>Sell on NovaMarket</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </header>
  );
};

export default Navbar;