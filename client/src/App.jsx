import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { isAuthenticated } from "./utils";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Vendor from "./pages/Vendor";
import Admin from "./pages/Admin";
import User from "./pages/User";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Catlog from "./pages/Catlog";
import VendorProducts from "./pages/Dashboard/Vendor/Products";
import VendorAdd from "./pages/Dashboard/Vendor/Add";

import AdminOverview from "./pages/Dashboard/Admin/Overview";
import AdminVerify from "./pages/Dashboard/Admin/Verify";

// Dashboards
import VendorDashboard from "./pages/Dashboard/Vendor/VendorDashboard";
import VendorSignup from "./pages/vendor/Signup";
import VerificationForm from "./pages/Dashboard/Vendor/VerificationForm";
import VendorCategory from "./pages/Dashboard/Vendor/AddCategory";

import SingleProduct from "./pages/SingleProduct";

export default function App() {
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const result = await fetch("http://localhost:4269/api/product/all");

  //     const products = await result.json();
  //     console.log(products);
  //   };
  //   fetchProducts();
  // }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendor" element={<Vendor />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/product/single/:id" element={<SingleProduct />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/vendor/request" element={<Cart />} />
        <Route path="/dashboard/vendor" element={<VendorAdd />} />
        <Route path="/dashboard/vendor/products" element={<VendorProducts />} />
        <Route path="/dashboard/vendor/add" element={<VendorAdd />} />
        <Route path="/dashboard/vendor/category" element={<VendorCategory />} />
        <Route path="/dashboard/admin" element={<AdminOverview />} />
        <Route path="/dashboard/admin/verify" element={<AdminVerify />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/catlog" element={<Catlog />} />
        <Route path="/product/:type" element={<Product />} />
        <Route path="/vendor/signup" element={<VendorSignup />} />
        <Route path="/vendor/form" element={<VerificationForm />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
