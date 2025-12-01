import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShieldCheck } from 'lucide-react';
import allProducts from '../data/product.json';

// Helper for INR currency
const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price * 84); 
};

const Cart = () => {
  // Simulating a cart by picking a few items from product.json
  const [cartItems, setCartItems] = useState([
    { ...allProducts[0], quantity: 1 }, 
    { ...allProducts[6], quantity: 2 } 
  ]);

  const updateQuantity = (id, newQty) => {
    if (newQty < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQty } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discount = subtotal * 0.1; // 10% discount logic
  const total = subtotal - discount;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png" alt="Empty Cart" className="w-64 h-64 object-contain mix-blend-multiply" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Cart is Empty</h2>
        <p className="text-gray-500 mb-6 text-center">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/" className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-indigo-700 transition">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen font-sans pb-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Shopping Cart ({cartItems.length})</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left: Cart Items List */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row gap-4">
                {/* Image */}
                <div className="w-full sm:w-32 h-32 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center p-2">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                </div>
                
                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-gray-900 text-lg leading-tight line-clamp-2">{item.name}</h3>
                      <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500 transition">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 uppercase font-bold tracking-wide">{item.brand}</p>
                    <div className="mt-2 text-sm text-green-600 font-medium">In Stock</div>
                  </div>

                  <div className="flex justify-between items-end mt-4">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-gray-100 text-gray-600 transition"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-gray-100 text-gray-600 transition"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="text-right">
                      <span className="block text-xl font-bold text-gray-900">{formatPrice(item.price * item.quantity)}</span>
                      {item.quantity > 1 && <span className="text-xs text-gray-500">{formatPrice(item.price)} each</span>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Checkout Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-4">Order Summary</h2>
              
              <div className="space-y-3 text-sm mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600 font-bold">Free</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Discount (10%)</span>
                  <span className="text-green-600">-{formatPrice(discount)}</span>
                </div>
                <div className="border-t border-dashed border-gray-200 my-2 pt-2 flex justify-between font-bold text-lg text-gray-900">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>

              <Link to="/checkout">
                <button className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition flex items-center justify-center gap-2 shadow-lg active:scale-95">
                  Proceed to Checkout <ArrowRight className="w-5 h-5" />
                </button>
              </Link>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                Safe and Secure Payments
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;