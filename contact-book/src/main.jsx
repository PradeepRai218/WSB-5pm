import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './components/pages/Home.jsx'

import Product from './components/pages/Product.jsx'

createRoot(document.getElementById('root')).render(

    <Product />
 
)
