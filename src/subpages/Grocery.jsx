import React from 'react';
import { Plus, Minus, Clock } from 'lucide-react';

// --- MOCK API DATA ---
const GROCERY_DATA = [
  { id: 1, name: "Fresh Organic Bananas", price: 1.29, unit: "bunch", image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=200&q=80" },
  { id: 2, name: "Whole Milk 1 Gallon", price: 3.49, unit: "gal", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=200&q=80" },
  { id: 3, name: "Farm Fresh Eggs", price: 4.99, unit: "dozen", image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=200&q=80" },
  { id: 4, name: "Avocado", price: 1.50, unit: "each", image: "https://images.unsplash.com/photo-1523049673856-606ae93a979b?auto=format&fit=crop&w=200&q=80" },
  { id: 5, name: "Sourdough Bread", price: 5.99, unit: "loaf", image: "https://images.unsplash.com/photo-1585478259539-e621db863425?auto=format&fit=crop&w=200&q=80" },
  { id: 6, name: "Red Apples", price: 2.99, unit: "lb", image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=200&q=80" },
  { id: 7, name: "Chicken Breast", price: 8.99, unit: "lb", image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=200&q=80" },
  { id: 8, name: "Basmati Rice", price: 12.99, unit: "5kg", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=200&q=80" }
];

const Grocery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
       {/* Delivery Banner */}
       <div className="bg-green-50 border border-green-200 p-4 rounded-xl mb-8 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
             <div className="bg-green-100 p-2 rounded-full text-green-700"><Clock className="w-5 h-5" /></div>
             <div>
                <p className="text-green-900 font-bold text-sm">Express Delivery in 15 Minutes</p>
                <p className="text-green-700 text-xs">Delivering fresh to <b>Chennai, 600028</b></p>
             </div>
          </div>
          <button className="text-green-700 font-bold text-sm hover:underline">Change</button>
       </div>
       
       <h1 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">Daily Essentials <span className="text-sm font-normal text-gray-400">({GROCERY_DATA.length} items)</span></h1>
       
       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {GROCERY_DATA.map(item => (
             <div key={item.id} className="border border-gray-100 p-4 rounded-xl hover:border-green-500 hover:shadow-lg cursor-pointer transition-all bg-white group flex flex-col h-full">
                <div className="h-28 bg-gray-50 rounded-lg mb-3 flex items-center justify-center p-2">
                   <img src={item.image} alt={item.name} className="h-full w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform" />
                </div>
                
                <div className="flex-1">
                   <h3 className="text-sm font-bold text-gray-800 leading-tight mb-1 line-clamp-2">{item.name}</h3>
                   <p className="text-xs text-gray-500 mb-3">{item.unit}</p>
                </div>

                <div className="flex items-center justify-between mt-auto">
                   <span className="font-bold text-gray-900">${item.price}</span>
                   <button className="border border-green-500 text-green-600 px-3 py-1 rounded text-xs font-bold hover:bg-green-50 uppercase">
                      Add
                   </button>
                </div>
             </div>
          ))}
       </div>
    </div>
  );
};

export default Grocery;