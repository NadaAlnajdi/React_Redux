import Header from "./components/Header";
import Footer from "./components/Footer";
import { Slider } from "./components/Slider";
import Products from "./components/products/Products";
import { Home } from "./components/pages/Home";
import SharedComponents from "./components/layout/SharedComponents";
import ProductForm from "./components/products/ProductForm";
import { NotFound } from "./components/pages/NotFound";
import ProductDetails from "./components/products/ProductDetails";
import ProductTable from "./components/products/ProductTable";
import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements,} from "react-router-dom";
import { getAllBooks, getBooksById } from "./api/bookApi";
import React, { useState, useEffect } from 'react';
export function App() {


  const router = createBrowserRouter(createRoutesFromElements(
    <>
  	<Route path='/' element={<SharedComponents />} >
					<Route index loader={getAllBooks} element={<Home />} />
					<Route path='books' loader={getAllBooks}  element={<ProductTable />} />
          <Route path='books/edit/:id' loader={({ params }) =>getBooksById(params.id)} element={<ProductForm  />} />
					<Route path='books/:id' loader={({ params }) => getBooksById(params.id)}  element={<ProductDetails />} />
					<Route path='*' element={<NotFound />} />
				</Route>
    </>

  ))
  return (
    <>
    <RouterProvider router={router} />
  
    </>
    
  );
}

