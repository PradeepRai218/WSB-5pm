import React from 'react'
import SideBar from './SideBar'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from './Footer'

export default function MainLayout() {
  return (
    <div className='grid grid-cols-[15%_auto] gap-10'>
        <SideBar/>
        <div>
            <Header/>
            <Outlet/>

            <Footer/>
        </div>
    </div>
  )
}
