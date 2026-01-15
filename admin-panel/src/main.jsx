import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route } from 'react-router'
import { Router } from 'react-router'
import { Routes } from 'react-router'
import Login from './components/pages/auth/Login'
import MainLayout from './components/common/MainLayout'
import Dashboard from './components/pages/dashboard/Dashboard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path='/dashboard' element={<Dashboard/>}/>

            </Route>
             <Route path='/' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
