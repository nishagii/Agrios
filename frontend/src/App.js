import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import BadFruits from "./Pages/Farmer/BadFruits";
import BadVegetables from "./Pages/Farmer/BadVegetables";
import FreshFruits from "./Pages/Farmer/Freshfruits";
import Contact from "./Pages/Common/Contact";
import FreshVegetables from "./Pages/Farmer/FreshVegetables";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Orders from "./Pages/Farmer/Orders";
import About from "./Pages/Common/About";
import Footer from "./Components/Footer/Footer";
import Services from "./Pages/Common/Services";
import UpdateItem from "./Pages/Farmer/UpdateFreshFruits";
import HomeAll from "./Pages/Common/HomeAll";
import Cart from "./Pages/Users/Cart";
import ScrollToTop from "./Components/Layout/Layout";
import Product from "./Pages/Users/Product";
import LoginSignup from "./Pages/Common/Register";
import ShopCategory from "./Pages/Users/ShopCategory";
import fruit_image from "./Components/Assets/freshfut.jpeg";
import vegetable_image from "./Components/Assets/fvegetables.jpeg";
import AppDownload from "./Components/AppDownload/AppDownload";
import Login from "./Pages/Common/Login";
import PlaceOrder from "./Pages/Placeorder/PlaceOrder";
import Myorders from "./Pages/Myorders/Myorders";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import farm_image from "./Components/Assets/farm.jpeg";
import farm_veg from "./Components/Assets/farmveg.jpeg";


function App() {
  // Define the initial list of fruits
  const initialFruits = [
    {
      id: 1,
      name: "Apple",
      price: 2.5,
      quantity: 100,
      image: "/path/to/apple-image.jpg",
    },
    {
      id: 2,
      name: "Banana",
      price: 1.0,
      quantity: 200,
      image: "/path/to/banana-image.jpg",
    },
    {
      id: 3,
      name: "Orange",
      price: 3.0,
      quantity: 150,
      image: "/path/to/orange-image.jpg",
    },
    // Add more fruits as needed
  ];

  // Define the initial list of products (vegetables)
  const initialProducts = [
    {
      id: 1,
      name: "Tomato",
      price: 1.5,
      quantity: 120,
      image: "/path/to/tomato-image.jpg",
    },
    {
      id: 2,
      name: "Carrot",
      price: 2.0,
      quantity: 180,
      image: "/path/to/carrot-image.jpg",
    },
    {
      id: 3,
      name: "Spinach",
      price: 2.5,
      quantity: 80,
      image: "/path/to/spinach-image.jpg",
    },
    // Add more vegetables as needed
  ];

  const [fruits, setFruits] = useState(initialFruits);
  const [products, setProducts] = useState(initialProducts);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <ScrollToTop />

        <Navbar setShowLogin={setShowLogin} />

        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/contact" element={<Contact />} />

          {/* these are for the farmer */}
          <Route
            path="/fresh-vegetables"
            element={
              <FreshVegetables products={products} setProducts={setProducts} />
            }
          />
          <Route
            path="/fresh-fruits"
            element={<FreshFruits fruits={fruits} setFruits={setFruits} />}
          />
          <Route path="/old-vegetables" element={<BadVegetables />} />
          <Route path="/old-fruits" element={<BadFruits />} />

          <Route path="/orders" element={<Orders />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/" element={<HomeAll />} />

          <Route
            path="/update/:id"
            element={
              <UpdateItem
                products={products}
                setProducts={setProducts}
                fruits={fruits}
                setFruits={setFruits}
              />
            }
          />

          <Route path="/product" element={<Product />} />
          <Route path=":productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<LoginSignup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
          <Route path="/myorders" element={<Myorders />} />

          <Route
            path="/ffruits"
            element={
              <ShopCategory banner={vegetable_image} category="ffruits" />
            }
          />
          <Route
            path="/fvegetables"
            element={<ShopCategory banner={fruit_image} category="fveg" />}
          />
          <Route
            path="/oldfruits"
            element={<ShopCategory banner={farm_image} category="ofruits" />}
          />
          <Route
            path="/oldvegetables"
            element={<ShopCategory banner={farm_veg} category="oveg" />}
          />
        </Routes>
        <AppDownload />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
