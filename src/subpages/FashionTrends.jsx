import React from 'react';
import { Filter, ChevronDown } from 'lucide-react';

const FashionTrends = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-gray-100 pb-4">
        <div>
          <span className="text-xs font-bold text-pink-600 uppercase tracking-wider">New Arrivals</span>
          <h1 className="text-3xl font-black text-gray-900">Fashion & Trends</h1>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-bold hover:border-gray-800 transition-colors">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="group cursor-pointer">
            <div className="aspect-[3/4] bg-gray-100 rounded-lg mb-3 overflow-hidden">
               <img src={`https://source.unsplash.com/random/400x600?fashion&sig=${item}`} alt="Fashion" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="font-bold text-gray-900">Trendy Outfit {item}</h3>
            <span className="text-sm font-bold text-gray-500">$49.99</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FashionTrends;