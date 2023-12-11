import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createRoot } from "react-dom/client";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import MainLayout from './Layouts/MainLayout';
import BasketProvider from './Context/BasketContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BasketProvider>
    <App/>
  </BasketProvider>
 
);


