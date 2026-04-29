import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Services from './pages/services/Services'
import NotFound from './pages/notfound/NotFound'
import Layout from './layout/Layout'
import Contact from './pages/contact/Contact'



const App = () => {

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App
