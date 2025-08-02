import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import Collection from "./components/Collection/Collection";
import RakhiDisplay from "./components/RakhiDisplay/RakhiDisplay";
import Login from "./components/Login/Login";
import ComboOffer from "./components/ComboOffer/ComboOffer";



const App = () => {
  const [showLogin,setShowLogin] = useState(false);
  const [category, setCategory] = useState("All");
  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/rakhi-collection"
            element={
              
                <Collection category={category} setCategory={setCategory} />
             
            }
          />
          <Route
            path="/rakhi-display"
            element={
              
                <RakhiDisplay category={category} setCategory={setCategory} />
              
            }
          />
          

          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
         
         
        </Routes>
        <ComboOffer/>
      

        <Footer />
      
      </div>
    </>
  );
};

export default App;
