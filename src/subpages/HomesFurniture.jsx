import React from 'react';

const HomesFurniture = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-orange-50 rounded-2xl p-8 mb-8 flex items-center justify-between">
         <div>
            <h1 className="text-4xl font-black text-orange-900 mb-2">Home & Living</h1>
            <p className="text-orange-700">Upgrade your space with our premium collection.</p>
         </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {/* Simple placeholder content */}
         <div className="p-12 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center text-gray-400 font-bold">
            Living Room Collection
         </div>
         <div className="p-12 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center text-gray-400 font-bold">
            Bedroom Essentials
         </div>
         <div className="p-12 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center text-gray-400 font-bold">
            Kitchen & Dining
         </div>
      </div>
    </div>
  );
};

export default HomesFurniture;