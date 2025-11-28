import React, { useState, useEffect, useMemo } from 'react';
import { 
  Filter, ChevronDown, Star, ShoppingCart, Heart, Search, X, ChevronRight, ChevronUp, Menu 
} from 'lucide-react';
import { Link } from 'react-router-dom'; 
// --- FIXED IMPORT PATH ---
import allProducts from '../data/product.json';

// --- CONSTANTS & HELPERS ---
const EXCHANGE_RATE = 84; 

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price * EXCHANGE_RATE);
};

export const FILTERS = {
  electronics: [
    { key: "brand", label: "Brand", type: "checkbox", values: ["Samsung", "Apple", "Xiaomi", "Realme", "OnePlus", "POCO", "Vivo", "Oppo"] },
    { key: "ram", label: "RAM", type: "checkbox", values: ["12 GB", "8 GB", "6 GB", "4 GB"] },
    { key: "internal_storage", label: "Internal Storage", type: "checkbox", values: ["256 GB", "128 GB", "64 GB", "32 GB"] },
    { key: "display", label: "Resolution Type", type: "checkbox", values: ["Full HD", "Full HD+ AMOLED Display", "Super Retina XDR", "Fluid AMOLED", "Super AMOLED"] },
    { key: "price", label: "Price", type: "price_range", min: 0, max: 200000 },
    { key: "rating", label: "Customer Ratings", type: "rating", values: ["4★ & above", "3★ & above"] }
  ]
};

const BannerSlider = () => {
  const banners = [
    "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1605901309584-818e25960b8f?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1600&q=80"
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(prev => (prev + 1) % banners.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[200px] md:h-[320px] bg-gray-900 mb-6 overflow-hidden group">
      {banners.map((src, idx) => (
        <img key={idx} src={src} alt="Banner" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${idx === current ? 'opacity-60 scale-105' : 'opacity-0 scale-100'}`} />
      ))}
      <div className="absolute inset-0 flex flex-col justify-center items-start container mx-auto px-4 md:px-8 z-10">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-2 drop-shadow-lg">BIG ELECTRONICS SALE</h2>
        <button className="bg-yellow-400 text-black px-6 py-2 md:px-8 md:py-3 rounded-sm font-bold hover:bg-yellow-500 transition shadow-lg uppercase text-sm tracking-wider">Shop Now</button>
      </div>
    </div>
  );
};

const FilterCheckbox = ({ label, checked, onChange }) => (
  <label className="flex items-center gap-3 cursor-pointer hover:text-blue-600 group py-1.5 transition-colors select-none">
    <div className={`w-4 h-4 border rounded-[2px] flex items-center justify-center transition-all duration-200 ${checked ? 'bg-blue-600 border-blue-600 scale-110' : 'border-gray-400 bg-white group-hover:border-blue-500'}`}>
      {checked && <div className="w-2 h-2 bg-white rounded-[1px]" />}
    </div>
    <input type="checkbox" className="hidden" checked={checked} onChange={onChange} />
    <span className={`text-sm ${checked ? 'font-bold text-gray-900' : 'text-gray-600'}`}>{label}</span>
  </label>
);

const CollapsibleFilter = ({ title, children, isOpenDefault = true }) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);
  return (
    <div className="border-b border-gray-200 py-4 first:pt-0">
      <button className="flex justify-between items-center w-full text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 hover:text-blue-600 transition-colors focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}><ChevronDown className="w-3 h-3" /></span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="space-y-1 pl-1 pt-1">{children}</div>
      </div>
    </div>
  );
};

const Electronics = () => {
  const rawProducts = useMemo(() => allProducts.filter(p => p.category === 'electronics'), []);
  const [filteredProducts, setFilteredProducts] = useState(rawProducts);
  const [activeFilters, setActiveFilters] = useState({});
  const [sortOrder, setSortOrder] = useState('popular');
  const [priceRange, setPriceRange] = useState(200000);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    let result = rawProducts;
    Object.keys(activeFilters).forEach(filterKey => {
      const selectedValues = activeFilters[filterKey];
      if (selectedValues && selectedValues.length > 0) {
        result = result.filter(product => {
          const directValue = product[filterKey];
          const specValue = product.specs ? product.specs[filterKey] : undefined;
          const checkMatch = (val) => selectedValues.some(sel => val && val.includes(sel));
          if (filterKey === 'rating') {
             const minRating = parseInt(selectedValues[0]); 
             return product.rating >= minRating;
          }
          return (directValue && selectedValues.includes(directValue)) || (specValue && checkMatch(specValue));
        });
      }
    });
    result = result.filter(p => (p.price * EXCHANGE_RATE) <= priceRange);
    
    if (sortOrder === 'lowToHigh') result.sort((a, b) => a.price - b.price);
    else if (sortOrder === 'highToLow') result.sort((a, b) => b.price - a.price);
    else if (sortOrder === 'newest') result.sort((a, b) => b.id - a.id);

    setFilteredProducts(result);
  }, [activeFilters, sortOrder, priceRange, rawProducts]);

  const handleFilterChange = (sectionKey, value) => {
    setActiveFilters(prev => {
      const current = prev[sectionKey] || [];
      const isSelected = current.includes(value);
      const updated = isSelected ? current.filter(i => i !== value) : [...current, value];
      if (sectionKey === 'rating') return { ...prev, [sectionKey]: [value] }; 
      return { ...prev, [sectionKey]: updated };
    });
  };

  const clearFilters = () => { setActiveFilters({}); setPriceRange(200000); };

  const FilterContent = () => (
    <>
        <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-3">
            <h3 className="font-bold text-lg text-gray-900">Filters</h3>
            <button onClick={clearFilters} className="text-xs text-blue-600 font-bold hover:underline uppercase transition-colors">Clear All</button>
        </div>
        {FILTERS.electronics.map((section) => (
            <div key={section.key}>
            {section.type === 'price_range' ? (
                <CollapsibleFilter title={section.label}>
                    <div className="px-2 py-2">
                        <input type="range" min="0" max="200000" step="1000" value={priceRange} onChange={(e) => setPriceRange(Number(e.target.value))} className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
                        <div className="flex justify-between text-xs text-gray-500 mt-2">
                            <span>₹0</span>
                            <span className="font-bold text-gray-900">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(priceRange)}+</span>
                        </div>
                    </div>
                </CollapsibleFilter>
            ) : (
                <CollapsibleFilter title={section.label}>
                    {section.values.map(opt => (
                    <FilterCheckbox key={opt} label={opt} checked={activeFilters[section.key]?.includes(opt) || false} onChange={() => handleFilterChange(section.key, opt)} />
                    ))}
                </CollapsibleFilter>
            )}
            </div>
        ))}
    </>
  );

  return (
    <div className="bg-white min-h-screen font-sans">
      <BannerSlider />
      <div className="container mx-auto px-4 pb-12 flex gap-6 relative">
        <aside className={`w-64 flex-shrink-0 hidden lg:block h-max sticky top-24 transition-all duration-300 ease-in-out`}>
          <div className="bg-white p-4 rounded-sm border border-gray-200 shadow-sm"><FilterContent /></div>
        </aside>

        <div className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${isMobileFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMobileFilterOpen(false)} />
        <div className={`fixed inset-y-0 left-0 w-[280px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${isMobileFilterOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                <h2 className="font-black text-xl text-gray-900">Filters</h2>
                <button onClick={() => setIsMobileFilterOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><X className="w-6 h-6 text-gray-500" /></button>
            </div>
            <div className="p-4 overflow-y-auto flex-1"><FilterContent /></div>
            <div className="p-4 border-t border-gray-100 bg-gray-50">
                <button onClick={() => setIsMobileFilterOpen(false)} className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md active:scale-95">Show Results</button>
            </div>
        </div>

        <main className="flex-1">
          <div className="bg-white p-3 mb-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center sticky top-[56px] z-20 sm:static shadow-sm sm:shadow-none transition-all duration-300">
             <div className="w-full sm:w-auto flex justify-between items-center mb-2 sm:mb-0 lg:hidden">
                <button onClick={() => setIsMobileFilterOpen(true)} className="flex items-center gap-2 text-sm font-bold text-gray-700 bg-gray-100 px-3 py-2 rounded-md hover:bg-gray-200 transition-colors active:scale-95"><Filter className="w-4 h-4" /> Filters</button>
                <span className="text-xs text-gray-500 font-medium ml-2">{filteredProducts.length} items</span>
             </div>
             <div className="text-sm text-gray-900 font-medium hidden lg:block"><span className="font-bold">{filteredProducts.length}</span> items found for "Electronics"</div>
             <div className="flex items-center gap-2 text-sm w-full sm:w-auto">
                <span className="text-gray-500 hidden sm:block">Sort By</span>
                <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="border-b border-gray-300 font-bold text-gray-900 bg-transparent focus:outline-none cursor-pointer py-1 hover:text-blue-600 transition-colors w-full sm:w-auto">
                   <option value="popular">Popularity</option>
                   <option value="lowToHigh">Price -- Low to High</option>
                   <option value="highToLow">Price -- High to Low</option>
                   <option value="newest">Newest First</option>
                </select>
             </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <Link to={`/electronics/product/${product.id}`} key={product.id} className="bg-white border border-gray-200 rounded-md p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative flex flex-col h-full cursor-pointer">
                  <div className="absolute top-3 right-3 z-10"><button className="text-gray-300 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-gray-50"><Heart className="w-5 h-5 fill-current" /></button></div>
                  <div className="aspect-square mb-4 relative overflow-hidden flex items-center justify-center p-2">
                    <img src={product.image} alt={product.name} loading="lazy" className="object-contain w-full h-full mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="text-[10px] font-bold text-gray-400 uppercase mb-1 tracking-wide">{product.brand}</div>
                    <h3 className="font-medium text-gray-900 text-sm leading-snug mb-1 hover:text-blue-600 cursor-pointer line-clamp-2 transition-colors" title={product.name}>{product.name}</h3>
                    {product.specs && (
                       <ul className="text-[10px] text-gray-500 list-disc list-inside mb-2 opacity-80">
                          {product.specs.ram && <li>{product.specs.ram} RAM</li>}
                          {product.specs.display && <li className="truncate">{product.specs.display}</li>}
                       </ul>
                    )}
                    <div className="flex items-center gap-2 mb-3">
                       <span className="bg-green-700 text-white text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5 shadow-sm">{product.rating} <Star className="w-2 h-2 fill-current" /></span>
                       <span className="text-xs text-gray-400 font-medium">({product.reviews?.toLocaleString()})</span>
                    </div>
                    <div className="mt-auto pt-2 flex justify-between items-end border-t border-gray-50">
                      <div className="flex flex-col">
                         <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-gray-900">{formatPrice(product.price)}</span>
                            {product.price > 500 && (<span className="text-xs text-gray-400 line-through text-gray-400">{formatPrice(product.price * 1.2)}</span>)}
                         </div>
                         <span className="text-[10px] text-green-600 font-bold flex items-center gap-1">Free delivery</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 bg-white rounded-lg border border-dashed border-gray-300 transition-all duration-500">
               <Search className="w-12 h-12 text-gray-300 mb-4" />
               <h3 className="text-xl font-bold text-gray-800 mb-2">No products found</h3>
               <button onClick={clearFilters} className="bg-blue-600 text-white px-6 py-2 rounded-sm font-bold hover:bg-blue-700 transition-colors shadow-md active:scale-95">Clear Filters</button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Electronics;