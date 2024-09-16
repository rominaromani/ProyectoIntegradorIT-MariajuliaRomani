import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Rutas from './routes/Rutas'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>

     <Header />

     <Rutas />

     <Footer />

    </BrowserRouter>
  )
}

export default App