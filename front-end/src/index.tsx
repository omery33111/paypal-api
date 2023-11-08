import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './features/base/HomePage';
import Products from './features/product/Products';
import Cart from './features/cart/Cart';
import Orders from './features/order/Orders';



const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>

<BrowserRouter>

  <Routes>

      <Route path = "/" element={<App />}>

      <Route path = "/" element={<HomePage />} />

      <Route path = "/products" element={<Products />} />

      <Route path = "/cart" element={<Cart />} />

      <Route path = "/order/order_post" element={<Orders />} />


      </Route>

      {/* <Route path="/*" element={<ErrorPage />} /> */}

      </Routes>

</BrowserRouter>

</Provider>
  </React.StrictMode>
);