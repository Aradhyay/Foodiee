import { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import LoginPage from "./components/LoginPage/LoginPage"; 

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin?<LoginPage setShowLogin={setShowLogin} />:<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
