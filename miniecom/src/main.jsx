import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Home } from './components/pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/common/Layout'
import Product from './components/pages/Product'
import ProductDetails from './components/pages/ProductDetails'
import MainContextFile from './components/context/MainContextFile'
import Cart from './components/pages/Cart'



createRoot(document.getElementById('root')).render(
 
  <MainContextFile>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            {/* http://localhost:5173/product   {<Product/> */}  

              {/* http://localhost:5173/product/beauty   {<Product/> */}  
              <Route path='/cart' element={<Cart/>}/>
            <Route path='/product/:categorySlug?' element={<Product/>}/>
        {/* http://localhost:5173/product/kiwi */}
              <Route path='/product-details/:slug' element={<ProductDetails/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  </MainContextFile>
   
 
)
