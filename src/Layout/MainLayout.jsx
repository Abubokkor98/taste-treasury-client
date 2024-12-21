import React from 'react'
import Home from '../Pages/Home'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

export default function MainLayout() {
  return (
    <div className='max-w-screen-xl mx-auto'>
        <header><Navbar></Navbar></header>
        <main className='min-h-[calc(100vh-242px)]'><Outlet></Outlet></main>
        <footer><Footer></Footer></footer>
        
    </div>
  )
}
