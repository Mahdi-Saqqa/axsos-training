import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProductForm } from '../components/ProductForm';
import AllProduct from '../components/AllProduct';
import Product from '../components/Product';

const Main = () => {
  return (
    <Routes>
      <Route path="/product/new" element={<ProductForm />} />
      <Route path="/" element={<AllProduct />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/product/:id/edit" element={<ProductForm />} />
    </Routes>
  );
};

export default Main;
