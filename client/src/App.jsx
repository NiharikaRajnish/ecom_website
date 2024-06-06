import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Checkout from "./components/Checkout";
import { useEffect, useState } from "react";
import Cart from "./pages/Cart";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";


const App = () => {
  const user = store.getState().user.currentUser;
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>

        <Route path="/products/:category" element={<ProductList/>}>
        </Route>

        <Route path="/product/:id" element={<Product addToCart={addToCart}/>}>
        </Route>


        <Route path="/cart" element={<Cart cartItems={cartItems}/>}>
        </Route>

        <Route path="/checkout" element={<Checkout/>}>
        </Route>

        <Route path="/login" element={<Login/>}>
        </Route>

        
        <Route path="/register" element={<Register/>}>
        </Route> 

{/* {user ? (
          <>
            <Route path="/login" element={<Navigate to="/" />} />
            <Route path="/register" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
           
            <Route path="/login" element={<Login  />} />
            <Route path="/register" element={<Register/>} />
          </>
        )} */}


      </Routes>
    </Router>
    </Provider>

  );
};

export default App;