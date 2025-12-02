import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import Help from "./pages/Help";

// --- Subpage Imports ---
import Electronics from "./subpages/electronics"; 
import ElectronicsProductDetails from "./subpages/electronics/productdisplay"; 
import FashionTrends from "./subpages/FashionTrends";
import HomesFurniture from "./subpages/HomesFurniture";
import TvsAppliances from "./subpages/TvsAppliances";
import Grocery from "./subpages/Grocery";
import TodaysSpecial from "./subpages/TodaysSpecial";
import Store99 from "./subpages/Store99"; // New Import

// --- Profile Imports ---
import Profile from "./pages/Profile";
import Addresses from "./pages/profile/Addresses";
import Orders from "./pages/profile/Orders";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/checkout" element={<Checkout />} />

            {/* Subpages */}
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/electronics/product/:id" element={<ElectronicsProductDetails />} />
            <Route path="/fashion-trends" element={<FashionTrends />} />
            <Route path="/homes-furniture" element={<HomesFurniture />} />
            <Route path="/tvs-appliances" element={<TvsAppliances />} />
            <Route path="/grocery" element={<Grocery />} />
            <Route path="/todays-special" element={<TodaysSpecial />} />
            <Route path="/99store" element={<Store99 />} /> {/* New Route */}

            {/* Profile Section */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/addresses" element={<Addresses />} />
            <Route path="/profile/orders" element={<Orders />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}