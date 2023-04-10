import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './components/layout/userLayout'
import HomePage from './pages/homepage'
import DetailProduct from './pages/productDetail'
import AdminLayout from './components/admin'
import Dashboard from './pages/dashboard'
import Signup from './pages/signup'
import Signin from './pages/signIn'
import ProductUpdate from './pages/productUpdate'


function App() {

  return <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/' element={<UserLayout />}>
        <Route index element={<HomePage />} />
        <Route path='products/:id' element={<DetailProduct />} />
      </Route>
      <Route path='/admin' element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='product/:id' element={<ProductUpdate />} />
      </Route>
    </Routes>
  </BrowserRouter >
}

export default App
