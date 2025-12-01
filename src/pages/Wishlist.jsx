import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingCart, Star } from 'lucide-react';
import allProducts from '../data/product.json';

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price * 84);
};

const Wishlist = () => {
  // Simulating wishlist with a few items
  const [wishlistItems, setWishlistItems] = useState([
    allProducts[1], 
    allProducts[4], 
    allProducts[8] 
  ].filter(Boolean)); // filter(Boolean) removes undefined if index is out of bounds

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 text-center">
        <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-4">
           <Heart className="w-10 h-10 text-red-500 fill-current" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Wishlist is Empty</h2>
        <p className="text-gray-500 mb-6">Save items you love to buy later.</p>
        <Link to="/" className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-indigo-700 transition">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen font-sans pb-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">My Wishlist ({wishlistItems.length})</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow group relative flex flex-col">
              
              {/* Remove Button */}
              <button 
                onClick={() => removeFromWishlist(item.id)}
                className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition shadow-sm border border-gray-100"
              >
                <Trash2 className="w-4 h-4" />
              </button>

              <Link to={`/products/${item.id}`} className="block relative aspect-square mb-4 overflow-hidden rounded-lg bg-gray-50 p-4">
                 <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform" />
              </Link>

              <div className="flex-1 flex flex-col">
                <div className="mb-1">
                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{item.brand}</span>
                   <Link to={`/products/${item.id}`} className="block text-sm font-bold text-gray-900 leading-snug hover:text-blue-600 transition line-clamp-2 mb-1">
                      {item.name}
                   </Link>
                </div>

                <div className="flex items-center gap-1 mb-3">
                   <div className="flex text-yellow-400 text-xs">
                      {[...Array(5)].map((_, i) => (
                         <Star key={i} className={`w-3 h-3 ${i < Math.floor(item.rating) ? 'fill-current' : 'text-gray-300'}`} />
                      ))}
                   </div>
                   <span className="text-xs text-gray-400">({item.reviews})</span>
                </div>

                <div className="mt-auto pt-3 border-t border-gray-50 flex items-center justify-between">
                   <div className="flex flex-col">
                      <span className="text-lg font-bold text-gray-900">{formatPrice(item.price)}</span>
                      {item.price > 500 && <span className="text-xs text-gray-400 line-through">{formatPrice(item.price * 1.2)}</span>}
                   </div>
                   <button className="bg-black text-white p-2.5 rounded-lg hover:bg-gray-800 transition active:scale-95 shadow-md">
                      <ShoppingCart className="w-4 h-4" />
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Simple Heart Icon for the empty state
const Heart = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
);

export default Wishlist;