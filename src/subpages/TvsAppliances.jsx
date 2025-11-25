import React from 'react';

const TvsAppliances = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-black text-gray-900 mb-6">TVs & Home Appliances</h1>
      <p className="text-gray-500 mb-8">Smart TVs, Washing Machines, ACs and more.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white shadow-sm border border-gray-200 rounded-xl p-6">
            <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400">
               Product Image
            </div>
            <h3 className="text-xl font-bold text-gray-800">Smart Appliance {item}</h3>
            <p className="text-gray-500 text-sm mb-4">Energy efficient, AI enabled.</p>
            <button className="w-full bg-gray-900 text-white py-2 rounded-lg font-bold">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TvsAppliances;