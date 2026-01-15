import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Home } from './components/pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/common/Layout'
import Product from './components/pages/Product'
import ProductDetails from './components/pages/ProductDetails'



createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
           <Route path='/' element={<Home/>}/>
           {/* http://localhost:5173/product   {<Product/> */}  

            {/* http://localhost:5173/product/beauty   {<Product/> */}  
           <Route path='/product/:categorySlug?' element={<Product/>}/>
       {/* http://localhost:5173/product/kiwi */}
            <Route path='/product-details/:slug' element={<ProductDetails/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
   
 
)
