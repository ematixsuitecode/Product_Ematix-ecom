import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, MapPin, CreditCard, Truck, ShieldCheck, 
  ChevronRight, Edit2, Plus, Lock 
} from 'lucide-react';
import allProducts from '../data/product.json';

// --- HELPER: Currency ---
const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price * 84);
};

const Checkout = () => {
  // Mock Cart Items (In a real app, this comes from Context/Redux)
  const cartItems = [
    { ...allProducts[0], quantity: 1 }, 
    { ...allProducts[6], quantity: 2 }
  ];

  // State for Accordion/Steps
  const [activeStep, setActiveStep] = useState(1); // 1: Address, 2: Payment
  const [selectedAddress, setSelectedAddress] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('card');

  // Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discount = subtotal * 0.1;
  const total = subtotal - discount;

  // Mock Addresses
  const addresses = [
    { id: 1, type: "Home", name: "John Doe", text: "Flat 402, Sunshine Apts, Anna Nagar, Chennai - 600040", phone: "9876543210" },
    { id: 2, type: "Work", name: "John Doe", text: "Ematix Solutions, Tech Park, OMR, Chennai - 600119", phone: "9876543210" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans pb-24">
      
      {/* Header (Minimal for Checkout) */}
      <div className="bg-white sticky top-0 z-30 border-b border-gray-200 px-4 py-4 shadow-sm">
        <div className="container mx-auto max-w-5xl flex items-center justify-between">
           <div className="flex items-center gap-2">
              <Link to="/cart" className="text-gray-500 hover:text-black transition flex items-center gap-1 text-sm font-medium">
                 <ChevronRight className="w-4 h-4 rotate-180" /> Back
              </Link>
              <h1 className="text-lg font-bold text-gray-900 ml-2">Checkout</h1>
           </div>
           <div className="flex items-center gap-1 text-green-600 text-xs font-bold bg-green-50 px-2 py-1 rounded">
              <ShieldCheck className="w-3 h-3" /> 100% Secure
           </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* --- LEFT: CHECKOUT STEPS (8 Cols) --- */}
          <div className="lg:col-span-8 space-y-4">
            
            {/* STEP 1: LOGIN (Completed) */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-center justify-between shadow-sm">
               <div className="flex items-center gap-3">
                  <span className="bg-gray-100 text-gray-500 font-bold w-6 h-6 flex items-center justify-center rounded text-xs">1</span>
                  <div>
                     <h3 className="text-gray-500 font-bold text-sm uppercase">Login</h3>
                     <p className="text-gray-900 font-medium text-sm flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" /> John Doe <span className="text-gray-400">+91 9876543210</span>
                     </p>
                  </div>
               </div>
               <button className="text-blue-600 text-xs font-bold uppercase hover:underline">Change</button>
            </div>

            {/* STEP 2: DELIVERY ADDRESS */}
            <div className={`bg-white rounded-xl border transition-all ${activeStep === 1 ? 'border-indigo-600 shadow-md ring-1 ring-indigo-50' : 'border-gray-200 shadow-sm'}`}>
               <div className="p-4 flex items-center gap-3 border-b border-gray-100" onClick={() => setActiveStep(1)}>
                  <span className={`font-bold w-6 h-6 flex items-center justify-center rounded text-xs ${activeStep === 1 ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-500'}`}>2</span>
                  <h3 className={`font-bold text-sm uppercase ${activeStep === 1 ? 'text-indigo-900' : 'text-gray-500'}`}>Delivery Address</h3>
               </div>
               
               {activeStep === 1 && (
                 <div className="p-4 space-y-3">
                    {addresses.map((addr) => (
                       <div 
                         key={addr.id} 
                         onClick={() => setSelectedAddress(addr.id)}
                         className={`p-4 rounded-lg border cursor-pointer flex items-start gap-3 transition-all ${selectedAddress === addr.id ? 'border-indigo-600 bg-indigo-50/30' : 'border-gray-200 hover:border-gray-300'}`}
                       >
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center mt-0.5 ${selectedAddress === addr.id ? 'border-indigo-600' : 'border-gray-400'}`}>
                             {selectedAddress === addr.id && <div className="w-2 h-2 bg-indigo-600 rounded-full" />}
                          </div>
                          <div className="flex-1">
                             <div className="flex justify-between">
                                <span className="font-bold text-gray-900 text-sm flex items-center gap-2">
                                   {addr.name} <span className="bg-gray-100 text-gray-600 text-[10px] px-1.5 py-0.5 rounded uppercase">{addr.type}</span>
                                </span>
                                <button className="text-blue-600 text-xs font-bold uppercase hover:underline">Edit</button>
                             </div>
                             <p className="text-sm text-gray-600 mt-1">{addr.text}</p>
                             <p className="text-sm text-gray-600 font-medium mt-1">Mobile: {addr.phone}</p>
                             
                             {selectedAddress === addr.id && (
                                <button 
                                  onClick={(e) => { e.stopPropagation(); setActiveStep(2); }}
                                  className="mt-3 bg-indigo-600 text-white text-sm font-bold py-2 px-6 rounded shadow-md hover:bg-indigo-700 transition"
                                >
                                   Deliver Here
                                </button>
                             )}
                          </div>
                       </div>
                    ))}
                    
                    <button className="flex items-center gap-2 text-blue-600 font-bold text-sm mt-2 hover:bg-blue-50 px-3 py-2 rounded transition w-max">
                       <Plus className="w-4 h-4" /> Add a new address
                    </button>
                 </div>
               )}
            </div>

            {/* STEP 3: PAYMENT */}
            <div className={`bg-white rounded-xl border transition-all ${activeStep === 2 ? 'border-indigo-600 shadow-md ring-1 ring-indigo-50' : 'border-gray-200 shadow-sm'}`}>
               <div className="p-4 flex items-center gap-3 border-b border-gray-100" onClick={() => activeStep > 1 && setActiveStep(2)}>
                  <span className={`font-bold w-6 h-6 flex items-center justify-center rounded text-xs ${activeStep === 2 ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-500'}`}>3</span>
                  <h3 className={`font-bold text-sm uppercase ${activeStep === 2 ? 'text-indigo-900' : 'text-gray-500'}`}>Payment Options</h3>
               </div>

               {activeStep === 2 && (
                 <div className="p-4 space-y-3">
                    {['UPI', 'Credit / Debit / ATM Card', 'Net Banking', 'Cash on Delivery'].map((method, i) => (
                       <label key={i} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition">
                          <input 
                            type="radio" 
                            name="payment" 
                            checked={paymentMethod === method} 
                            onChange={() => setPaymentMethod(method)}
                            className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-gray-300" 
                          />
                          <span className="text-sm font-medium text-gray-900">{method}</span>
                          {method === 'UPI' && <span className="ml-auto text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded font-bold">Fastest</span>}
                       </label>
                    ))}
                    
                    <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3.5 rounded-lg shadow-lg transition active:scale-95 mt-4 flex items-center justify-center gap-2">
                       <Lock className="w-4 h-4" /> Pay {formatPrice(total)}
                    </button>
                 </div>
               )}
            </div>

          </div>

          {/* --- RIGHT: ORDER SUMMARY (4 Cols) --- */}
          <div className="lg:col-span-4">
             <div className="bg-white rounded-xl border border-gray-200 shadow-sm sticky top-24 p-5">
                <h3 className="font-bold text-gray-500 text-sm uppercase mb-4 pb-2 border-b border-gray-100">Price Details</h3>
                
                <div className="space-y-3 text-sm mb-6">
                   <div className="flex justify-between">
                      <span className="text-gray-600">Price ({cartItems.reduce((a,c)=>a+c.quantity,0)} items)</span>
                      <span className="text-gray-900">{formatPrice(subtotal)}</span>
                   </div>
                   <div className="flex justify-between">
                      <span className="text-gray-600">Discount</span>
                      <span className="text-green-600">- {formatPrice(discount)}</span>
                   </div>
                   <div className="flex justify-between">
                      <span className="text-gray-600">Delivery Charges</span>
                      <span className="text-green-600">Free</span>
                   </div>
                   <div className="flex justify-between pt-3 border-t border-dashed border-gray-200 font-bold text-lg text-gray-900">
                      <span>Total Payable</span>
                      <span>{formatPrice(total)}</span>
                   </div>
                </div>

                <div className="bg-green-50 border border-green-100 rounded-lg p-3 text-xs text-green-700 font-medium text-center">
                   You will save {formatPrice(discount)} on this order
                </div>

                <div className="mt-6">
                   <h4 className="font-bold text-gray-900 text-xs uppercase mb-3 flex items-center gap-2">
                      <Truck className="w-4 h-4" /> Items in this order
                   </h4>
                   <div className="space-y-3 max-h-48 overflow-y-auto pr-1 custom-scrollbar">
                      {cartItems.map(item => (
                         <div key={item.id} className="flex gap-3">
                            <div className="w-12 h-12 bg-gray-50 rounded border border-gray-100 flex-shrink-0 flex items-center justify-center p-1">
                               <img src={item.image} alt="product" className="w-full h-full object-contain mix-blend-multiply" />
                            </div>
                            <div className="flex-1">
                               <p className="text-xs font-medium text-gray-800 line-clamp-1">{item.name}</p>
                               <p className="text-[10px] text-gray-500">Qty: {item.quantity}</p>
                            </div>
                         </div>
                      ))}
                   </div>
                </div>

             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;