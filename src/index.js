import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createRoot } from "react-dom/client";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import MainLayout from './Layouts/MainLayout';
import BasketProvider from './Context/BasketContext';
import WishlistProvider from './Context/WishlistContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BasketProvider>
    <WishlistProvider>
    <App/>

    </WishlistProvider>
  
  </BasketProvider>
 
);


