import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Saludo from './Saludo'
import AboutUs from './about'

import Services from './Services'
import Products from './Products'
import Clients from './Clients'

import Footer from './Footer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Saludo />
    <AboutUs />
    <Services />
    <Products />
    <Clients />

    <Footer />
  </React.StrictMode>,
)
