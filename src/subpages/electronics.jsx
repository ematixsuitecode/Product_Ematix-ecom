import React from 'react';
import { Filter, ChevronDown, Star, ShoppingCart, Heart } from 'lucide-react';

// --- MOCK API DATA (This mimics your future DB response) ---
const ELECTRONICS_DATA = [
  {
    id: 1,
    name: "Sony WH-1000XM5 Wireless",
    brand: "Sony",
    price: 348.00,
    rating: 4.8,
    reviews: 1250,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=600&q=80",
    tag: "Best Seller"
  },
  {
    id: 2,
    name: "Apple MacBook Air M2",
    brand: "Apple",
    price: 1199.00,
    rating: 4.9,
    reviews: 850,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4?auto=format&fit=crop&w=600&q=80",
    tag: "New Arrival"
  },
  {
    id: 3,
    name: "Samsung Galaxy S23 Ultra",
    brand: "Samsung",
    price: 1199.99,
    rating: 4.7,
    reviews: 2100,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&q=80",
    tag: "Sale"
  },
  {
    id: 4,
    name: "Logitech MX Master 3S",
    brand: "Logitech",
    price: 99.99,
    rating: 4.8,
    reviews: 3400,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=600&q=80",
    tag: null
  },
  {
    id: 5,
    name: "PlayStation 5 Console",
    brand: "Sony",
    price: 499.00,
    rating: 4.9,
    reviews: 5000,
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=600&q=80",
    tag: "Trending"
  },
  {
    id: 6,
    name: "Canon EOS R6 Mark II",
    brand: "Canon",
    price: 2499.00,
    rating: 4.6,
    reviews: 120,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
    tag: null
  },
  {
    id: 7,
    name: "iPad Pro 12.9-inch",
    brand: "Apple",
    price: 1099.00,
    rating: 4.8,
    reviews: 940,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80",
    tag: null
  },
  {
    id: 8,
    name: "JBL Flip 6 Speaker",
    brand: "JBL",
    price: 129.95,
    rating: 4.5,
    reviews: 670,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",
    tag: "Deal"
  }
];

const Electronics = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-gray-100 pb-4">
        <div>
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Department</span>
          <h1 className="text-3xl font-black text-gray-900">Electronics & Gadgets</h1>
          <p className="text-gray-500 text-sm mt-1">{ELECTRONICS_DATA.length} products found</p>
        </div>
        
        {/* Sort/Filter Toolbar */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-bold hover:border-indigo-500 hover:text-indigo-600 transition-colors bg-white">
            <Filter className="w-4 h-4" /> Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-bold hover:border-indigo-500 hover:text-indigo-600 transition-colors bg-white">
            Sort by: Popular <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {ELECTRONICS_DATA.map((product) => (
          <div key={product.id} className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group relative">
            
            {/* Hover Action: Wishlist */}
            <button className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:text-rose-500">
               <Heart className="w-4 h-4" />
            </button>

            {/* Image Container */}
            <div className="aspect-square bg-gray-50 rounded-lg mb-4 relative overflow-hidden">
               <img 
                 src={product.image} 
                 alt={product.name} 
                 className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" 
               />
               {product.tag && (
                 <span className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm text-[10px] font-bold px-2 py-1 rounded shadow-sm text-indigo-900 border border-indigo-50">
                   {product.tag}
                 </span>
               )}
            </div>

            {/* Product Details */}
            <div className="space-y-1">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">{product.brand}</span>
              <h3 className="font-bold text-gray-900 leading-tight group-hover:text-indigo-600 transition-colors line-clamp-2 min-h-[40px]">
                {product.name}
              </h3>
              
              {/* Rating */}
              <div className="flex items-center gap-1 text-yellow-400 text-xs py-1">
                 <Star className="w-3.5 h-3.5 fill-current" />
                 <span className="font-bold text-gray-700">{product.rating}</span>
                 <span className="text-gray-400 font-normal">({product.reviews})</span>
              </div>

              {/* Price & Add Button */}
              <div className="flex justify-between items-center pt-2 border-t border-gray-50 mt-2">
                <span className="font-black text-lg text-gray-900">${product.price}</span>
                <button className="flex items-center gap-1 text-xs bg-indigo-50 text-indigo-700 px-3 py-2 rounded-lg font-bold hover:bg-indigo-600 hover:text-white transition-all active:scale-95">
                   Add <ShoppingCart className="w-3 h-3" />
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Electronics;